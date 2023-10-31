'use client'

import { signIn, signOut, useSession } from 'next-auth/react'

const AdminCareers = () => {
  const test = useSession()

  return (
    <div>
      <button type="button" onClick={() => signIn('github')}>
        로그인
      </button>
      <button type="button" onClick={() => signOut()}>
        로그아웃
      </button>
      {JSON.stringify(test)}
    </div>
  )
}
export default AdminCareers
