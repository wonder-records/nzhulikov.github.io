pipeline {
  agent any
  environment {
    NODE_PATH = "${env.APPDATA}/npm/node_modules/"
    }
  stages {
    stage('Build') {
      steps {
        sh(script: "node ${env.NODE_PATH}/gulp build", returnStdout: true)
      }
    }
    stage('Deploy') {
      steps {
        sh(script: "node ${env.NODE_PATH}/gulp deploy", returnStdout: true)
      }
    }
  }
}
