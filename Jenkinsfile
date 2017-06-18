pipeline {
  agent any
  environment {
    NODE_PATH = "${env.APPDATA}/npm/node_modules"
    }
  stages {
    stage('Build') {
      steps {
        call build.cmd
      }
    }
    stage('Deploy') {
      steps {
        call node "${env.NODE_PATH}/gulp" deploy
      }
    }
  }
}
