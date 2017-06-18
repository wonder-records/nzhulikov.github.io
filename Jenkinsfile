pipeline {
  agent any
  environment {
    NODE_PATH = "${env.APPDATA}/npm/node_modules"
    }
  stages {
    stage('Build') {
      steps {
        node node_modules\gulp\bin\gulp.js build
      }
    }
    stage('Deploy') {
      steps {
        node node_modules\gulp\bin\gulp.js build
      }
    }
  }
}
