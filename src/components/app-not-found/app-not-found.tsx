import { Component, h, Build, ComponentInterface } from '@stencil/core';
import { fileNotFound } from '../../global/site-structure-utils';

@Component({
  tag: 'app-not-found',
  styleUrl: 'app-not-found.css'
})
export class AppNotFound implements ComponentInterface {

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