Instructions:

- load the contents of /src as an unpacked extension, or run `npm run build` and load `web-ext-artifacts/orion_ios_extension_test-0.1.zip`
- navigate to http://example.com

Two alerts should appear with e.g. `isolated world: success! module moz-extension://41640e1c-29a0-4317-9a04-db049fcb17c1/some_content.js exports "hello world".` and `main world: success! module moz-extension://41640e1c-29a0-4317-9a04-db049fcb17c1/some_content.js exports "hello world".`
