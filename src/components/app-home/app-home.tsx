import {Component, h, ComponentInterface, Prop, Build} from '@stencil/core';
import {RouterHistory} from '@stencil/router';

import {defaultPageMetaDescription} from '../../global/site-structure-utils';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: true
})
export class AppHome implements ComponentInterface {
  private pageMetaDescription = defaultPageMetaDescription;

  @Prop() history: RouterHistory;

  constructor() {
    document.title = `New You Medispa for affordable cosmetic treatments`;
    document.querySelector('meta[name="description"]').setAttribute("content", this.pageMetaDescription);
  }

  componentDidLoad() {
    if (Build.isBrowser && typeof (window as any).ga === "function") {
      // Update google analytics
      const page = this.history.location.pathname;
      (window as any).ga('send', 'pageview', page);
    }
  }

  render() {
    return (
      <div>
        <div id='intro'>
          <h1>New You Medispa are the leading experts in affordable skin rejuventation.</h1>
          <p>We understand that every person is unique, that's why we provide each client with your own custom-made treatment plan to give you a fresh and youthful look.</p>
          <p>Whether we're giving dermal fillers, muscle relaxing treatment or skin peels we pride ourselves on always providing a relaxed, friendly atmosphere, where your satisfaction is both paramount and guaranteed.</p>
          <p>All treatments are provided by our expert Harley Street trained nurse with over 12 years of experience.</p>
          <p>Call today for your free consultation and find out how we can give you your own New You look.</p>
          <p >New You Medispa, <span class='em'>be your own kind of beautiful.</span></p>
        </div>
      </div>
    );
  }
}
