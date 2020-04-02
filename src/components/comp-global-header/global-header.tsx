import {Component, h, ComponentInterface} from '@stencil/core';

@Component({
  tag: 'nyms-global-header',
  styleUrl: 'global-header.css',
  shadow: true
})
export class GlobalHeader implements ComponentInterface {
  handleSkipToContentClick(env) {
    env.preventDefault();
    
    // Not elegant, but only way i could dynamically find the first heading to focus on 
    const activeRoute = document.querySelector('app-root').shadowRoot.querySelector('stencil-route:not([style*="display: none"]');
    const target:HTMLElement = activeRoute.querySelector('*').shadowRoot.querySelector('h1, h2, h3');

    target.setAttribute('tabindex', "-1");
    target.focus();
  }

  render() {
    return (
      <host>
        <a class="skip-main" href="#body" onClick={this.handleSkipToContentClick.bind(this)}>Skip to main content</a>

        <header>
          <a class="logo" href="/">
            <img src="/assets/icon/logo.jpg" alt="New You Medispa Homepage" />
          </a>

          <nav class="nav" role="navigation">
            <stencil-route-link url='/' activeClass='green' exact={true}>Home</stencil-route-link>
            <stencil-route-link url='/about' activeClass='green'>About</stencil-route-link>
            <stencil-route-link url='/products' activeClass='green'>Products</stencil-route-link>
            <stencil-route-link url='/treatments' activeClass='green'>Treatments</stencil-route-link>
            <stencil-route-link url='/book-a-consultation' activeClass='green'>Book an appointment</stencil-route-link>
            <stencil-route-link url='/price-list' activeClass='green'>Price List</stencil-route-link>
            <stencil-route-link url='/contact-us' activeClass='green'>Contact Us</stencil-route-link>
          </nav>
        </header>
      </host>
    );
  }

}
