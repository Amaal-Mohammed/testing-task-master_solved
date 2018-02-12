## Tester Challenge
Clone the repo and run ```npm install``` before you start

**NodeJs** is  required to run this project [https://nodejs.org](https://nodejs.org)
## Backend Integration Test
Using the following endpoint: http://localhost:3000/hotels 

Note: run ```npm start``` to start the json server first

Write an integration tests with jest for these endpoints:


- [ ] GET /hotels -> should return a list of hotels
- [ ] POST /hotels  -> should create a new hotel
  ```json
  {
    "name":"Elmandra",
    "city": "alexandria",
    "price": 500,
    "availability": [
        { "from": "10-10-2020", "to": "15-10-2020" },
        { "from": "25-10-2020", "to": "15-11-2020" },
        { "from": "10-12-2020", "to": "15-12-2020" }
      ]
  }
  ```  
- [ ] GET /hotels/:hotelID -> should return hotel data
- [ ] PATCH /hotels/:hotelID -> should update hotel data
```json
  {
    "name":"new Elmandra",
    "city": "giza",
    "price": 100,
    "availability": [
        { "from": "10-10-2020", "to": "15-10-2020" },
        { "from": "25-10-2020", "to": "15-11-2020" },
        { "from": "10-12-2020", "to": "15-12-2020" }
      ]
  }
  ``` 
- [ ] DELETE /hotels/:hotelID -> should delete hotel from the list

## End to End test

Using the following url : http://hotelsearch.surge.sh

Open it should search for hotel available from start date to the end date 

Write an E2E tests with cypress to test the following actions:

### Search page (/):

- [ ] when you open the home page show a place holder till the data is loaded
- [ ] when the data loaded should show a 2 date pickers and 2 button
- [ ] when you click any of "To" or "From" it should open a date picker
- [ ] when you choose a date from the picker it should update the fields
- [ ] when you click clear it should clear the two feilds
- [ ] when you click seach and feilds are empty should display validtion error on each feild
- [ ] when you click seach and feilds are not empty should go to result page
 
### Search Result page (/result):

- [ ] when you open result page directly from url it should show empty result and a link to search page
- [ ] when you open it from the search page you there is no result should also show empty result with link
- [ ] when you open it from the search page with result it should show hotels card list
- [ ] when you type in filter by name field it should filter the cards by name
- [ ] when you change price slider it should filter the cards by price
- [ ] when you click sort by name it should sort the cards by name
- [ ] when you click sort by price it should filter the cards by price

### Note: these are the valid cases make sure to cover invalid case as well

## Test Enviroment

Test env is already setuped with jest, axois, cypress

```
  __tests__/
    hotelsApi.test.js --> write you api tests here
  cypress/
    ingeration/
      searchPage.spec.js --> write search e2e test here
      searchPage.spec.js --> write search result e2e test here
```
## Running the tests

```npm run test``` to run jest test runner (api test cases)

```npm run e2e``` to run cypress test cases (E2E)

## Conditions
- You should consume the api endpoint mentioned and not use it as internal json file
- You should write api ingeration tests with jest
- You should write E2E tests with cypress
- You should write a good testing report

## What we are looking for

- **Simple, clear, readable code** How well structured it is? Clear separation of concerns? Can anyone just look at it and get the idea to
what is being done? Does it follow any standards?
- **Correctness** Does the your tests cover all valid and invalid cases? Can you find bugs or trivial flaws?
- **Bug resport** Is your test/bug report well structured?


## Questions & Delivery

If you have any questions to this challenge, please do reach out to us.

The challenge should be delivered as a link to a public git repository (github.com or bitbucket.com are preferred).

## Checklist

Before submitting, make sure that your code

[ ] Usage is clearly mentioned in the README file, This including setup the tests, how to run it, examples,etc

## Note

Implementations focusing on **quality over feature completeness** will be highly appreciated,  don’t feel compelled to implement everything and even if you are not able to complete the challenge, please do submit it anyways.

## Resources

[https://facebook.github.io/jest/](https://facebook.github.io/jest/)

[https://www.cypress.io/](https://www.cypress.io/)

[https://github.com/axios/axios](https://github.com/axios/axios)

##Code Usage
How to run integration and e2e tests
For integration testing
-Make sure Node js is installed [https://nodejs.org](https://nodejs.org)
-Make sure axios is installed [https://github.com/axios/axios](https://github.com/axios/axios)
-Make sure jest is installed
1-Clone the repository
2-Open windows power shell
3-cd path   
4-run npm start 
5-In browser open http://localhost:3000/hotels 
6-open another windows shell ,cd path (path to test.js) 
7-run command npm run test



For Running E2E Test :
-Cypress should be installed https://docs.cypress.io/guides/getting-started/installing-cypress.html#Opening-Cypress
-Node js should be installed [https://nodejs.org](https://nodejs.org)
1-Clone the repository
2-Open windows power shell
3-cd path  for example : C:\Users\Downloads\AUser\testing-task-master
4-Run command   ./node_modules/.bin/cypress open
5-Select js file searchpgae.js
Same steps for searchRedultPage.js

Please make sure to run using Chrome Brower





