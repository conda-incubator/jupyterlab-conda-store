# Making a new release of jupyterlab_conda_store

The extension can be published to `PyPI` and `npm` manually or using the [Jupyter Releaser](https://github.com/jupyter-server/jupyter_releaser).

## Manual release

### Python package

This extension can be distributed as Python
packages. All the Python
packaging instructions in the `pyproject.toml` file to wrap your extension in a
Python package. Before generating a package, we first need to install `build`.

```bash
pip install build twine
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

    Clean the local build files with `hatch clean`
