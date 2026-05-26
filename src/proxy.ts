import createMiddleware from 'next-intl/middleware'
import { routing } from './i18n/routing'

export default createMiddleware(routing)

export const config = {
  // Apply only to frontend routes — skip Payload admin, API, and static assets.
  matcher: ['/((?!admin|api|_next|_vercel|my-route|.*\\..*).*)'],
}
