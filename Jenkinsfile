pipeline {
  agent any
  environment {
    NODE_PATH = "${env.APPDATA}/npm/node_modules"
    }
  stages {
    stage('Build') {
      steps {
        cmd /c call "\"${env.NODE_PATH}/gulp\" build"
      }
    }
    stage('Deploy') {
      steps {
        cmd /c call "\"${env.NODE_PATH}/gulp\" deploy"
      }
    }
  }
}
