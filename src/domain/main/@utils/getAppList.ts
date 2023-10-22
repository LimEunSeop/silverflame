import jenkinsImage from '@/domain/main/images/jenkins.svg'
import transmissionImage from '@/domain/main/images/transmission.svg'

export type App = {
  id: string
  name: string
  image: string
  url: string
}

const data: Array<App> = [
  {
    id: 'jenkins',
    name: 'Jenkins',
    image: jenkinsImage,
    url: 'https://jenkins.silverflame.dev',
  },
  {
    id: 'transmission',
    name: 'Transmission',
    image: transmissionImage,
    url: 'https://transmission.silverflame.dev',
  },
]

import { cache } from 'react'

const getAppList = cache(async () => {
  return data
})

export default getAppList
