@Library('devops-lib') _
pipeline{
    agent any
    stages{
        stage('Greeting'){
            steps{
                sayHello()
            }
        }
        stage('Install Dependencies'){
            steps{
                installNodeDeps()
                            }
        }
        stage('Run tests'){
            steps{
               runNodeTests()
            }
        }
        // stage('Publish junit Report'){
        //     steps{
        //         junit 'junit.xml'
        //     }
        // }
    }
    post{
        always{
            echo "Pipeline successful "
        }
    }
}