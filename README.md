# Silverflame

URL: https://silverflame.dev

## 환경세팅 Check-List

- [] create-next-app 실행
- [] vscode prettier intellisense 익스텐션 설치 https://tailwindcss.com/docs/editor-setup#intelli-sense-for-vs-code
- [] .prettierignore 생성 https://github.com/vercel/next.js/blob/canary/.prettierignore
- [] .eslintrc 생성
- [] 워크스페이스 설정에서 default formatter를 prettier로 하고 formatOnSave true로 하기. typescript도 워크스페이스 버전 사용하도록
- [] .prettierrc 설정에서 prettier 포메팅 설정하고, tailwindCSS 플러그인 적용(적용된거 확인하려면 에디터 재시작 해야됨) https://tailwindcss.com/docs/editor-setup#intelli-sense-for-vs-code
- [] prettier tailwindCSS 플러그인 적용한거 돌아가는지 확인 (prettier with editor integration 필요) https://prettier.io/docs/en/install.html#set-up-your-editor
- [] eslint에서 prettier와 겹치는 설정 없애는 작업 해야함. 각각 독립적으로 움직이도록 https://github.com/prettier/eslint-config-prettier#eslint-config-prettier
- [] next.js 13 폰트최적화 기술 기반으로 font 설정 해야됨

## Prisma 와 결합할 때 고려해야할 것

- next.js 의 빌드시 Server Component가 실행되는 특성 상 디비 마이그레이션 스크립트인 `npx prisma migrate deploy`가 선행되어야 한다.
- **따라서 프로덕션 배포 파이프라인 구축 시 빌드에러가 절대 나지 않아야 한다.**
- 이것에 대해서 많은 고민을 했었다. 그 중의 하나는, 빌드 시 아예 static site 를 생성하지 않는것이었는데, 기본을 해치는 방법이므로 옳은 방법은 아닌것 같다.
- 내 해결책은 git hook을 도입하는 것이다. push 전에 반드시 `npm run build`를 하여 성공 시에만 push 되도록. 그렇게 하면 파이프라인 내에서도 오류없이 빌드가 진행될 것이다.

## Jenkins nodejs 플러그인 적용법

- \*\* 플러그인 설치 잘 했는데 내가 원하는 node 버전 안찍힌다.. 실행권한 할당 안돼서 그런거다. 그리고 얘가 node만 설치하고 npm은 설치 안한다. 아래는 해결방법이다.
- jenkins web에서 nodejs 플러그인을 일단 설치한다.
- docker-compose 설정에서 user: root 설정해두자. 터미널로 접근 후, npm은 apt-get install로 설치한다.
- node가 깔린 위치를 찾아가서 x 권한 추가해줘야된다. jenkins_home의 tools를 잘 찾아보자. 이런 애가 있다. /var/jenkins_home/tools/jenkins.plugins.nodejs.tools.NodeJSInstallation/node-lts/bin

## Todo

- CD 파이프라인에서 빌드 시 변경된 데이터베이스가 미리 필요하여 migration 후 빌드하도록 했다. 만약 빌드가 실패한다면 치명적인 배포오류가 발생하는데, 이 해결방법을 main 브랜치 병합 전 husky로 미리 빌드해보아 성공여부를 결정하는 것이었다. 더 효율적인 방법이 없을까? push 할때마다 빌드시간이 걸리는 비효율이 좀 발생한다.(이게 배포에 대한 고민의 기회를 좀 더 줄 수도 있다..)
  - 개선안 아이디어: main 브랜체는 pull 막고, pull request 같은것만 받는다. develop 브랜치에서 테스트 및 빌드성공을 한 커밋을 merge 할 수 있도록 한다. Q) 메인에서 다시 빌드 하는게 필요할까? 하는 부분은 다시 고민해봐야될듯
- ~~아래와 같은 에러를 해결해보자. .env 를 설정하고 명령어 실행시 환경변수를 세팅해줘도 해결되지 않았다. 이거..해결해야 한다 꼭~~
  - ~~error: 'sharp' is required to be installed in standalone mode for the image optimization to function correctly. Read more at: https://nextjs.org/docs/messages/sharp-missing-in-production~~
  - npm ci 시 프로덕션 플랫폼 옵션을 위해 해결하였다.
- ~~domain 이후의 디렉터리 구조 어떻게 해야될까? utils, components 등은 반복시키지만, 부분화면에 대한 것은?? 다시 domain 이라고 쓰기엔 디렉터리 구조가 뭔가 직관적이진 않아보이는데, 그게 최선인 것일까?~~ => 최상위 도메인에서는 도메인 전반적으로 쓰이는 것들을 폴더별로 묶는다. 하위도메인에서부터 또한 recursive 하게 동일한 폴더구조를 갖도록 한다. 단, 앞에 @를 붙여 보기좋게 상단에 정렬되도록 하고, 하위도메인을 나타내는 폴더는 @를 붙이지 않는 형태로 이 구조를 무한반복한다.
