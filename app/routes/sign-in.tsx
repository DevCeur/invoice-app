import type { ActionFunction, LoaderFunction } from '@remix-run/node';
import { redirect } from '@remix-run/node';
import type { ZodError } from 'zod';
import { z } from 'zod';

import { withAuth } from '~/utils/auth-policy.server';
import { ROUTE } from '~/utils/enum';
import { formatZodError } from '~/utils/format-zod-error';
import { commitSession, getUserSession } from '~/utils/user-session.server';

import { signInUser } from '~/services/user.server';

import { SignInView } from '~/views/sign-in-view';

export const loader: LoaderFunction = ({ request }) =>
  withAuth(request, { isPrivate: false });

export const action: ActionFunction = async ({ request }) => {
  const formData = Object.fromEntries(await request.formData());

  const formSchema = z.object({
    email: z.string().email('This is not a valid email'),
    password: z.string().min(6, 'Password must have at least 6 characters'),
  });

  try {
    const validFormData = formSchema.parse(formData);

    // this errors corresponds to the user creation on the database
    const { user, errors } = await signInUser({ data: validFormData });

    if (errors) {
      return { errors };
    }

    const userSession = await getUserSession({ request });

    userSession.set('userId', user.id);

    return redirect(ROUTE.DASHBOARD, {
      headers: { 'Set-Cookie': await commitSession(userSession) },
    });
  } catch (e) {
    const errors = formatZodError({ error: e as ZodError });

    return { errors };
  }
};

const SignInRoute = () => {
  return <SignInView />;
};

export default SignInRoute;
