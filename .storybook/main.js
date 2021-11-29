/**
 * this file is for config storybook
 * @see https://storybook.js.org/docs/react/configure/overview
 */

 module.exports = {
  // add your stories paths, use glob syntax
  // default: "../packages/**/*.{stories,story}.{tsx,js,jsx}"
  stories: [
    "../packages/**/*.{stories,story}.{tsx,js,jsx}"
  ],

  addons: [
    {
      name: '@foxpage/foxpage-component-storybook-preset/preset',
      options: {},
    },
  ],
  // 可自定义设置
  // webpackFinal: async config => {
  //   return config;
  // },
};
