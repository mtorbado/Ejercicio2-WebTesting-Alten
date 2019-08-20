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
            sh './gradlew clean build'
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