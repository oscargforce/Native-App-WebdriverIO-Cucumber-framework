import { World, setWorldConstructor, IWorld } from '@cucumber/cucumber';
import { GlobalConfig, GlobalVariables } from './global.variables.types';
import { setWorldParameters } from './set.world.parameters';

export class ScenarioWorld extends World {
  globalConfig: GlobalConfig;
  globalVariables: GlobalVariables;

  constructor(options: IWorld) {
    super(options);
    this.globalVariables = { currentPage: '' };
    this.globalConfig = setWorldParameters();
    console.log(this.globalConfig);
  }
}

setWorldConstructor(ScenarioWorld);
