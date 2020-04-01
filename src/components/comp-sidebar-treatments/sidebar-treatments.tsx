import {Component, h, ComponentInterface, Build} from '@stencil/core';

import {TreatmentService} from '../../global/services/treatment.service';

import {TreatmentInterface, ErrorInterface} from '../../global/definitions/definitions';

@Component({
  tag: 'nyms-sidebar-treatments',
  styleUrl: 'sidebar-treatments.css',
  shadow: true
})
export class SidebarTreatments implements ComponentInterface {
  private treatments: TreatmentInterface[] = [];
  private error: ErrorInterface = {} as ErrorInterface;

  async componentWillLoad() {
    // Only fetch products when the app has hydrated to avoid old version of the products being displayed
    if (Build.isBrowser) {
      try {
        const treatments:TreatmentInterface[] = await TreatmentService.getTreatments();
        this.treatments = treatments;
      }
      catch(err) {
        this.error = err;
      }
    }
  }

  render() {
    if (!Build.isBrowser) {
      return;
    }

    const {errorMessage} = this.error;
    const treatments = this.treatments;

    if (errorMessage) {
      return;
    }
    
    return (
      <nyms-sidebar-segment heading="Treatments">
        <ul>
          {treatments.map((treatment) =>
            <li>
              <stencil-route-link url={treatment.url}>
                {treatment.name}
              </stencil-route-link>
            </li>
          )}
        </ul>
      </nyms-sidebar-segment>
    );
  }

}
