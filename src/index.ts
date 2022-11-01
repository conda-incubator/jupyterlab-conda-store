import {
  ILayoutRestorer,
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';
// import { MainAreaWidget } from '@jupyterlab/apputils';
import { ISettingRegistry } from '@jupyterlab/settingregistry';
// import { Widget } from '@lumino/widgets';

import { condaStoreNotextIcon } from './style';
import { CondaStoreWidget } from './widget';

/**
 * Initialization data for the jupyterlab-conda-store extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  activate,
  autoStart: true,
  id: 'jupyterlab-conda-store:plugin',
  // optional: [],
  requires: [ILayoutRestorer, ISettingRegistry],
}

async function activate(
  app: JupyterFrontEnd,
  restorer: ILayoutRestorer,
  settingRegistry: ISettingRegistry,
) {
  console.log('JupyterLab extension jupyterlab-conda-store is activated!');

  // if (settingRegistry) {
  //   settingRegistry
  //     .load(plugin.id)
  //     .then(settings => {
  //       console.log('jupyterlab-conda-store settings loaded:', settings.composite);
  //     })
  //     .catch(reason => {
  //       console.error('Failed to load settings for jupyterlab-conda-store.', reason);
  //     });
  // }

  // Attempt to load application settings
  let settings: ISettingRegistry.ISettings;
  try {
    settings = await settingRegistry.load(plugin.id);
    
    // Create the Git widget sidebar
    const id = 'jp-conda-store-sidebar';
    const condaStoreExtension = new CondaStoreWidget(settings);
    condaStoreExtension.id = id;
    condaStoreExtension.title.icon = condaStoreNotextIcon;
    condaStoreExtension.title.caption = 'conda-store extension';

    // Let the application restorer track the running panel for restoration of
    // application state (e.g. setting the running panel as the current side bar
    // widget).
    restorer.add(condaStoreExtension, id);

    // Rank has been chosen somewhat arbitrarily to give priority to the running
    // sessions widget in the sidebar.
    app.shell.add(condaStoreExtension, 'left', { rank: 200 });

    // MVP solution for forcing app refresh (including full api refetch) on pref change
    settings.changed.connect(() => {
      condaStoreExtension.rerender();
    });
  } catch (error) {
    console.error('Failed to load settings for the conda-store Extension.\n%1', error);
  }

  // // Create the Git widget sidebar
  // const id = 'jp-conda-store-sidebar';
  // const condaStoreExtension = new CondaStoreWidget(settings);
  // condaStoreExtension.id = id;
  // condaStoreExtension.title.icon = condaStoreNotextIcon;
  // condaStoreExtension.title.caption = 'conda-store extension';

  // // Let the application restorer track the running panel for restoration of
  // // application state (e.g. setting the running panel as the current side bar
  // // widget).
  // restorer.add(condaStoreExtension, id);

  // // Rank has been chosen somewhat arbitrarily to give priority to the running
  // // sessions widget in the sidebar.
  // app.shell.add(condaStoreExtension, 'left', { rank: 200 });


  // const content = new Widget();
  // const widget = new MainAreaWidget({ content });
  // widget.id = 'apod-jupyterlab';
  // widget.title.label = 'Astronomy Picture';
  // widget.title.closable = true;

  // // Add an application command
  // const command: string = 'apod:open';
  // app.commands.addCommand(command, {
  //   label: 'Random Astronomy Picture',
  //   execute: () => {
  //     if (!widget.isAttached) {
  //       // Attach the widget to the main work area if it's not there
  //       app.shell.add(widget, 'main');
  //     }
  //     // Activate the widget
  //     app.shell.activateById(widget.id);
  //   }
  // });

  // // Add the command to the palette.
  // palette.addItem({ command, category: 'Tutorial' });

}

export default plugin;
