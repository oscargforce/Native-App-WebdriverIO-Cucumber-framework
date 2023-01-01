// prettier-ignore
import { ElementKey, GlobalConfig, GlobalVariables,} from '../set-up/global.variables.types';

export function getElementLocator(
  elementKey: ElementKey,
  globalConfig: GlobalConfig,
  globalVariables: GlobalVariables
) {
  const { currentPage } = globalVariables;
  const { pageElementMappings } = globalConfig;
  const elementLocator =
    pageElementMappings[currentPage]?.[elementKey] || pageElementMappings.common?.[elementKey];

  if (!elementLocator)
    throw new Error(
      `${elementKey} is ${elementLocator} and does not exist in ${currentPage}.json or common.json`
    );

  return elementLocator;
}

/**
 * pageElementMappings = {
 *    login= {
 *      loginbtn: "locator"
 *   },
 *    home = {
 *      menuItem: "locator"
 *  },
 * }
 */
