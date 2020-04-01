import { Component, h, ComponentInterface } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true
})
export class AppRoot implements ComponentInterface {
  render() {
    return (
      <div>
        <nyms-global-header></nyms-global-header>
        <nyms-social-bar></nyms-social-bar>

        <div id="body">          
          <main>
            <stencil-router scrollTopOffset={0}>
              <stencil-route-switch>
                <stencil-route url='/' component='app-home' exact={true} />
                <stencil-route url='/about' component='app-about' />
                <stencil-route url='/products' component='app-products' exact={true} />
                <stencil-route url='/product/:pageName' routeRender={({match}) => (
                  <app-product page={match!.url}></app-product>
                )}/>
                <stencil-route url='/treatments' component='app-treatments' exact={true} />
                <stencil-route url='/treatment/:pageName' routeRender={({match}) => (
                  <app-treatment page={match!.url}></app-treatment>
                )}/>
                <stencil-route url='/book-a-consultation' component='app-book' />
                <stencil-route url='/price-list' component='app-price-list' />
                <stencil-route url='/contact-us' component='app-contact-us' />
              </stencil-route-switch>
            </stencil-router>
          </main>

          <aside>
            <nyms-sidebar-treatments></nyms-sidebar-treatments>
            <nyms-sidebar-testimonial></nyms-sidebar-testimonial>
          </aside>
        </div>

        <nyms-global-footer></nyms-global-footer>
      </div>
    );
  }
}
