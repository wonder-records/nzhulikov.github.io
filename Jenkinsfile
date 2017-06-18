pipeline {
  agent any
  stages {
    stage('Preparing') {
      steps {
        echo "Preparing"
        sh "npm install"
      }
    }
    stage('Build') {
      steps {
        echo "Building"
        sh "node node_modules/gulp/bin/gulp.js build"
      }
    }
    stage('Deploy') {
      steps {
        echo "Deploying"
        sh "node node_modules/gulp/bin/gulp.js deploy"
      }
    }
  }
}
