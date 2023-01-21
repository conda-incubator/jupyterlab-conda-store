import { LabIcon } from '@jupyterlab/ui-components';

// icon svg import statements
import condaStoreSvg from '../../style/icon/conda-store-logo.svg';
import condaStoreNotextSvg from '../../style/icon/conda-store-notext-logo.svg';
import condaStoreNotextSvgGreenAccent from '../../style/icon/conda-store-notext-logo-greenaccent.svg';

export const condaStoreIcon = new LabIcon({
  name: 'conda-store:conda-store-icon',
  svgstr: condaStoreSvg
});

export const condaStoreNotextIcon = new LabIcon({
  name: 'conda-store:conda-store-notext-icon',
  svgstr: condaStoreNotextSvg
});

export const condaStoreNotextIconGreenAccent = new LabIcon({
  name: 'conda-store:conda-store-notext-icon-greenaccent',
  svgstr: condaStoreNotextSvgGreenAccent
});
