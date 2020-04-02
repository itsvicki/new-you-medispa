import {Component, Host, Prop, h, ComponentInterface} from '@stencil/core';
import { MatchResults } from '@stencil/router';

import {TreatmentService} from '../../global/services/treatment.service';
import HelperService from '../../global/services/helper.service';

import {TreatmentInterface, ErrorInterface} from '../../global/definitions/definitions';
import {fileNotFound} from '../../global/site-structure-utils';

@Component({
  tag: 'app-treatment',
  styleUrl: 'app-treatment.css',
  shadow: true
})
export class AppTreatment implements ComponentInterface {
  private fileNotFound = fileNotFound;
  private helperService: HelperService = new HelperService();
  private treatment: TreatmentInterface = {} as TreatmentInterface;
  private toHypertext = this.helperService.toHypertext;
  private error: ErrorInterface = {} as ErrorInterface;

  @Prop() match: MatchResults;

  async componentWillRender() {
    const page = `/treatment/${this.match.params.page}`;
    
    try {
      const treatment = await TreatmentService.getTreatment(page);  

      this.treatment = treatment;

      // Update browser title & description
      document.title = `${treatment.name} - New You Medispa`;
      document.querySelector('meta[name="description"]').setAttribute("content", treatment.browserDescription); 
      
    }
    catch(err) {
      if (err.code === 'NO_MATCH') {
        this.fileNotFound();
      }

      this.error = err;
    }
  }

  render() {
    const {errorMessage} = this.error;
    const {name, url, hypertext} = this.treatment;

    return (
      <Host>
        {errorMessage 
          ? <p>{errorMessage}</p>
          : <div>
              <nav>
                <ul>
                  <li>
                    <stencil-route-link url='/treatments'>treatments &gt;&nbsp;</stencil-route-link>
                  </li>
                  <li>
                  <stencil-route-link url={url}>{name}</stencil-route-link>
                  </li>
                </ul>
              </nav>

              <h1>{name}</h1>
              {this.toHypertext(hypertext)}
          </div>
        }
      </Host>
    );
  }
}
