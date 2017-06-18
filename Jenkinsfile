pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh 'node node_modules/gulp/bin/gulp.js build'
      }
    }
    stage('Deploy') {
      steps {
        sh 'node node_modules/gulp/bin/gulp.js deploy'
      }
    }
  }
}
