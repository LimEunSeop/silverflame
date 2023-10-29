const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {
  console.log('== App Seeding ==')
  const jenkins = await prisma.app.upsert({
    where: { name: 'Jenkins' },
    update: {},
    create: {
      name: 'Jenkins',
      image: '/images/app-icons/jenkins.svg',
      url: 'https://jenkins.silverflame.dev',
    },
  })
  const transmission = await prisma.app.upsert({
    where: { name: 'Transmission' },
    update: {},
    create: {
      name: 'Transmission',
      image: '/images/app-icons/transmission.svg',
      url: 'https://transmission.silverflame.dev',
    },
  })

  console.log('== Project Seeding ==')
  const dailyByte = await prisma.project.upsert({
    where: { name: '데일리바이트' },
    update: {},
    create: {
      name: '데일리바이트',
      description:
        '쉬우면서도 깊이 있는 비즈니스・경제 미디어를 제공하는 서비스입니다. 클라이언트 및 백오피스 프론트엔드 개발 전체를 담당했습니다.',
      siteUrl: 'https://www.mydailybyte.com',
      githubUrl: undefined,
      images: {
        create: [
          {
            altText: '데일리바이트 데스크탑 이미지 1',
            url: '/images/project-images/daily-byte-desktop-1.png',
            platform: 'DESKTOP',
          },
          {
            altText: '데일리바이트 데스크탑 이미지 2',
            url: '/images/project-images/daily-byte-desktop-2.png',
            platform: 'DESKTOP',
          },
          {
            altText: '데일리바이트 데스크탑 이미지 3',
            url: '/images/project-images/daily-byte-desktop-3.png',
            platform: 'DESKTOP',
          },
          {
            altText: '데일리바이트 데스크탑 이미지 4',
            url: '/images/project-images/daily-byte-desktop-4.png',
            platform: 'DESKTOP',
          },
          {
            altText: '데일리바이트 데스크탑 이미지 5',
            url: '/images/project-images/daily-byte-desktop-5.png',
            platform: 'DESKTOP',
          },
          {
            altText: '데일리바이트 데스크탑 이미지 6',
            url: '/images/project-images/daily-byte-desktop-6.png',
            platform: 'DESKTOP',
          },
          {
            altText: '데일리바이트 데스크탑 이미지 7',
            url: '/images/project-images/daily-byte-desktop-7.png',
            platform: 'DESKTOP',
          },
          {
            altText: '데일리바이트 데스크탑 이미지 8',
            url: '/images/project-images/daily-byte-desktop-8.png',
            platform: 'DESKTOP',
          },
          {
            altText: '데일리바이트 데스크탑 이미지 9',
            url: '/images/project-images/daily-byte-desktop-9.png',
            platform: 'DESKTOP',
          },
          {
            altText: '데일리바이트 데스크탑 이미지 10',
            url: '/images/project-images/daily-byte-desktop-10.png',
            platform: 'DESKTOP',
          },

          {
            altText: '데일리바이트 모바일 이미지 1',
            url: '/images/project-images/daily-byte-mobile-1.png',
            platform: 'MOBILE',
          },
          {
            altText: '데일리바이트 모바일 이미지 2',
            url: '/images/project-images/daily-byte-mobile-2.png',
            platform: 'MOBILE',
          },
          {
            altText: '데일리바이트 모바일 이미지 3',
            url: '/images/project-images/daily-byte-mobile-3.png',
            platform: 'MOBILE',
          },
          {
            altText: '데일리바이트 모바일 이미지 4',
            url: '/images/project-images/daily-byte-mobile-4.png',
            platform: 'MOBILE',
          },
          {
            altText: '데일리바이트 모바일 이미지 5',
            url: '/images/project-images/daily-byte-mobile-5.png',
            platform: 'MOBILE',
          },
          {
            altText: '데일리바이트 모바일 이미지 6',
            url: '/images/project-images/daily-byte-mobile-6.png',
            platform: 'MOBILE',
          },
          {
            altText: '데일리바이트 모바일 이미지 7',
            url: '/images/project-images/daily-byte-mobile-7.png',
            platform: 'MOBILE',
          },
          {
            altText: '데일리바이트 모바일 이미지 8',
            url: '/images/project-images/daily-byte-mobile-8.png',
            platform: 'MOBILE',
          },
          {
            altText: '데일리바이트 모바일 이미지 9',
            url: '/images/project-images/daily-byte-mobile-9.png',
            platform: 'MOBILE',
          },
        ],
      },
    },
  })
  const dailyByteBiz = await prisma.project.upsert({
    where: { name: '데일리바이트 B2B' },
    update: {},
    create: {
      name: '데일리바이트 B2B',
      description:
        '바이트컴퍼니의 B2B 서비스로 금융 관련 제휴사 앱의 웹뷰를 제공하고 있습니다. 신한금융투자, 농협 올원뱅크의 웹뷰 프론트엔드 개발 전체를 담당했습니다.',
      siteUrl: 'https://biz.mydailybyte.com/nh',
      githubUrl: undefined,
      images: {
        create: [
          {
            altText: '데일리바이트 B2B 모바일 이미지 1',
            url: '/images/project-images/daily-byte-biz-mobile-1.png',
            platform: 'MOBILE',
          },
          {
            altText: '데일리바이트 B2B 모바일 이미지 2',
            url: '/images/project-images/daily-byte-biz-mobile-2.png',
            platform: 'MOBILE',
          },
          {
            altText: '데일리바이트 B2B 모바일 이미지 3',
            url: '/images/project-images/daily-byte-biz-mobile-3.png',
            platform: 'MOBILE',
          },
          {
            altText: '데일리바이트 B2B 모바일 이미지 4',
            url: '/images/project-images/daily-byte-biz-mobile-4.png',
            platform: 'MOBILE',
          },
          {
            altText: '데일리바이트 B2B 모바일 이미지 5',
            url: '/images/project-images/daily-byte-biz-mobile-5.png',
            platform: 'MOBILE',
          },
        ],
      },
    },
  })

  console.log({ jenkins, transmission, dailyByte, dailyByteBiz })
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
