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
        withCredentials(bindings: [sshUserPrivateKey(passphraseVariable: 'P@ssw0rd', usernameVariable: 'node')]) {
          // some block
          sh 'scp -r ./public node@silverflame_app:/home/node/app'
          sh 'scp -r ./.next/standalone/* node@silverflame_app:/home/node/app'
          sh 'ssh node@silverflame_app "mkdir /home/node/app/.next"'
          sh 'scp -r ./.next/static node@silverflame_app:/home/node/app/.next'

          sh 'ssh node@silverflame_app "pm2-runtime start node -- /home/node/app/server.js"'
        }
        // sshagent(credentials: ['silverflame_app']) {
        //   sh 'scp -r ./public node@silverflame_app:/home/node/app'
        //   sh 'scp -r ./.next/standalone/* node@silverflame_app:/home/node/app'
        //   sh 'ssh node@silverflame_app "mkdir /home/node/app/.next"'
        //   sh 'scp -r ./.next/static node@silverflame_app:/home/node/app/.next'

        //   sh 'ssh node@silverflame_app "pm2-runtime start node -- /home/node/app/server.js"'
        // }
      }
    }
  }
}