pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                git url: 'https://github.com/zombivoro/Ejercicio2-WebTesting-Alten', branch: 'master'
            }
        }
        stage('Test') {
            steps {
                sh 'chmod u+x src/test/resources/webdrivers/chrome/chromedriver.exe'
                sh 'chmod u+x src/test/resources/webdrivers/firefox/geckodriver.exe'

                sh 'chmod u+x src/test/resources/webdrivers/chrome/chromedriver'
                sh 'chmod u+x src/test/resources/webdrivers/firefox/geckodriver'

                // browser is selected here, chrome or firefox tasks
                sh './gradlew chrome'
            }
        }
    }
    // post {
    //     always {
    //         publishHTML(target: [
    //                 reportName : 'Serenity',
    //                 reportDir:   'target/site/serenity',
    //                 reportFiles: 'index.html',
    //                 keepAll:     true,
    //                 alwaysLinkToLastBuild: true,
    //                 allowMissing: false
    //         ])
    //     }
    // }
}