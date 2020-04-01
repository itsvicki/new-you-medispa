import { Config } from '@stencil/core';

// https://stenciljs.com/docs/config

export const config: Config = {
  globalStyle: 'src/global/app.css',
  globalScript: 'src/global/app.ts',
  outputTargets: [
    {
      type: 'www',
      copy: [
        {src: 'global/data'},
        {src: 'global/definitions'},
        {src: 'global/services'},
        {src: 'global/site-structure-utils.ts'}
      ],
      // comment the following line to disable service workers in production
      serviceWorker: null,
      baseUrl: 'https://newyou-medispa.co.uk/'
    }
  ]
};
