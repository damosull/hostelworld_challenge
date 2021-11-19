How to install:
1. After cloning this repository, navigate inside the hostel_world_challenge folder.
2. Via the command line, run `npm install` to install the node modules.

After installing, how to open the Cypress Explorer & view features:
1. After installing, nside the hostel_world_challenge folder, run `npx cypress open`.

How to run the tests via the command line:
1. `npm run test` - runs all tests headlessly.
2. `npm run headTest` - runs all tests with the browser shown (headed).
3. `npm run chromeTest` - runs all tests with Chrome browser.
4. `npm run firefoxTest` - runs all tests with Firefox browser.
5. `npm run edgeTest` - runs all tests with Edge browser.
6. `cypress run --spec .\cypress\integration\examples\Factoriall.feature` - runs this specific feature file only
7. `npm run regression` - runs only tests with @Regression tags

Notes:
* The website URL is defined in cypress.json.
* Screenshots of failed tests can be found in the `cyprss/screenshots` folder. This will be generated after your tests complete & if some of them fail.
* Once your tests complete, a HTML test report will be generated, & can be found in the `mochawesome-report` folder. 
* Videos of your test runs can be found in the `cypress/videos` folder. This will be generate after your tests complete.