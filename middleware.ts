import { authMiddleware } from '@clerk/nextjs'

export default authMiddleware({
  // routes taht everyone can see
  publicRoutes: ['/'],
})

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
}
