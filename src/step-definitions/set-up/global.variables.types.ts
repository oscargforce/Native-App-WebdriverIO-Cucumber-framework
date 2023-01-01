export type ElementKey = string; // Comes from feature file as parameter and are name of key in JSON in src/pages
export type ElementLocator = string; // The actual locator, will be returned from getElementLocator
export type NameOfPage = string; // Used to identify what page Im on, and in what page object to search for a locator.
export type PageElementMappings = Record<NameOfPage, Record<ElementKey, ElementLocator>>; // an Object with all page objects
export type GlobalVariables = { [key: string]: string }; // Object with any variables, for instance NameOfPage
export type GlobalConfig = {
  pageElementMappings: PageElementMappings;
}; // Object with all config.
