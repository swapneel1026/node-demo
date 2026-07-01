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
        stage('Publish junit Report'){
            steps{
                junit 'junit.xml'
            }
        }
    }
    post{
        always{
            echo "Pipeline successful"
        }
    }
}