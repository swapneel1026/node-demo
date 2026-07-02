@Library('devops-lib') _
pipeline{
    agent any
    stages{
      stage('Node CI'){
        steps{
            nodeCI()
        }
      }
        // stage('Install Dependencies'){
        //     steps{
        //         installNodeDeps()
        //     }
        // }
        // stage('Run tests'){
        //     steps{
        //        runNodeTests()
        //     }
        // }
        // stage('Publish junit Report'){
        //     steps{
        //         publishJunitReport()
        //     }
        // }
    }

    post{
        always{
            echo "Pipeline successful "
        }
    }
}