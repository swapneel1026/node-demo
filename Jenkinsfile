@Library('devops-lib') _
pipeline{
    agent any
    stages{
      stage('Node CI'){
        steps{
            nodeCI()
        }
      }
       
    }

    post{
        always{
            echo "Pipeline successful "
        }
    }
}