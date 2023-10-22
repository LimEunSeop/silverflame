import getAppList from './@utils/getAppList'
import Image from 'next/image'
import AppIcon from './AppIcon'

const Main = async () => {
  const appList = await getAppList()

  return (
    <div className="flex flex-col gap-8">
      <Image src="/logo-full.png" width="300" height="240" alt="" />
      <div className="flex justify-center gap-8">
        {appList.map((app) => (
          <AppIcon key={app.id} app={app} />
        ))}
      </div>
    </div>
  )
}
export default Main
