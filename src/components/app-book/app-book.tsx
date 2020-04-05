import {Component, h, ComponentInterface, Prop} from '@stencil/core';
import {RouterHistory} from '@stencil/router';

import {defaultPageMetaDescription} from '../../global/site-structure-utils';
import {registerViewWithTracking} from '../../global/services/helper.utils';

@Component({
  tag: 'app-book',
  styleUrl: 'app-book.css',
  shadow: true
})
export class AppBook implements ComponentInterface {
  private pageMetaDescription = defaultPageMetaDescription;

  @Prop() history: RouterHistory;

  constructor() {
    document.title = `Book an appointment with New You Medispa`;
    document.querySelector('meta[name="description"]').setAttribute("content", this.pageMetaDescription);
  }

  componentDidLoad() {
    registerViewWithTracking(this.history.location.pathname);
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
