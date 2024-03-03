# jupyterlab-conda-store

<div align="center">
  <img src="https://raw.githubusercontent.com/conda-incubator/conda-store/main/docusaurus-docs/community/assets/logos/conda-store-logo-vertical-lockup.svg" alt="conda-store logo" width="30%">
</div>

---

| Information | Links                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| :---------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Project     | [![License](https://img.shields.io/badge/License-BSD%203--Clause-gray.svg?&colorB=298642&style=flat.svg)](https://opensource.org/licenses/BSD-3-Clause) [![conda-store documentation](https://img.shields.io/badge/conda--store-documentation%20📖-gray.svg?&colorB=298642&style=flat.svg)][conda-store-docs] [![conda-store-ui documentation](https://img.shields.io/badge/conda--store--UI-documentation%20📖-gray.svg?&colorB=298642&style=flat.svg)][conda-store-ui-docs] |
| Workflows   | [![Build extension](https://github.com/conda-incubator/jupyterlab-conda-store/actions/workflows/build.yml/badge.svg)](https://github.com/conda-incubator/jupyterlab-conda-store/actions/workflows/build.yml) [![Make PyPI release](https://github.com/conda-incubator/jupyterlab-conda-store/actions/workflows/release.yml/badge.svg)](https://github.com/conda-incubator/jupyterlab-conda-store/actions/workflows/release.yml)                                               |
| Releases    | ![GitHub release (the latest by date)](https://img.shields.io/github/v/release/conda-incubator/jupyterlab-conda-store?logo=Github) ![PyPI releases](https://img.shields.io/pypi/v/jupyterlab-conda-store)                                                                                                                                                                                                                                                                     |

---

A JupyterLab extension for [conda-store][conda-store-repo].

> [!NOTE]
> This extension is only compatible with JupyterLab `>= 4.0`.

## Installation 📦

### Pre-requisites

You will need to have [conda-store][conda-store-repo] installed and running on your local computer to use this extension. As well as:

- `JupyterLab >= 4.0`
- Python `>= 3.8`

You can install the extension with pip:

```bash
pip install jupyterlab-conda-store
```

To remove the extension, execute:

```bash
pip uninstall jupyterlab-conda-store
```

## Installing the development version 🚀

### Pre-requisites

1. You will need to have [NodeJS `> 18`](https://nodejs.org/en/download/) installed on your local computer to build the extension package.
2. Python `>= 3.8` and `pip`.

### Building and linking the extension

> [!NOTE]
> The `jlpm` command is JupyterLab's pinned version of [yarn](https://yarnpkg.com/) that is installed with JupyterLab. You may use`yarn` or `npm` in lieu of `jlpm` in the commands below.

1. Clone this repository to your local computer:

   ```bash
   git clone https://github.com/conda-incubator/jupyterlab-conda-store.git
   ```

2. Change to the `jupyterlab-conda-store` directory:

   ```bash
    cd jupyterlab-conda-store
   ```

3. Optional but recommended - Create and activate a development environment with conda:

   ```bash
   # Create environment named `jupyterlab-conda-store`
   conda create -n jupyterlab-conda-store
   conda activate jupyterlab-conda-store
   ```

4. Install JupyterLab and NodeJS **if not installed**:

   ```bash
   # Install node and jupyterlab from conda-forge
   conda install -c conda-forge 'nodejs>16' 'jupyterlab>=4'
   ```

5. Install the package in development mode:

   ```bash
   pip install -e .
   ```

6. Now you'll need to link the development version of the extension to JupyterLab and rebuild the Typescript source:

   ```bash
   # Link your development version of the extension with JupyterLab
   jupyter labextension develop . --overwrite
   ```

7. On the first installation, or after making some changes, to visualize them in your local JupyterLab re-run the following command:

   ```bash
   # Rebuild extension Typescript source after making changes
   jlpm build
   ```

8. Run JupyterLab and check that the installation worked:

```bash
# Run JupyterLab
jupyter lab
```

### Uninstalling the development version

1. Remove the extension:

   ```bash
   pip uninstall jupyterlab-conda-store
   ```

2. In development mode, you will also need to remove the symlink created by `jupyter labextension develop`
   command. To find its location, you can run `jupyter labextension list` to figure out where the `labextensions`
   folder is located. Then you can remove the symlink named `jupyterlab-conda-store` within that folder.

## Release

To create a jupyterlab-conda-store release:

1. Open a `new_release` issue in the [repository][jupyterlab-conda-store-repo] and fill in the release details.
2. Follow the steps in the new release checklist.

> [!TIP]
> Follow the steps in [RELEASE.md](./RELEASE.md) to ensure all is working as expected.

## Code of Conduct 🤝

To guarantee a welcoming and friendly community, we require all community members to follow our [Code of Conduct](https://github.com/conda-incubator/governance/blob/main/CODE_OF_CONDUCT.md).

## License 📃

jupyterlab-conda-store is developed under the [BSD 3-Clause License](./LICENSE).

<!-- reusable links -->

[conda-store-docs]: https://conda.store/en/latest/
[conda-store-ui-docs]: https://conda-incubator.github.io/conda-store-ui/?path=/story/welcome--page
[conda-store-repo]: https://github.com/conda-incubator/conda-store
[jupyterlab-conda-store-repo]: https://github.com/conda-incubator/jupyterlab-conda-store
