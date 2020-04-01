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
    document.title = `Book a free consultation with New You Medispa`;
    document.querySelector('meta[name="description"]').setAttribute("content", this.pageMetaDescription);
  }

  render() {
    return (
      <div>
        <h2>Book an appointment</h2>

        <p>Sadly, we have had to temporarily close the clinic, the safety of our clients is paramount to us. We will update you via Facebook and email.</p>

        <p>Take care and keep safe.</p>
      </div>
    );
  }
}
