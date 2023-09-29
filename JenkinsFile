pipeline {
  agent any

  options {
    buildDiscarder logRotator(artifactDaysToKeepStr: '', artifactNumToKeepStr: '5', daysToKeepStr: '', numToKeepStr: '5')
  }

  stages {

    stach('Install Depandencies') {
      when {
        branch 'main'
      }

      steps {
        sh 'npm ci'
      }
    }
    stage('Build') {
      when {
        branch 'main'
      }

      steps {
        sh 'npm run build'
      }
    }
    stage('Test') {
      when {
        branch 'main'
      }

      steps {

      }
    }
    stage('Deploy') {
      when {
        branch 'main'
      }
      
      steps {
        dir('frontend/dist') {
          sshagent(credentials: ['key-dallog']) {
            sh 'ls'
            sh 'scp ./index.html ubuntu@192.168.XXX.XXX:/home/ubuntu/'
            sh 'scp ./bundle.js ubuntu@192.168.XXX.XXX:/home/ubuntu/'
            sh 'ssh ubuntu@192.168.XXX.XXX "sudo mv ./index.html ./html && sudo mv ./bundle.js ./html"'
          }
        }
      }
    }
  }
}