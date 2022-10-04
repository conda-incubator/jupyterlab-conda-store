import { ReactWidget } from '@jupyterlab/apputils';
import * as React from 'react';

import {AppExample} from "@conda-store/conda-store-ui"

export class CondaStoreWidget extends ReactWidget {

  render(): JSX.Element {
    return (
      <AppExample/>
    );
  }

}

