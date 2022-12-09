import { ROUTE } from './enum';

import type { User } from '@prisma/client';
import { redirect } from '@remix-run/node';

import { getCurrentUser } from '~/services/user.server';

export type Policy<PolicyResult> = (
  request: Request,
  options: {
    isPrivate: boolean;
    callback?: (input: PolicyResult) => Promise<any>;
  },
) => Promise<any>;

export const withAuth: Policy<{ user: User | null }> = async (
  request,
  { isPrivate, callback },
) => {
  const { user } = await getCurrentUser({ request });

  if (isPrivate && !user) {
    return redirect(ROUTE.SIGN_IN);
  }

  if (!isPrivate && user) {
    return redirect(ROUTE.INVOICES);
  }

  if (callback) {
    return callback({ user });
  }

  return { user };
};
