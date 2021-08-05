# NY Times Most Popular

## Getting Started

Steps to run `NY Times Most Popular` application

## Installation

git clone `clone url`

cd into cloned folder
cd folder

`yarn install`
(It will install required dependencies and link modules internally.)

## Folder Structure

After creation, your project should look like this:

```
mayaedu-subscription/
  README.md
  node_modules/
  yarn.lock
  package.json
  .env
  .eslinitrc.json
  src/
    apis/
    components/
    containers/
    routes/
    styles/
    views/
    App.jsx
    index.jsx
    index.html
```

## Available scripts

To start application in development environment.

`yarn start`
Runs the app in the development mode. Open `http://localhost:3000` to view it in the browser.

`yarn run test`
Runs the test cases

`yarn run build`
Builds the app for production to the `build` folder.

## Component Structure and test cases

All the test cases are wriiten within the component folder

## routing

We use react-router-config for routing and to handle containers of projects.

you can refer react-router-config documentation for further clerifications

## Warning

We are also pushing the .env file to git for testing purposes otherwise its not advisable to push these kind of sensitive files to git

## Test Coverage

To run test cases run the command `yarn run test`
To get test coverage run the command `yarn test --coverage`
