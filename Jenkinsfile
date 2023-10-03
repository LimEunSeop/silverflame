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
          sh 'scp -r ./public node@silverflame_app:./app'
          sh 'scp -r ./.next/standalone/. node@silverflame_app:./app'
          sh 'ssh node@silverflame_app "mkdir -p ./app/.next"'
          sh 'scp -r ./.next/static node@silverflame_app:./app/.next'

          sh 'ssh node@silverflame_app "pm2-runtime start node -- ./app/server.js"'
        }
      }
    }
  }
}