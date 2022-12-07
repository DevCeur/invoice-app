import type { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import argon2 from 'argon2';

import { prisma } from '~/lib/prisma.server';

type CreateUserOptions = {
  data: { name: string; username: string; email: string; password: string };
};

export const createUser = async ({ data }: CreateUserOptions) => {
  try {
    const hashedPassword = await argon2.hash(data.password);

    const user = await prisma.user.create({
      data: { ...data, password: hashedPassword },
    });

    return { user, errors: null };
  } catch (e) {
    const error = e as PrismaClientKnownRequestError;
    const errorMeta = error.meta as { target: string[] };

    const field = errorMeta.target[0];

    if (error.code === 'P2002') {
      return {
        user: null,
        errors: { [field]: `This ${field} already exists` },
      };
    }

    return { user: null, errors: e };
  }
};
