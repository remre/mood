import { authMiddleware } from '@clerk/nextjs'

export default authMiddleware({
  // routes taht everyone can see
  publicRoutes: ['/journal', '/journal/[id]', '/history'],
})

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
}
