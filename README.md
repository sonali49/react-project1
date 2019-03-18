Instruction Document

Below are the steps needed to run the application in any system:

System should have nodeJs and Yarn installed from respective path as mentioned:

https://nodejs.org
https://yarnpkg.com
 Or 
Yarn could also be installed using npm with command - npm install -g yarn

In the created application webpack is used for module bundler and Babel is used for javascript complier. There are also other dependencies been used to run the application, which can be found in package.json.

1. Pull the application from git hub in your system
2. Command - "npm install" could be run to fetch the dependencies in your local system
3. Run the application in command prompt using - "yarn run dev-server", this will open a local server in your browser and running application could be seen at path - http://localhost:8080/riverOfNews
4. Currently the user validation has been done only for 2 users and their data is stored locally within an object. So, the main page will show a dropdown containing 2 users as - 
 - sonali491@gmail.com
 - random@mynewsdesk.com

5. On selecting either of the username, respective unique key and channel Id will be populated in the textbox which are non editable.
6. After the data population, click on submit button will show the result of list items present.
7. Also the Iframe code that needs to be embedded in any HTML is shown in the left side below Submit button.
8. I have added a "test.html" which can be used to integrate the iframe code and verify if content gets loaded.
9. When the river of news appears, we can see 2 buttons at the top to increase/decrease the font size till 5 levels. (Images are not getting resize)
10. Tried to maintain the overflow with respect to resizing the screen. (Still utilization of SCSS feature is not done as expected)

