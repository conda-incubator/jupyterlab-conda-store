# conda-store jupyterlab extension

[Github Build Action Status](https://github.com/Quansight/jupyterlab-conda-store/.github/workflows/build.yml/badge.svg)
[Github Deploy Action Status](https://github.com/Quansight/jupyterlab-conda-store/.github/workflows/build_and_deploy.yml/badge.svg)

A jupyterlab extension that provides a beautiful, user-friendly graphical interface for building and managing environments using an instance of [conda-store](https://github.com/Quansight/conda-store). 

## Requirements

- JupyterLab >= 3.0

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

## Release

To create a new pacakge and release:

1. Bump the version as indicated in `pyproject.toml` and `package.json`

2. Create a new release, and then enusre the release tag is the same as the bumped version tag.
