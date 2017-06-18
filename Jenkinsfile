pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        gulp build
      }
    }
    stage('Deploy') {
      steps {
        gulp deploy
      }
    }
  }
}
