pipeline {
  agent any
  stages {
    stage('build') {
      steps {
        gulp build
      }
    }
    stage('deploy') {
      steps {
        gulp deploy
      }
    }
  }
}
