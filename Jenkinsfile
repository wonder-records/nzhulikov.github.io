pipeline {
  agent any
  environment {
        NODE_PATH = '%AppData%/npm/node_modules/'
    }
  stages {
    stage('Build') {
      steps {
        sh(script: "gulp build", returnStdout: true)
      }
    }
    stage('Deploy') {
      steps {
        sh(script: "gulp deploy", returnStdout: true)
      }
    }
  }
}
