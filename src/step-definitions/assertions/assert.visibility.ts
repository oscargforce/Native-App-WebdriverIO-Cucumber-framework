import { Then } from '@cucumber/cucumber';
import { swipe } from '../../reusable-functions/swipe';
import { getElementLocator } from '../element-behaviours/get.element.locator';
import { ElementKey, NameOfPage } from '../set-up/global.variables.types';
import { ScenarioWorld } from '../set-up/world';

Then(
  /^I should be navigated to the "([^"]*)" page and the "([^"]*)" should be visible$/,
  async function (this: ScenarioWorld, nameOfPage: NameOfPage, elementKey: ElementKey) {
    const { globalConfig, globalVariables } = this;
    globalVariables.currentPage = nameOfPage;
    const elementLocator = getElementLocator(elementKey, globalConfig, globalVariables);
    const visible = await $(elementLocator).isDisplayed();
    if (!visible) await swipe({ up: true });
    await expect($(elementLocator)).toBeDisplayed();
  }
);
