import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';
import { ISettingRegistry } from '@jupyterlab/settingregistry';
import { IMainMenu } from '@jupyterlab/mainmenu';
import { MainAreaWidget } from '@jupyterlab/apputils';
import { Menu, Widget } from '@lumino/widgets';
import { CondaStoreWidget } from './widget';
import { condaStoreNotextIcon, condaStoreNotextIconGreenAccent } from './style';

/**
 * Initialization data for the jupyterlab-conda-store extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  activate,
  autoStart: true,
  id: 'jupyterlab-conda-store:plugin',
  requires: [ISettingRegistry, IMainMenu]
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
async function activate(
  app: JupyterFrontEnd,
  settingRegistry: ISettingRegistry,
  mainMenu: IMainMenu
) {
  console.log('JupyterLab extension conda-store is activated!');

  // Attempt to load application settings
  let settings: ISettingRegistry.ISettings;
  // Initialize widget
  let widget: Widget;
  let condaStoreExtension: CondaStoreWidget;

  try {
    settings = await settingRegistry.load(plugin.id);
    const addCustomMenuItem = settings?.composite.addMainMenuItem ?? true;

    const command = 'condastore:open';
    app.commands.addCommand(command, {
      label: 'Conda Store Package Manager',
      execute: () => {
        if (!widget || widget.isDisposed) {
          condaStoreExtension = new CondaStoreWidget(settings);
          widget = new MainAreaWidget({ content: condaStoreExtension });
          widget.id = 'jp-conda-store';
          widget.title.label = 'conda-store';
          widget.title.caption = 'conda-store extension';
          widget.title.icon =
            settings?.composite.styleType === 'grayscale'
              ? condaStoreNotextIcon
              : condaStoreNotextIconGreenAccent;
          widget.title.closable = true;
        }

        if (!widget.isAttached) {
          // Attach the widget to the main work area
          app.shell.add(widget, 'main');
        }

        widget.update();

        // Activate the widget
        app.shell.activateById(widget.id);

        settings.changed.connect(() => {
          condaStoreExtension.rerender();
        });
      }
    });

    // Create the conda-store top-level menu
    if (addCustomMenuItem) {
      const condaStoreMenu = new Menu({ commands: app.commands });
      condaStoreMenu.title.label = 'Conda-Store';
      condaStoreMenu.addItem({
        command,
        args: {}
      });
      mainMenu.addMenu(condaStoreMenu, true, { rank: 1000 });
    } else {
      mainMenu.settingsMenu.addGroup([{ command }], 900);
    }
  } catch (error) {
    console.error(
      'Failed to load settings for the conda-store Extension.\n%1',
      error
    );
  }
}

export default plugin;
