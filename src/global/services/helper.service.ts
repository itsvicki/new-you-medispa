import {h} from '@stencil/core';

export default class HelperService {
  public toHypertext = (data: any) => {
    const tagBlacklist: Array<string> = ['script', 'link', 'meta', 'object', 'head', 'html', 'body'];

    if (!Array.isArray(data)) {
      console.error('content error, hypertext is undefined')
      return null;
    }

    const args = [];
    for (let i = 0; i < data.length; i++) {
      let arg = data[i];

      if (i === 0 && typeof arg === 'string' && tagBlacklist.indexOf(arg.toLowerCase().trim()) !== -1) {
        arg = 'template';
      } 
      else if (i === 1 && arg) {
        const attrs: any = {};
        Object.keys(arg).forEach(key => {
          const k = key.toLowerCase();
          if (!k.startsWith('on') && k !== 'innerhtml') {
            attrs[key] = arg[key];
          }
        });

        arg = attrs;
  
      } 
      else if (i > 1) {
        if (Array.isArray(arg)) {
          arg = this.toHypertext(arg);
        }
      }

      args.push(arg);
    }
    
    return (h as any).apply(null, args);
  };
}