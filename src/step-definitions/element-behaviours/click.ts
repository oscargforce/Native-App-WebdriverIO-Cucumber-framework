import { When } from '@cucumber/cucumber';
import { ElementKey } from '../set-up/global.variables.types';
import { ScenarioWorld } from '../set-up/world';
import { getElementLocator } from './get.element.locator';

When(
  /^I click on the "([^"]*)" (?:button|link|checkbox|input field|element|menu item|item)$/,
  async function (this: ScenarioWorld, elementKey: ElementKey) {
    const { globalConfig, globalVariables } = this;
    let elementLocator = getElementLocator(elementKey, globalConfig, globalVariables);
    await $(elementLocator).click();
  }
);
