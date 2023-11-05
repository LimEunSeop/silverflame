const { PrismaClient } = require('@prisma/client')

const careersData = {
  name: '경력관리 사이트',
  description:
    '경력관리를 한 곳에서 체계적으로 하기위해 제작한 사이트입니다. NAS에서 CI/CD, DB를 모두 구성하였고 데이터관리를 위한 백오피스 기능 또한 탑재되어 있습니다.',
  siteUrl: 'https://www.silverflame.dev/careers',
  githubUrl: 'https://github.com/LimEunSeop/silverflame',
  images: {
    update: [
      {
        altText: '경력관리 사이트 데스크탑 이미지 1',
        url: '/images/project-images/careers-desktop-1.png',
        platform: 'DESKTOP',
      },
      {
        altText: '경력관리 사이트 데스크탑 이미지 2',
        url: '/images/project-images/careers-desktop-2.png',
        platform: 'DESKTOP',
      },
      {
        altText: '경력관리 사이트 데스크탑 이미지 3',
        url: '/images/project-images/careers-desktop-3.png',
        platform: 'DESKTOP',
      },
      {
        altText: '경력관리 사이트 데스크탑 이미지 4',
        url: '/images/project-images/careers-desktop-4.png',
        platform: 'DESKTOP',
      },
      {
        altText: '경력관리 사이트 데스크탑 이미지 5',
        url: '/images/project-images/careers-desktop-5.png',
        platform: 'DESKTOP',
      },
      {
        altText: '경력관리 사이트 데스크탑 이미지 6',
        url: '/images/project-images/careers-desktop-6.png',
        platform: 'DESKTOP',
      },
      {
        altText: '경력관리 사이트 데스크탑 이미지 7',
        url: '/images/project-images/careers-desktop-7.png',
        platform: 'DESKTOP',
      },
      {
        altText: '경력관리 사이트 모바일 이미지 1',
        url: '/images/project-images/careers-mobile-1.png',
        platform: 'MOBILE',
      },
      {
        altText: '경력관리 사이트 모바일 이미지 2',
        url: '/images/project-images/careers-mobile-2.png',
        platform: 'MOBILE',
      },
      {
        altText: '경력관리 사이트 모바일 이미지 3',
        url: '/images/project-images/careers-mobile-3.png',
        platform: 'MOBILE',
      },
      {
        altText: '경력관리 사이트 모바일 이미지 4',
        url: '/images/project-images/careers-mobile-4.png',
        platform: 'MOBILE',
      },
      {
        altText: '경력관리 사이트 모바일 이미지 5',
        url: '/images/project-images/careers-mobile-5.png',
        platform: 'MOBILE',
      },
      {
        altText: '경력관리 사이트 모바일 이미지 6',
        url: '/images/project-images/careers-mobile-6.png',
        platform: 'MOBILE',
      },
      {
        altText: '경력관리 사이트 모바일 이미지 7',
        url: '/images/project-images/careers-mobile-7.png',
        platform: 'MOBILE',
      },
      {
        altText: '경력관리 사이트 모바일 이미지 8',
        url: '/images/project-images/careers-mobile-8.png',
        platform: 'MOBILE',
      },
    ],
  },
}
const jenkinsData = {
  name: 'Jenkins',
  image: '/images/app-icons/jenkins.svg',
  url: 'https://jenkins.silverflame.dev',
}
const transmissionData = {
  name: 'Transmission',
  image: '/images/app-icons/transmission.svg',
  url: 'https://transmission.silverflame.dev',
}
const dailyByteData = {
  name: '데일리바이트',
  description:
    '쉬우면서도 깊이 있는 비즈니스・경제 미디어를 제공하는 서비스입니다. 클라이언트 및 백오피스 프론트엔드 개발 전체를 담당했습니다.',
  siteUrl: 'https://www.mydailybyte.com',
  githubUrl: undefined,
  images: {
    update: [
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
}
const dailyByteBizData = {
  name: '데일리바이트 B2B',
  description:
    '바이트컴퍼니의 B2B 서비스로 금융 관련 제휴사 앱의 웹뷰를 제공하고 있습니다. 신한금융투자, 농협 올원뱅크의 웹뷰 프론트엔드 개발 전체를 담당했습니다.',
  siteUrl: 'https://biz.mydailybyte.com/nh',
  githubUrl: undefined,
  images: {
    update: [
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
}
const frontendLectureData = {
  name: '프론트엔드 실습',
  description: '패스트캠퍼스 야무와 함께하는 프론트엔드 개발 시작하기 CAMP 강좌를 수강하며 실습한 결과물입니다.',
  siteUrl: 'https://codepen.io/collection/XBRdVK?cursor=eyJwYWdlIjoxNn0=',
  githubUrl: undefined,
  images: {
    update: [
      {
        altText: '프론트엔드 실습 이미지 1',
        url: '/images/project-images/frontend-lecture-1.png',
        platform: 'DESKTOP',
      },
      {
        altText: '프론트엔드 실습 이미지 2',
        url: '/images/project-images/frontend-lecture-2.png',
        platform: 'DESKTOP',
      },
      {
        altText: '프론트엔드 실습 이미지 3',
        url: '/images/project-images/frontend-lecture-3.png',
        platform: 'DESKTOP',
      },
      {
        altText: '프론트엔드 실습 이미지 4',
        url: '/images/project-images/frontend-lecture-4.png',
        platform: 'DESKTOP',
      },
      {
        altText: '프론트엔드 실습 이미지 5',
        url: '/images/project-images/frontend-lecture-5.png',
        platform: 'DESKTOP',
      },
      {
        altText: '프론트엔드 실습 이미지 6',
        url: '/images/project-images/frontend-lecture-6.png',
        platform: 'DESKTOP',
      },
      {
        altText: '프론트엔드 실습 이미지 7',
        url: '/images/project-images/frontend-lecture-7.png',
        platform: 'DESKTOP',
      },
    ],
  },
}
const publishingData = {
  name: '퍼블리싱 프로젝트',
  description: '웹 사이트를 저만의 마크업으로 재해석하여 퍼블리싱한 결과물입니다.',
  siteUrl: undefined,
  githubUrl: 'https://github.com/LimEunSeop/Publishing-Projects-Index',
  images: {
    update: [
      {
        altText: '퍼블리싱 프로젝트 이미지 1',
        url: '/images/project-images/publishing-1.png',
        platform: 'DESKTOP',
      },
      {
        altText: '퍼블리싱 프로젝트 이미지 2',
        url: '/images/project-images/publishing-2.png',
        platform: 'DESKTOP',
      },
      {
        altText: '퍼블리싱 프로젝트 이미지 3',
        url: '/images/project-images/publishing-3.png',
        platform: 'DESKTOP',
      },
      {
        altText: '퍼블리싱 프로젝트 이미지 4',
        url: '/images/project-images/publishing-4.png',
        platform: 'DESKTOP',
      },
      {
        altText: '퍼블리싱 프로젝트 이미지 5',
        url: '/images/project-images/publishing-5.png',
        platform: 'DESKTOP',
      },
      {
        altText: '퍼블리싱 프로젝트 이미지 6',
        url: '/images/project-images/publishing-6.png',
        platform: 'DESKTOP',
      },
      {
        altText: '퍼블리싱 프로젝트 이미지 7',
        url: '/images/project-images/publishing-7.png',
        platform: 'DESKTOP',
      },
      {
        altText: '퍼블리싱 프로젝트 이미지 8',
        url: '/images/project-images/publishing-8.png',
        platform: 'DESKTOP',
      },
      {
        altText: '퍼블리싱 프로젝트 이미지 9',
        url: '/images/project-images/publishing-9.png',
        platform: 'DESKTOP',
      },
      {
        altText: '퍼블리싱 프로젝트 이미지 10',
        url: '/images/project-images/publishing-10.png',
        platform: 'DESKTOP',
      },
      {
        altText: '퍼블리싱 프로젝트 이미지 11',
        url: '/images/project-images/publishing-11.png',
        platform: 'DESKTOP',
      },
    ],
  },
}
const raffleData = {
  name: '추첨 프로그램',
  description:
    '수업 시간 중 자리바꾸기 프로세스의 비효율을 개선하고자 만든 프로그램으로, 추첨 기능으로 응용할 수 있습니다.',
  siteUrl: 'https://limeunseop.github.io/raffle',
  githubUrl: 'https://github.com/LimEunSeop/raffle',
  images: {
    update: [
      {
        altText: '추첨 프로그램 이미지 1',
        url: '/images/project-images/raffle-1.png',
        platform: 'DESKTOP',
      },
    ],
  },
}
const vanillaAppData = {
  name: 'Vanilla JS 앱',
  description: 'VanillaJS 만으로 제작한 웹 애플리케이션입니다. 알림, 메모, 사진첩 기능을 탑재했습니다.',
  siteUrl: 'https://limeunseop.github.io/vanilaJS-app/dist',
  githubUrl: 'https://github.com/LimEunSeop/vanilaJS-app',
  images: {
    update: [
      {
        altText: 'Vanilla JS 앱 이미지 1',
        url: '/images/project-images/vanilla-app-1.png',
        platform: 'MOBILE',
      },
      {
        altText: 'Vanilla JS 앱 이미지 2',
        url: '/images/project-images/vanilla-app-2.png',
        platform: 'MOBILE',
      },
      {
        altText: 'Vanilla JS 앱 이미지 3',
        url: '/images/project-images/vanilla-app-3.png',
        platform: 'MOBILE',
      },
      {
        altText: 'Vanilla JS 앱 이미지 4',
        url: '/images/project-images/vanilla-app-4.png',
        platform: 'MOBILE',
      },
    ],
  },
}

const prisma = new PrismaClient()

async function main() {
  console.log('== App Seeding ==')
  const jenkins = await prisma.app.upsert({
    where: { name: jenkinsData.name },
    update: jenkinsData,
    create: jenkinsData,
  })
  const transmission = await prisma.app.upsert({
    where: { name: transmissionData.name },
    update: transmissionData,
    create: transmissionData,
  })

  console.log('== Project Seeding ==')
  const careers = await prisma.project.upsert({
    where: { name: careersData.name },
    update: careersData,
    create: careersData,
  })
  const dailyByte = await prisma.project.upsert({
    where: { name: dailyByteData.name },
    update: dailyByteData,
    create: dailyByteData,
  })
  const dailyByteBiz = await prisma.project.upsert({
    where: { name: dailyByteBizData.name },
    update: dailyByteBizData,
    create: dailyByteBizData,
  })
  const frontendLecture = await prisma.project.upsert({
    where: { name: frontendLectureData.name },
    update: frontendLectureData,
    create: frontendLectureData,
  })
  const publishing = await prisma.project.upsert({
    where: { name: publishingData.name },
    update: publishingData,
    create: publishingData,
  })
  const raffle = await prisma.project.upsert({
    where: { name: raffleData.name },
    update: raffleData,
    create: raffleData,
  })
  const vanillaApp = await prisma.project.upsert({
    where: { name: vanillaAppData.name },
    update: vanillaAppData,
    create: vanillaAppData,
  })

  console.log({
    jenkins,
    transmission,
    careers,
    dailyByte,
    dailyByteBiz,
    frontendLecture,
    publishing,
    raffle,
    vanillaApp,
  })
}

// prettier-ignore
main().then(async () => {await prisma.$disconnect()}).catch(async (e) => {
  console.error(e)
  await prisma.$disconnect()
  process.exit(1)
})
