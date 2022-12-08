import type { LoaderFunction } from '@remix-run/node';

import { withAuth } from '~/utils/auth-policy.server';

import { SignInView } from '~/views/sign-in-view';

export const loader: LoaderFunction = ({ request }) =>
  withAuth(request, { isPrivate: false });

const SignInRoute = () => {
  return <SignInView />;
};

export default SignInRoute;
