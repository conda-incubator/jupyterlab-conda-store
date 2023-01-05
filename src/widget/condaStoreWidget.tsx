import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { App, IAppProps } from '@conda-store/conda-store-ui';
import { ReactWidget } from '@jupyterlab/apputils';
import { ISettingRegistry } from '@jupyterlab/settingregistry';

interface IJlabAppProps extends IAppProps {
  settings: ISettingRegistry.ISettings;
}

class JlabApp extends App<IJlabAppProps> {
  constructor({ settings }: IJlabAppProps) {
    super({
      pref: settings.composite as IAppProps['pref'],
      settings
    });

    this.settings = settings;
  }

  // TODO: figure out how to minimally update in response to settings changes, instead of chainsawing thru with a top-level rerender (Unmount/Mount)
  // componentDidMount(): void {
  //   const slot = () => {
  //     this.setPref({...this.state.pref, ...this.settings.composite});
  //   }

  //   this.settings.changed.connect(slot);
  // }

  // componentWillUnmount(): void {
  //   this.settings.changed.disconnect
  // }

  settings: IJlabAppProps['settings'];
}

export class CondaStoreWidget extends ReactWidget {
  constructor(settings: IJlabAppProps['settings']) {
    super();
    this.settings = settings;
  }

  render(): JSX.Element {
    return <JlabApp settings={this.settings} />;
  }

  rerender(): Promise<void> {
    return new Promise<void>(resolve => {
      ReactDOM.unmountComponentAtNode(this.node);

      const vnode = this.render();
      if (vnode) {
        ReactDOM.render(vnode, this.node, resolve);
      } else {
        // If the virtual node is null, unmount the node content
        ReactDOM.unmountComponentAtNode(this.node);
        resolve();
      }
    });
  }

  settings: IJlabAppProps['settings'];
}
