## Contributing

### (temporary) Overriding default prefs

Currently the pref pass-thru from the jupyterlab frontend to the underlying conda-store-ui lib is not functional. Instead, for a dev build you can customize the `prefDefault` object at the top of `src/index.ts` in this repo:

```typescript
const prefDefault: IPreferences = {
  apiUrl: 'http://localhost:8080/conda-store/',
  authMethod: 'cookie',
  loginUrl: 'http://localhost:8080/conda-store/login?next=',
  authToken: '',
  styleType: 'grayscale',
  showLoginIcon: true
};
```

Once the values are changed as you like, follow the rest of the "Development install" instruction to build.

The built in defaullt settings will work with the default docker dev build of conda-store. Just clone the `quansight/conda-store` repo, then run:

```bash
docker compose up --builld
```

and you should have a dev version of the `conda-store` server that will play nicely with the default pref values of this extension. The `conda-store` login for the dev server is `admin`/`password`.

### Development install

Note: You will need NodeJS to build the extension package.

The `jlpm` command is JupyterLab's pinned version of
[yarn](https://yarnpkg.com/) that is installed with JupyterLab. You may use
`yarn` or `npm` in lieu of `jlpm` below.

```bash
# Clone the repo to your local environment
# Change directory to the jupyterlab_conda_store directory
# Install package in development mode
pip install -e .
# Link your development version of the extension with JupyterLab
jupyter labextension develop . --overwrite
# Rebuild extension Typescript source after making changes
jlpm build
```

You can watch the source directory and run JupyterLab at the same time in different terminals to watch for changes in the extension's source and automatically rebuild the extension.

```bash
# Watch the source directory in one terminal, automatically rebuilding when needed
jlpm watch
# Run JupyterLab in another terminal
jupyter lab
```

With the watch command running, every saved change will immediately be built locally and available in your running JupyterLab. Refresh JupyterLab to load the change in your browser (you may need to wait several seconds for the extension to be rebuilt).

By default, the `jlpm build` command generates the source maps for this extension to make it easier to debug using the browser dev tools. To also generate source maps for the JupyterLab core extensions, you can run the following command:

```bash
jupyter lab build --minimize=False
```

### Development uninstall

```bash
pip uninstall jupyterlab_conda_store
```

In development mode, you will also need to remove the symlink created by `jupyter labextension develop`
command. To find its location, you can run `jupyter labextension list` to figure out where the `labextensions`
folder is located. Then you can remove the symlink named `jupyterlab-conda-store` within that folder.

### Testing the extension

#### Frontend tests

This extension is using [Jest](https://jestjs.io/) for JavaScript code testing.

To execute them, execute:

```sh
jlpm
jlpm test
```

#### Integration tests

This extension uses [Playwright](https://playwright.dev/docs/intro/) for the integration tests (aka user level tests).
More precisely, the JupyterLab helper [Galata](https://github.com/jupyterlab/jupyterlab/tree/master/galata) is used to handle testing the extension in JupyterLab.

More information are provided within the [ui-tests](./ui-tests/README.md) README.

### Packaging the extension

See [RELEASE](RELEASE.md)
