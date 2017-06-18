node {
  stage 'Checkout'

  checkout scm
  sh "git submodule update --init"

  stage 'Build'

  echo "Building branch ${env.BRANCH_NAME}"

  try {
      sh "gulp build"
      currentBuild.result = "SUCCESS"
  } catch (Exception err) {
      currentBuild.result = "FAILURE"
  }
  echo "RESULT: ${currentBuild.result}"

  stage 'Deploy'

  when {
      expression {
        currentBuild.result == null || currentBuild.result == "SUCCESS"
      }
  }

  echo "Deploying branch ${env.BRANCH_NAME}"
  sh "gulp deploy"
}
