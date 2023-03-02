# conda-store jupyterlab extension

![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/Quansight/jupyterlab-conda-store/build.yml?label=Build%20Workflow&logo=GitHub&style=for-the-badge)

![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/Quansight/jupyterlab-conda-store/build_and_deploy_release.yml?label=Deploy%20Workflow&logo=GitHub&style=for-the-badge)

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
