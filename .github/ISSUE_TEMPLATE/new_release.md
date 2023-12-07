---
name: 'New release 🏷 [maintainers only]'
about: 'Start a new jupyterlab-conda-store release'
title: '[REL] - <release number>'
labels: ['release 🏷']
---

<!-- These steps should be taken to create a new release!
**Double-check for quality control** -->

## Release details

Scheduled release date - <yyyy/mm/dd>

Release captain responsible - <@gh_username>

---

### 1. Pre-flight checks

- [ ] Ensure there are no [open issues with a `block-release ⛔️` label](https://github.com/conda-incubator/jupyterlab-conda-store/issues?q=is%3Aopen+label%3A%22block-release+%E2%9B%94%EF%B8%8F%22+sort%3Aupdated-desc)

### 2. Prepare the codebase for a new release

- [ ] Create a new git branch for the release `git checkout -b release-2023.11.1`
  - [ ] Prepare the branch with `git clean -fxdq`
- [ ] Bump the version in the `package.json` file
- [ ] [Optional] Update the `conda-store-ui` version used in the extension:

  ```bash
  yarn upgrade @conda-store/conda-store-ui@<version>
  ```

- [ ] Update the [CHANGELOG.md](./CHANGELOG.md) file with the new version, release date, and relevant changes [^github-activity].
- [ ] Check the version locally with `hatch version`
- [ ] Build and test locally (see the [RELEASE.md file](https://github.com/conda-incubator/jupyterlab-conda-store/blob/main/RELEASE.md) for more details)
- [ ] Make a release commit: `git commit -m 'REL - 2023.11.1'`
- [ ] Push the release (REL) commit `git push upstream main`
- [ ] If a **release candidate** is needed, tick this box when we're ready for a full release.

### 3. Make the release

- [ ] [Start a new GitHub release](https://github.com/conda-incubator/jupyterlab-conda-store/releases/new)
  - Call the release the current version, e.g. `2023.11.1`
  - In the **`Choose a Tag:`** dropdown, type in the release name (e.g., `2023.11.1`) and click "Create new tag"
  - In the **`Target:`** dropdown, pin it to the release commit you've recently pushed.
  - Add release notes in the field below [^github-activity]; you can copy/paste the Changelog from the [CHANGELOG.md](./CHANGELOG.md) file.
- [ ] Confirm that the release completed
  - [The `release` GitHub action job](https://github.com/conda-incubator/jupyterlab-conda-store/blob/main/.github/workflows/release.yml) has been completed successfully in the [actions tab](https://github.com/conda-incubator/jupyterlab-conda-store/actions).
  - [The `jupyterlab-conda-store` PyPI version is updated](https://pypi.org/project/jupyterlab-conda-store/)
- [ ] Celebrate, you're done! 🎉

[^github-activity]: If you wish, use [`github-activity` to generate a Change log](https://github.com/choldgraf/github-activity), e.g. `github-activity conda-incubator/conda-store --since 2023.11.1 --until 2023.10.1`.
