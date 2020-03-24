import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: true
})
export class AppHome {

  render() {
    return (
      <div>
        <div id='intro'>
          <p>New You Medispa are the leading experts in affordable skin rejuventation.</p>
          <p>We understand that every person is unique, that's why we provide each client with your own custom-made treatment plan to give you a fresh and youthful look.</p>
          <p>Whether we're giving dermal fillers, muscle relaxing treatment or skin peels we pride ourselves on always providing a relaxed, friendly atmosphere, where your satisfaction is both paramount and guaranteed.</p>
          <p>All treatments are provided by our expert Harley Street trained nurse with over 12 years of experience.</p>
          <p>Call today for your free consultation and find out how we can give you your own New You look.</p>
          <p class="em">New You Medispa, <em>be your own kind of beautiful.</em></p>
        </div>

        {/* <stencil-route-link url='/profile/stencil'>
          <button>
            Profile page
          </button>
        </stencil-route-link> */}
      </div>
    );
  }
}
