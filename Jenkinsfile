pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        echo "Building"
        sh "node node_modules/.bin/gulp.js build"
      }
    }
    stage('Deploy') {
      steps {
        echo "Deploying"
        sh "node node_modules/.bin/gulp.js deploy"
      }
    }
  }
}
