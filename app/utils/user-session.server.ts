import { createCookieSessionStorage } from '@remix-run/node';

const SESSION_SECRET = process.env.AUTH_SESSION_SECRET;

if (typeof SESSION_SECRET !== 'string')
  throw new Error("Env variable AUTH_SESSION_SECRET it's required");

export const { getSession, commitSession, destroySession } =
  createCookieSessionStorage({
    cookie: {
      name: 'invoice_app/auth_cookie',
      httpOnly: true,
      maxAge: 31 * 24 * 60 * 60,
      sameSite: 'lax',
      secrets: [SESSION_SECRET],
      secure: process.env.NODE_ENV === 'production',
    },
  });

export const getUserSession = async ({ request }: { request: Request }) => {
  return await getSession(request.headers.get('Cookie'));
};
