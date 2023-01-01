import { When } from '@cucumber/cucumber';
import { ElementKey } from '../set-up/global.variables.types';
import { ScenarioWorld } from '../set-up/world';
import { getElementLocator } from './get.element.locator';

When(
  /^I fill the "(.*)" with "(.*)"$/,
  async function (this: ScenarioWorld, elementKey: ElementKey, inputValue: string) {
    const { globalConfig, globalVariables } = this;
    const elementLocator = getElementLocator(elementKey, globalConfig, globalVariables);
    await $(elementLocator).waitForDisplayed();
    await $(elementLocator).setValue(inputValue);
  }
);
