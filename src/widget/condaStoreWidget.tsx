import * as React from 'react';

import { App, IPreferences } from "@conda-store/conda-store-ui"
import { ReactWidget } from '@jupyterlab/apputils';
import { ISettingRegistry } from '@jupyterlab/settingregistry';


export class CondaStoreWidget extends ReactWidget {
  constructor(settings: ISettingRegistry.ISettings, prefDefault: IPreferences) {
    super();
    this.prefDefault = prefDefault;
    this.settings = settings;
  }

  render(): JSX.Element {
    // return (
    //   <App initState={
    //     setter => {
    //       this.settings.changed.connect(() => setter(this.settings.composite));
    //       setter(this.settings.composite);
    //     }
    //   } />
    // );
    return (
      <App 
        prefs={this.prefDefault}
        initState={
          setter => {
            setter(this.prefDefault)
          }
        }
      />
    );
  }

  prefDefault: IPreferences;
  settings: ISettingRegistry.ISettings;
  // initState: (setter: ((prefs: IPreferences) => void)) => void;
}

