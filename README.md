# FanCode API Test Automation

This assignment tests an API using Playwright and JavaScript to assert that users from the city FanCode have completed more than 50% of their tasks based on the users and todos APIs.

**Prerequisites**
+ Node.js (v14.x or higher)
+ NPM or Yarn
+ Playwright (installed via NPM)

**Setup**
**1. Clone the Repository**
```
git clone https://github.com/bmukund21/FanCode-API-Test
cd api-tests
```
**2. Install Dependencies**
Ensure all required dependencies for Playwright and testing are installed:
```
npm install
```
**3. Configure Playwright**
Install Playwright browsers if not already installed:
```
npx playwright install
```

**How to Run the Tests**

**1. Run Tests**
To execute the tests, use the following command:
`npx playwright test` This will run the test to validate that users from the city FanCode have completed more than 50% of their tasks.

**2. Test Report**
You can generate and view the test report with: `npx playwright show-report`


**Understanding the Code**

**API Helper**
* `apiHelper.js:` Contains helper functions for making GET requests to https://jsonplaceholder.typicode.com/users and https://jsonplaceholder.typicode.com/todos. It retrieves the user data and todos data, which are used in the test.

**Test Specification**
* `todoTest.spec.js:` This test script validates that users belonging to the city FanCode (determined by latitude and longitude) have completed more than 50% of their tasks. The script filters users based on geolocation and calculates task completion percentage.

**Key Checks in the Test**
1. Filters users whose latitude is between -40 to 5 and longitude is between 5 to 100.
2. For each user, it calculates the percentage of completed tasks from the todos API.
3. Asserts that at least one user has completed more than 50% of their tasks.
4. Outputs the list of users who have completed more than 50% of their tasks.

**Troubleshooting**

1. Test not running: Ensure Playwright and dependencies are properly installed. You can check the installation by running npx playwright --version.
2. API issues: Verify that the https://jsonplaceholder.typicode.com service is up and running by manually visiting the endpoints.

