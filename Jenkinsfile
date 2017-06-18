pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
            node {
              try {
                  gulp build
                  currentBuild.result = 'SUCCESS'
              } catch (Exception err) {
                  currentBuild.result = 'FAILURE'
              }
              echo "RESULT: ${currentBuild.result}"
              }
            }
        }
        stage('Deploy') {
            when {
                expression {
                  currentBuild.result == null || currentBuild.result == 'SUCCESS'
                }
            }
            steps {
                gulp deploy
            }
        }
    }
}
