// import createMiddleware from 'next-intl/middleware';

// import { locales } from './config';

// export default createMiddleware({
//   locales,
//   defaultLocale: 'en',
// });

// export const config = {
//   matcher: ['/', '/(ru|en)/:path*'],
// };

import createMiddleware from 'next-intl/middleware';

import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(ru|en)/:path*'],
};
