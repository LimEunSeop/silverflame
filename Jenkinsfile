pipeline {
  agent any
  tools {
    nodejs "node-lts"
  }

  options {
    buildDiscarder logRotator(artifactDaysToKeepStr: '', artifactNumToKeepStr: '5', daysToKeepStr: '', numToKeepStr: '5')
  }

  stages {
    stage('TEST - DEV') {
      when {
        branch 'develop'
      }

      steps {
        sh 'npm ci'
        sh 'npm run test:ci -- --passWithNoTests' // 프로덕션 배포때는 테스트 하지 말자
      }
    }
    stage('Build - PROD') {
      when {
        branch 'main'
      }

      environment {
        DATABASE_URL = credentials('env_prod_database_url')
        NEXTAUTH_URL = 'https://www.silverflame.dev'
        NEXTAUTH_SECRET = credentials('env_prod_nextauth_secret')
        GITHUB_ID = credentials('env_prod_github_id')
        GITHUB_SECRET = credentials('env_prod_github_secret')
      }

      steps {
        sh 'echo > .env.production'
        sh 'echo DATABASE_URL=${DATABASE_URL} >> .env.production'
        sh 'echo NEXTAUTH_URL=${NEXTAUTH_URL} >> .env.production'
        sh 'echo NEXTAUTH_SECRET=${NEXTAUTH_SECRET} >> .env.production'
        sh 'echo GITHUB_ID=${GITHUB_ID} >> .env.production'
        sh 'echo GITHUB_SECRET=${GITHUB_SECRET} >> .env.production'

        sh 'npm ci --platform=linuxmusl --arch=x64' // 배포가 되는 alpine linux 서버의 플랫폼 아키텍쳐. sharp 에러 해결
        sh 'npx prisma migrate deploy'
        sh 'npm run build'
      }
    }
    stage('Deploy - PROD') {
      when {
        branch 'main'
      }
      
      steps {
        // script {
        //   def remote = [:]
        //   remote.name = 'silverflame_app'
        //   remote.host = 'silverflame_app'
        //   remote.user = 'node'
        //   remote.password = 'P@ssw0rd'
        //   remote.allowAnyHosts = true
    
        //   sshPut remote: remote, from: "./public", into: "."
        //   sshPut remote: remote, from: "./.next/standalone/*", into: "."
        //   sshCommand remote: remote, command: "mkdir .next"
        //   sshPut remote: remote, from: "./.next/static", into: "./.next"

        //   sshCommand remote: remote, command: "pm2-runtime start node -- /home/node/app/server.js"
        // }

        // withCredentials([usernamePassword(credentialsId: 'silverflame_app', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
        //   sh "scp -r ./public $USERNAME@silverflame_app:/home/node/app"
        //   sh "scp -r ./.next/standalone/* $USERNAME@silverflame_app:/home/node/app"
        //   sh "ssh $USERNAME@silverflame_app 'mkdir /home/node/app/.next'"
        //   sh "scp -r ./.next/static $USERNAME@silverflame_app:/home/node/app/.next"

        //   sh "ssh $USERNAME@silverflame_app 'pm2-runtime start node -- /home/node/app/server.js'"
        // }
        sshagent(credentials: ['silverflame_app']) {
          sh 'scp -o "StrictHostKeyChecking=no" -r ./.next/standalone/* root@silverflame_app:./app/'
          sh 'scp -o "StrictHostKeyChecking=no" -r ./.next/standalone/.[!.]* root@silverflame_app:./app/'
          sh 'scp -o "StrictHostKeyChecking=no" -r ./public root@silverflame_app:./app'
          sh 'scp -o "StrictHostKeyChecking=no" -r ./.next/static root@silverflame_app:./app/.next'

          // sharp 실행: https://nextjs.org/docs/messages/sharp-missing-in-production
          sh 'ssh -o "StrictHostKeyChecking=no" root@silverflame_app "pm2 reload silverflame_app"'
        }
      }
    }
  }
}