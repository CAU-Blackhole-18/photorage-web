const path = require('path');

module.exports = {
  //npx sb init --builder storybook-builder-vite
  "core": {
    "builder": "@storybook/builder-vite"
  },

  "stories": [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],

  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],

  "framework": "@storybook/react",

  "features": {
    "storyStoreV7": true
  },

  viteFinal: async (config, { configType }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@src': path.resolve(__dirname, "../src"),
      '@components': path.resolve(__dirname, '../src/components'),
      '@styles': path.resolve(__dirname, '../src/styles')
    };
  
    return config;
  }
}
