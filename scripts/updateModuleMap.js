const fetch = require('node-fetch');
const { name } = require('../package.json');

const bundleIntegrity = require('../bundle.integrity.manifest.json');

const moduleMapUrl = 'https://my-apartment-module-map.now.sh/module-map.json';

const STATIC_ASSETS_URL = 'https://one-app-page-wrapper.now.sh';

const doWork = async () => {
  try {
    const response = await fetch(moduleMapUrl);

    const moduleMapContent = await response.json();

    moduleMapContent.modules[name] = {
      browser: {
        url: `${STATIC_ASSETS_URL}/${name}.browser.js`,
        integrity: bundleIntegrity.browser,
      },
      legacyBrowser: {
        url: `${STATIC_ASSETS_URL}/${name}.legacy.browser.js`,
        integrity: bundleIntegrity.legacyBrowser,
      },
      node: {
        url: `${STATIC_ASSETS_URL}/${name}.node.js`,
        integrity: bundleIntegrity.node,
      },
    };
  } catch (error) {
    console.log(error);
  }
};

doWork().catch((err) => {
  // eslint-disable-next-line no-console
  console.log(err);
});