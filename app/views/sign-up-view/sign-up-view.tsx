import { Form, Link } from '@remix-run/react';

import { ROUTE } from '~/utils/enum';

import { SignLayout } from '~/components/layouts/sign-layout';

import { Button } from '~/components/base/button';
import { TextInput } from '~/components/base/text-input';

export const SignUpView = () => {
  return (
    <SignLayout
      title="Create Account"
      summary="Fill the form below and start managing your invoices."
    >
      <Form className="flex flex-col gap-6">
        <div className="grid grid-cols-2 gap-6">
          <TextInput label="Name:" name="name" />
          <TextInput
            label="Username:"
            name="username"
            placeholder="e.g. JhonDoe07"
          />
        </div>

        <div className="flex flex-col space-y-6 mb-6">
          <TextInput label="Email:" name="email" type="email" />
          <TextInput
            label="Password:"
            name="password"
            type="password"
            placeholder="+6 characters"
          />
        </div>

        <div className="flex flex-col justify-center items-center space-y-4">
          <Button fullWidth colorScheme="purple">
            Create Account
          </Button>
          <Link
            to={ROUTE.SIGN_IN}
            className="text-sm dark:text-dark-text-light"
          >
            Already have an account? Sign In
          </Link>
        </div>
      </Form>
    </SignLayout>
  );
};
