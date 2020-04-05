import {Component, Host, h, ComponentInterface, Prop, Build} from '@stencil/core';
import {RouterHistory} from '@stencil/router';

import {TreatmentService} from '../../global/services/treatment.service';

import {TreatmentInterface, ErrorInterface} from '../../global/definitions/definitions';
import {defaultPageMetaDescription} from '../../global/site-structure-utils';

@Component({
  tag: 'app-treatments',
  styleUrl: 'app-treatments.css',
  shadow: true
})
export class AppTreatments implements ComponentInterface {
  private pageMetaDescription = defaultPageMetaDescription;
  private treatments: TreatmentInterface[] = [];
  private error: ErrorInterface = {} as ErrorInterface;

  @Prop() history: RouterHistory;

  async componentWillRender() {
    try {
      const treatments:TreatmentInterface[] = await TreatmentService.getTreatments();
      this.treatments = treatments;

      // Update title & description
      document.title = `Treatment list for New You Medispa`;
      document.querySelector('meta[name="description"]').setAttribute("content", this.pageMetaDescription);
    }
    catch(err) {
      this.error = err;
    }
  }

  componentDidLoad() {
    if (Build.isBrowser) {
      // Update google analytics
      const page = this.history.location.pathname;
      (window as any).ga('send', 'pageview', page);
    }
  }

  render() {
    const {errorMessage} = this.error;
    const treatments = this.treatments;

    return (
      <Host>
        <h1>Treatments List</h1>
        {errorMessage 
          ? <p>{errorMessage}</p>
          : <div class="treatments">
              {treatments.map((treatment) =>
                <stencil-route-link url={treatment.url}>
                  <img src={treatment.thumbnail} alt="" />
                </stencil-route-link>
              )}
            </div>
        }
      </Host>
    );
  }
}
