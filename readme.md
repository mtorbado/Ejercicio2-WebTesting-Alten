This test exercise is meant to be executed using Jenkins on a Docker container, which connects to a local Selenium Grid hub.
Use the following steps to configure your system:

1. Run jenkins on docker like this: 'docker run -p 8080:8080 --name jk jenkins:lts'
2. Start Selenium Grid hub with: 'java -jar selenium-server-standalone-3.141.59.jar -role hub'
3. Start node 1 with: 'java -jar selenium-server-standalone-3.141.59.jar -role node -nodeConfig node1.json'
4. Start node 2 with: 'java -jar selenium-server-standalone-3.141.59.jar -role node -nodeConfig node2.json'
5. Select which 'build.gradle' task you want to try on the jenkinsfile 'Test' stage (sh "./gradlew clean (test/firefox/chrome) aggregate").
Tasks 'firefox' and 'chrome' are meant to be used with nodes node1.json and node2.json, as they are distinguished by their supported browsers.
If you want to set up nodes that support all browsers and yet decide which node executes the test, use the 'build.gradle' 'test' option and
specify NODE and BROWSER in Jenkins via parameterized build.
6. Run it!
