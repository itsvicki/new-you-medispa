import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true
})
export class AppRoot {

  render() {
    return (
      <div>
        <global-header></global-header>
        <social-bar></social-bar>

        <div id="body">
          <aside>
            <treatment-sidebar></treatment-sidebar>
            <testimonial-sidebar></testimonial-sidebar>
          </aside>
          
          <main>
            <stencil-router>
              <stencil-route-switch scrollTopOffset={0}>
                <stencil-route url='/' component='app-home' exact={true} />
                <stencil-route url='/about' component='app-about' />
                <stencil-route url='/book-a-consultation' component='app-book' />
                <stencil-route url='/price-list' component='app-price-list' />
                <stencil-route url='/contact-us' component='app-contact-us' />

                {/* <stencil-route url='/profile/:name' component='app-profile' /> */}
              </stencil-route-switch>
            </stencil-router>
          </main>
        </div>
      </div>
    );
  }
}
