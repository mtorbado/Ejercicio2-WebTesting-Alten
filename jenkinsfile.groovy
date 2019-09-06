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

                // browser is selected here, 'chrome' or 'firefox' gradle tasks, or just 'test' to pass them via Jenkins parameters
//                sh "./gradlew clean test aggregate -Dwebdriver.remote.url=http://172.21.36.168:4444/wd/hub " +
//                        "-Dwebdriver.remote.driver=" + params.BROWSER + " -Dwebdriver.remote.os=WINDOWS" +
//                        " -Dserenity.driver.capabilities=applicationName:" + params.NODE

                sh "./gradlew clean chrome aggregate -Dwebdriver.remote.url=http://172.21.36.168:4444/wd/hub "
            }
        }
    }
    post {
        always {
            publishHTML(
                    target: [
                            reportName :            'Serenity',
                            reportDir:              'target/site/serenity',
                            reportFiles:            'index.html',
                            keepAll:                true,
                            alwaysLinkToLastBuild:  true,
                            allowMissing:           false
                    ]
            )
        }
    }
}