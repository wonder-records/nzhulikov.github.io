pipeline {
  agent any
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
