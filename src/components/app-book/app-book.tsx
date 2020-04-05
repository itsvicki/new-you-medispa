import {Component, h, ComponentInterface} from '@stencil/core';

import {defaultPageMetaDescription} from '../../global/site-structure-utils';

@Component({
  tag: 'app-book',
  styleUrl: 'app-book.css',
  shadow: true
})
export class AppBook implements ComponentInterface {
  private pageMetaDescription = defaultPageMetaDescription;

  constructor() {
    document.title = `Book an appointment with New You Medispa`;
    document.querySelector('meta[name="description"]').setAttribute("content", this.pageMetaDescription);
  }

  render() {
    return (
      <div>
        <h1>Book an appointment</h1>

        <p>Sadly, we have had to temporarily close the clinic due to covid-19, the safety of our clients is paramount to us. We will update you via <a href="https://www.facebook.com/pages/New-You-Medispa/464518073640015" target="_blank" rel="noopener">Facebook</a> and email.</p>
        <p>Take care and keep safe.</p>
      </div>
    );
  }
}
