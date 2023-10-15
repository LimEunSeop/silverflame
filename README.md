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

## Todo

- domain 이후의 디렉터리 구조 어떻게 해야될까? utils, components 등은 반복시키지만, 부분화면에 대한 것은?? 다시 domain 이라고 쓰기엔 디렉터리 구조가 뭔가 직관적이진 않아보이는데, 그게 최선인 것일까?
