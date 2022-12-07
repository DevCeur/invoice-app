import type { ActionFunction } from '@remix-run/node';
import type { ZodError } from 'zod';
import { z } from 'zod';

import { formatZodError } from '~/utils/format-zod-error';

import { SignUpView } from '~/views/sign-up-view';

export const action: ActionFunction = async ({ request }) => {
  const formData = Object.fromEntries(await request.formData());

  const formSchema = z.object({
    name: z.string().min(3, 'This name is too short'),
    username: z.string().min(3, 'This username is too short'),
    email: z.string().email('This is not a valid email'),
    password: z.string().min(6, 'Password must have at least 6 characters'),
  });

  try {
    const validFormData = formSchema.parse(formData);

    // create user on db

    // create user session

    // replace to redirect the user to dashboard
    return { success: true, validFormData };
  } catch (e) {
    const errors = formatZodError({ error: e as ZodError });

    return { success: false, errors };
  }
};

const SignUpRoute = () => {
  return <SignUpView />;
};

export default SignUpRoute;
