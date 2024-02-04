import { useClerk } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const SignOutPage = () => {
  const { signOut } = useClerk()
  const router = useRouter()

  return (
    // Clicking on this link will sign out a user and navigate them to the "/" (home) page.
    <Link href="/">
      <a onClick={() => signOut()}>Sign out</a>
    </Link>
  )
}
export default SignOutPage
