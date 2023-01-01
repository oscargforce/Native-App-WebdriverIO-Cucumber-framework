export async function swipe(options: { down?: boolean; up?: boolean }) {
  const { height } = await driver.getWindowSize();
  const anchorPercentage = 50; // Where to put my finger === center line of screen
  const startPointPercentage = options.down ? 10 : 90; // Put my finger in the top / bottom of the screen
  const endPointPercentage = options.down ? 90 : 10; // Swipe my finger to the top / bottom of the screen

  const anchor = (height * anchorPercentage) / 100;
  const startPoint = (height * startPointPercentage) / 100;
  const endPoint = (height * endPointPercentage) / 100;
  await driver.touchPerform([
    {
      action: 'press',
      options: {
        x: anchor,
        y: startPoint,
      },
    },
    {
      action: 'wait',
      options: {
        ms: 1000,
      },
    },
    {
      action: 'moveTo',
      options: {
        x: anchor,
        y: endPoint,
      },
    },
    {
      action: 'release',
      options: {},
    },
  ]);
}
