# Making a new release of jupyterlab_conda_store

Currently, the extension is only distributed as a Python package and [published in PyPI](https://pypi.org/project/jupyterlab-conda-store/).

## Manual release

This extension can be distributed as Python packages.
All the Python packaging instructions in the `pyproject.toml` file to wrap your extension in a Python package.

1. Before generating a package, you need to install the following packages:

   ```bash
   pip install build twine hatch
   ```

2. Bump the version in `package.json`

> [!IMPORTANT]
> There is no need to update the version in `pyproject.toml` as it is automatically updated by `hatch` when generating the package.

3. Optional - if there is a newer release of `conda-store-ui`, update the `conda-store-ui` dependency in the package.json file.

   ```bash
   yarn upgrade @conda-store/conda-store-ui@<version>
   ```

4. To create a Python source package (`.tar.gz`) and the binary package (`.whl`) in the `dist/` directory, do:

   ```bash
   python -m build
   ```

`python setup.py sdist bdist_wheel` is deprecated and will not work for this package.

5. Check the package contents with

   ```bash
   twine check dist/*
   ```

6. Clean the local build files with `hatch clean`

> [!IMPORTANT]
> The `release.yml` GitHub action will automatically publish the package to PyPI when a new GitHub release is published. Unless absolutely necessary, do not publish the package manually.

If for whatever reason you need to publish the package manually, you can do so with:

```bash
twine upload dist/*
```
