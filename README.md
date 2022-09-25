# Cypress-e2e automation framework with allure report

## Description

This repository contains e2e tests written in Cypress to test the site https://telnyx.com/ Contains of:

* Page Object Model
* Tests are located in cypress/e2e/tests folder
* Allure report integration

## Setup

Before using cypress, you need to install node.js, install all the dependencies for doing the full operation of the node.js.

#### devDependencies:
* @shelex/cypress-allure-plugin: 2.31.0
* allure-commandline: 2.18.1
* cypress: 10.8.0
  
## Steps to run

* Clone the repository using "git clone "
* npm init
* npm install cypress --save-dev
* npm run cy:run
* npm run allure:report 
  
## Configuration 
1. cypress.config.js - Main config file where default behavior of Cypress can be modified.
2. plugins/index.js - Plugins file is where we can programmatically alter the resolved configuration
  
## License
ISC