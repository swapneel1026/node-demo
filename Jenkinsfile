pipeline{
    agent any
    stages{
        stage('Install Dependencies'){
            steps{
                sh '''
                 npm install
                '''
                            }
        }
        stage('Run tests'){
            steps{
                sh '''
                npm test
                '''
            }
        }
        stage('Generate Report'){
            steps{
                sh '''
                junit junit.xml
                '''
            }
        }
    }
    post{
        always{
            echo "Pipeline succesfully ran."
        }
    }
}