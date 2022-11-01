import * as React from 'react';

import { App, IAppProps } from "@conda-store/conda-store-ui"
import { ReactWidget } from '@jupyterlab/apputils';
import { ISettingRegistry } from '@jupyterlab/settingregistry';


interface IJlabAppProps extends IAppProps {
  settings: ISettingRegistry.ISettings;
}

class JlabApp extends App<IJlabAppProps> {
  constructor({settings}: IJlabAppProps) {
    super({
      pref: settings.composite as IAppProps["pref"],
      settings,
    });

    this.settings = settings;
  }

  componentDidMount(): void {
    const slot = () => {
      this.setState({...this.state, ...this.settings.composite});
    }

    this.settings.changed.connect(slot);
  }

  // componentWillUnmount(): void {
  //   this.settings.changed.disconnect
  // }

  settings: IJlabAppProps["settings"];
}

export class CondaStoreWidget extends ReactWidget {
  constructor(settings: ISettingRegistry.ISettings) {
    super();
    this.settings = settings;
  }

  render(): JSX.Element {
    return (
      <JlabApp settings={this.settings} />
    );
  }

  settings: ISettingRegistry.ISettings;
}

