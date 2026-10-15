'use strict';

(async () => {
  globalThis.browser ??= globalThis.chrome;

  const url = browser.runtime.getURL('/some_content.js');

  window.postMessage({ 'orion-extension-test-url': url });

  console.log(
    'isolated world: globalThis.browser ?? globalThis.chrome is',
    globalThis.browser ?? globalThis.chrome,
  );
  console.log('isolated world: url to import is:', url);

  try {
    const module = await import(url);
    alert(`isolated world: success! module ${url} exports "${module.default}".`);
  } catch (e) {
    alert(`isolated world: error! ${e}`);
  }
})();
