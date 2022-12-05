import { redirect } from '@remix-run/node';
import type { LoaderFunction } from '@remix-run/node';

export const loader: LoaderFunction = () => {
  return redirect('/sign-in');
};

const HomeRoute = () => {
  return (
    <div>
      <h1>Invoice App</h1>
    </div>
  );
};

export default HomeRoute;
