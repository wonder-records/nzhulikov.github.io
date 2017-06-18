pipeline {
  agent any
  stages {
    stage('Preparing') {
      steps {
        echo "Preparing"
        sh "npm install gulp-cli -g"
        sh "npm install"
      }
    }
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
