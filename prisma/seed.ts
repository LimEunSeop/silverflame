import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
async function main() {
  console.log('== App Seeding ==')
  const jenkins = await prisma.app.upsert({
    where: { name: 'jenkins' },
    update: {},
    create: {
      name: 'Jenkins',
      image: '/images/app-icons/jenkins.svg',
      url: 'https://jenkins.silverflame.dev',
    },
  })
  const transmission = await prisma.app.upsert({
    where: { name: 'transmission' },
    update: {},
    create: {
      name: 'Transmission',
      image: '/images/app-icons/transmission.svg',
      url: 'https://transmission.silverflame.dev',
    },
  })

  console.log({ jenkins, transmission })
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
