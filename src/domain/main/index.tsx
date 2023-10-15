import Link from 'next/link'
import getAppList from './utils/getAppList'
import Image from 'next/image'
import AppIcon from './AppIcon'

const Main = async () => {
  const appList = await getAppList()

  return (
    <div className="flex gap-8">
      {appList.map((app) => (
        <AppIcon key={app.id} app={app} />
      ))}
    </div>
  )
}
export default Main
