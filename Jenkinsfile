pipeline {
  agent any

  options {
    buildDiscarder logRotator(artifactDaysToKeepStr: '', artifactNumToKeepStr: '5', daysToKeepStr: '', numToKeepStr: '5')
  }

  stages {
    stage('Build & Test') {
      when {
        branch 'main'
      }

      steps {
        nodejs(nodeJSInstallationName: 'node-lts') {
          sh 'npm ci && npm run build'
          sh 'npm run test:ci -- --passWithNoTests'
        }
      }
    }
    stage('Deploy') {
      when {
        branch 'main'
      }
      
      steps {
        sshagent(credentials: ['silverflame_app']) {
          sh 'scp -r ./public root@silverflame_app:/home/node/app'
          sh 'scp -r ./.next/standalone root@silverflame_app:/home/node/app'
          sh 'ssh root@silverflame_app "mkdir /home/node/app/.next"'
          sh 'scp -r ./.next/static root@silverflame_app:/home/node/app/.next'

          sh 'ssh root@silverflame_app "cd /home/node/app && mv ./standalone/* . && pm2-runtime start node -- /home/node/app/server.js"'
        }
      }
    }
  }
}