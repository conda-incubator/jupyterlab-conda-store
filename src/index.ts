import {
  ILayoutRestorer,
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';
import { ISettingRegistry } from '@jupyterlab/settingregistry';

import { condaStoreIcon } from './style/icons';
import { CondaStoreWidget } from './widget/condaStoreWidget';

/**
 * Initialization data for the jupyterlab-conda-store extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  activate,
  autoStart: true,
  id: 'jupyterlab-conda-store:plugin',
  optional: [ISettingRegistry],
  requires: [ILayoutRestorer]
}

async function activate(
  app: JupyterFrontEnd,
  restorer: ILayoutRestorer,
  settingRegistry: ISettingRegistry | null,
) {
  console.log('JupyterLab extension jupyterlab-conda-store is activated!');

  if (settingRegistry) {
    settingRegistry
      .load(plugin.id)
      .then(settings => {
        console.log('jupyterlab-conda-store settings loaded:', settings.composite);
      })
      .catch(reason => {
        console.error('Failed to load settings for jupyterlab-conda-store.', reason);
      });
  }

      // Create the Git widget sidebar
      const id = 'jp-conda-store-sidebar';
      const condaStoreExtension = new CondaStoreWidget();
      condaStoreExtension.id = id;
      condaStoreExtension.title.icon = condaStoreIcon;
      condaStoreExtension.title.caption = 'Conda Store';

      // Let the application restorer track the running panel for restoration of
      // application state (e.g. setting the running panel as the current side bar
      // widget).
      restorer.add(condaStoreExtension, id);

      // Rank has been chosen somewhat arbitrarily to give priority to the running
      // sessions widget in the sidebar.
      app.shell.add(condaStoreExtension, 'left', { rank: 200 });
}

export default plugin;
