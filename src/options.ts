import { Options as RevealOptions } from 'reveal.js';

export type StyleOptions = {
  copybg?: string;
  copiedbg?: string;
  copycolor?: string;
  copiedcolor?: string;
  copyborder?: string;
  copiedborder?: string;
  scale?: number;
  offset?: number;
  radius?: number;
};

export type Options = {
  style?: StyleOptions;
  timeout?: number;
};

export const defaultOptions: Options = {
  style: {
    copybg: 'orange',
    copiedbg: 'green',
    copycolor: 'black',
    copiedcolor: 'white',
    copyborder: '',
    copiedborder: '',
    scale: 1,
    offset: 0,
    radius: 0,
  },
  timeout: 1000,
};

export type AugmentedRevealOptions = RevealOptions & { clipcode?: Options };
