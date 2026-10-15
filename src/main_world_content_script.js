'use strict';

window.addEventListener('message', async (event) => {
  if (event.data['orion-extension-test-url']) {
    const url = event.data['orion-extension-test-url'];

    console.log(
      'main world: globalThis.browser ?? globalThis.chrome is',
      globalThis.browser ?? globalThis.chrome,
    );
    console.log('main world: url to import is', url);

    try {
      const module = await import(url);
      alert(`main world: success! module ${url} exports "${module.default}".`);
    } catch (e) {
      alert(`main world: error! ${e}`);
    }
  }
});
