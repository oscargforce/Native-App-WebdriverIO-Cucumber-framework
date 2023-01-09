# Cucumber - WebdriverIo - Appium - Functional programing framework.

## How it works.
- The framework is utilizing [cucumber world](https://github.com/cucumber/cucumber-js/blob/main/docs/support_files/world.md)
- See src/step-definitions/set-up/** which is the heart of the framework.
- Before the test execeution, global.variables.ts are extracting all page objects in src/pages/** into one big object called pageElementMappings which holds all locators.  
world.ts are then linking the pageElementMappings to each scenario through [cucumber world](https://github.com/cucumber/cucumber-js/blob/main/docs/support_files/world.md)
- The framework is also taking advantage of regex to reduce the amount of dublicate step definitions.

## Advantages with this framework.
- Super easy to create test cases and you can reuse the same step definition for almost anything thanks to regex and pageElementMappings.
- Low maintainance.
