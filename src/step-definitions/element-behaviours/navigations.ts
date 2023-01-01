import { Then, Given } from '@wdio/cucumber-framework';
import { NameOfPage } from '../set-up/global.variables.types';
import { ScenarioWorld } from '../set-up/world';

Given(
  /^I have navigated to the native app and I am on the "([^"]*)" page$/,
  async function (this: ScenarioWorld, nameOfPage: NameOfPage) {
    const { globalVariables } = this;
    globalVariables.currentPage = nameOfPage;
  }
);

Then(/^I focus on the "(.*)" (?:page|header|pop up)$/, async function (this: ScenarioWorld, nameOfPage: NameOfPage) {
  const { globalVariables } = this;
  globalVariables.currentPage = nameOfPage;
});
