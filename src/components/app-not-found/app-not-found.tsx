import {Component, h, Build, ComponentInterface, Prop} from '@stencil/core';
import {RouterHistory} from '@stencil/router';

import {fileNotFound} from '../../global/site-structure-utils';

@Component({
  tag: 'app-not-found',
  styleUrl: 'app-not-found.css'
})
export class AppNotFound implements ComponentInterface {
  @Prop() history: RouterHistory;

  componentDidLoad() {
    // Update google analytics
    const page = this.history.location.pathname;
    (window as any).ga('send', 'pageview', page);
  }

  render() {
    if (!Build.isBrowser) {
      fileNotFound();
      return null;
    }

    return (
      <div>
        <h1>Sorry, we can't find the page you're looking for.</h1>
        <p>
          <stencil-route-link url='/'>
            Back to the home page
          </stencil-route-link>
        </p>
      </div>
    );
  }
}