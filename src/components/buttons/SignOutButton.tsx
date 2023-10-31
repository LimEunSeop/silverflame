import { PowerIcon } from '@heroicons/react/24/outline'
import { signOut } from 'next-auth/react'

const SignOutButton = () => {
  return (
    <button type="button" className="btn btn-square btn-ghost" onClick={() => signOut()}>
      <PowerIcon className="h-6 w-6" />
    </button>
  )
}
export default SignOutButton
