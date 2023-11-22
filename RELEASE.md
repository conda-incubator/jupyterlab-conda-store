# Making a new release of jupyterlab_conda_store

Currently, the extension is only distributed as a Python package and [published in PyPI](https://pypi.org/project/jupyterlab-conda-store/).

## Manual release

This extension can be distributed as Python packages.
All the Python packaging instructions in the `pyproject.toml` file to wrap your extension in a Python package.

1.  Before generating a package, you need to install the following packages:

    ```bash
    pip install build twine hatch
    ```

1.  Bump the version in `pyproject.toml` and `package.json`

    > **Important**
    > Both versions **must** be the same

1.  To create a Python source package (`.tar.gz`) and the binary package (`.whl`) in the `dist/` directory, do:

    ```bash
    python -m build
    ```

    > **Warning** > `python setup.py sdist bdist_wheel` is deprecated and will not work for this package.

1.  Check the package contents with

        ```bash
        twine check dist/*
        ```

1.  Then to upload the package to PyPI, do:

    ```bash
    twine upload dist/*
    ```

1.  Clean the local build files with `hatch clean`
