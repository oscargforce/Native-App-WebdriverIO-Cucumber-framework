import { PageElementMappings, GlobalConfig } from './global.variables.types';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config({ path: path.resolve(__dirname, '../../config/paths.env') });

const getJsonFromFile = <T = Record<string, string>>(path: string): T => {
  return require(`${process.cwd()}${path}`);
};

export function setWorldParameters(): GlobalConfig {
  const mappingFiles = fs.readdirSync(
    `${process.cwd()}${process.env.PAGE_ELEMENTS_PATH}${process.env.DEVICE}`
  );

  const pageElementMappings: PageElementMappings = mappingFiles.reduce(
    (pageElementConfigObject, jsonFile) => {
      const key = jsonFile.replace('.json', '');
      const locator = getJsonFromFile(`${process.env.PAGE_ELEMENTS_PATH}${process.env.DEVICE}/${jsonFile}`);
      return { ...pageElementConfigObject, [key]: locator };
    },
    {}
  );

  const worldParameters: GlobalConfig = {
    pageElementMappings,
  };

  return worldParameters;
}

