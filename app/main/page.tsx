import Main from '@/domain/main'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Main',
}

export const revalidate = 10

export default function MainPage() {
  return <Main />
}
