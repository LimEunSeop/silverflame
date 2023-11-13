import { getCodeLastModifiedDate, getProjectLastModifiedDate } from '@/utils/db/careers'
import { MetadataRoute } from 'next'

export const revalidate = 600

const BASE_URL = 'https://www.silverflame.dev'
const CAREERS_BASE_URL = `${BASE_URL}/careers`

const getStaticPageLastModifiedDate = async (repo: string, path: string) => {
  const lastModifiedDate = await fetch(
    `https://api.github.com/repos/limeunseop/${repo}/commits?path=${path}&page=1&per_page=1`,
  )
    .then((res) => res.json())
    .then((data) => data[0].commit.author.date as string)

  return lastModifiedDate
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: `${CAREERS_BASE_URL}/intro`,
      lastModified: await getStaticPageLastModifiedDate('silverflame', 'src/domain/careers/intro/index.tsx'),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${CAREERS_BASE_URL}/experiences/portfolio`,
      lastModified: await getProjectLastModifiedDate(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${CAREERS_BASE_URL}/experiences/codes`,
      lastModified: await getCodeLastModifiedDate(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${CAREERS_BASE_URL}/resume`,
      lastModified: await getStaticPageLastModifiedDate('my-resume', 'README.md'),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${CAREERS_BASE_URL}/contact`,
      lastModified: await getStaticPageLastModifiedDate('silverflame', 'src/domain/careers/contact/index.tsx'),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ]
}
