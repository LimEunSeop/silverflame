import getAppList from './utils/getAppList'
import Image from 'next/image'
import AppIcon from './AppIcon'
import prisma from '@/lib/prisma'

async function getTestUserList() {
  return await prisma.user.findMany()
}

const Main = async () => {
  const appList = await getAppList()

  const userList = await getTestUserList()

  return (
    <div className="flex flex-col gap-8">
      <Image src="/logo-full.png" width="300" height="240" alt="" />
      <div className="flex justify-center gap-8">
        {appList.map((app) => (
          <AppIcon key={app.id} app={app} />
        ))}
      </div>
      {userList.map((user) => (
        <span key={user.id}>
          {user.name} {user.email}
        </span>
      ))}
    </div>
  )
}
export default Main
