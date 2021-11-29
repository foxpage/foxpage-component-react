module.exports = (api) => {
  api.assertVersion("^7.0");
  api.cache(true);

  /** @type {import('@foxpage/foxpage-component-babel-preset/interfaces').Options} */
  const option = {};

  return {
    presets: [
      [require('@foxpage/foxpage-component-babel-preset'), option],
    ],
  };
};
