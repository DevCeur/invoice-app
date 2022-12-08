import type { LoaderFunction } from '@remix-run/node';

import { withAuth } from '~/utils/auth-policy.server';

export const loader: LoaderFunction = ({ request }) =>
  withAuth(request, { isPrivate: true });

const DashboardRoute = () => {
  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  );
};

export default DashboardRoute;
