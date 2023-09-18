# conda-store JupyterLab extension

![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/conda-incubator/jupyterlab-conda-store/build.yml?label=Build%20Workflow&logo=GitHub&style=for-the-badge)

![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/conda-incubator/jupyterlab-conda-store/build_and_deploy_release.yml?label=Deploy%20Workflow&logo=GitHub&style=for-the-badge)

A JupyterLab extension that provides a user-friendly graphical interface for building and managing environments using an instance of [conda-store](https://github.com/conda-incubator/conda-store).

## Requirements

- `JupyterLab >= 3.0`

## Install

To install the extension, execute:

```bash
pip install jupyterlab-conda-store
```

## Uninstall

To remove the extension, execute:

```bash
pip uninstall jupyterlab-conda-store
```

## Installing the development version

### Pre-requisites

1. You will need to have [NodeJS](https://nodejs.org/en/download/) installed on your local computer to build the extension package.
2. Python >= 3.8 and `pip`.

### Building and linking the extension

> **Note**
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
   conda install -c conda-forge 'nodejs>16' 'jupyterlab<4'
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

To create a new package and release:

1. Bump the version as indicated in `pyproject.toml` and `package.json`

2. Create a new release, and then ensure the release tag is the same as the bumped version tag.

## Code of Conduct

To guarantee a welcoming and friendly community, we require all community members to follow our [Code of Conduct](https://github.com/conda-incubator/governance/blob/main/CODE_OF_CONDUCT.md).

## License

jupyterlab-conda-store is developed under the [BSD 3-Clause License](./LICENSE).
