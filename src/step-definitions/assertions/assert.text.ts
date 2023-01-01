import { Then } from '@cucumber/cucumber';
import { getElementLocator } from '../element-behaviours/get.element.locator';
import { ElementKey } from '../set-up/global.variables.types';
import { ScenarioWorld } from '../set-up/world';

Then(
  /^"(.*)" should have the text "(.*)"$/,
  async function (this: ScenarioWorld, elementKey: ElementKey, expectedText: string) {
    const {globalConfig, globalVariables} = this
    const elementLocator = getElementLocator(elementKey, globalConfig, globalVariables)
     await $(elementLocator).waitForDisplayed()
     await expect($(elementLocator)).toHaveText(expectedText)
  }
);
