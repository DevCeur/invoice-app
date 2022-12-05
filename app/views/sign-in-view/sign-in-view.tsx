import { Form, Link } from '@remix-run/react';

import { ROUTE } from '~/utils/enum';

import { SignLayout } from '~/components/layouts/sign-layout';

import { Button } from '~/components/base/button';
import { TextInput } from '~/components/base/text-input';

export const SignInView = () => {
  return (
    <SignLayout title="Welcome Back" summary="Nice to see you here again!">
      <Form className="flex flex-col gap-6">
        <div className="flex flex-col space-y-6 mb-6">
          <TextInput label="Email:" name="email" type="email" />
          <TextInput label="Password:" name="password" type="password" />
        </div>

        <div className="flex flex-col justify-center items-center space-y-4">
          <Button fullWidth colorScheme="purple">
            Sign In
          </Button>
          <Link
            to={ROUTE.SIGN_UP}
            className="text-sm dark:text-dark-text-light"
          >
            Don't have an account? Sign Up
          </Link>
        </div>
      </Form>
    </SignLayout>
  );
};
