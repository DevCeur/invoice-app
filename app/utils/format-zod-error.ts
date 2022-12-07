import type { ZodError } from 'zod';

type FormatZodErrorOptions = {
  error: ZodError;
};

export const formatZodError = ({
  error,
}: FormatZodErrorOptions): { [x: string]: string } => {
  const errors: { [x: string]: string } = {};

  error.issues.forEach((issue) => {
    errors[issue.path[0]] = issue.message;
  });

  return errors;
};
