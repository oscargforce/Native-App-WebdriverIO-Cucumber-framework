import { Given } from '@cucumber/cucumber';
import { NameOfPage } from './set-up/global.variables.types';
import { ScenarioWorld } from './set-up/world';

Given(
  /^I use the deep link endpoint "(.*)" to navigate myself to the "(.*)" page$/,
  async function (this: ScenarioWorld, deepLinkUrl: string, nameOfPage: NameOfPage) {
    const { globalVariables } = this;
    globalVariables.currentPage = nameOfPage;
    await driver.url(deepLinkUrl);
    console.log(`MY GLOBAL PAGE MAPPING VARIABLE IS: ${process.env.DEVICE}`)
  }
);
