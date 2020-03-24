import {Component, h} from '@stencil/core';

// import AppLogo from "../../assets/icon/logo.svg";

@Component({
  tag: 'global-header',
  styleUrl: 'global-header.css',
  shadow: true
})
export class GlobalHeader {

  render() {
    return (
      <header>
        {/* TODO: Replace with SVG */}
        <a class="logo" href="/">
          <img src="./assets/icon/logo.jpg" />
        </a>

        <nav role="navigation">
          <stencil-route-link url='/' activeClass='green' exact={true}>Home</stencil-route-link>
          <stencil-route-link url='/about' activeClass='green'>About</stencil-route-link>
          <stencil-route-link url='/products' activeClass='green'>Products</stencil-route-link>
          <stencil-route-link url='/treatments' activeClass='green'>Treatments</stencil-route-link>
          <stencil-route-link url='/book-a-consultation' activeClass='green'>Book an appointment</stencil-route-link>
          <stencil-route-link url='/price-list' activeClass='green'>Price List</stencil-route-link>
          <stencil-route-link url='/contact-us' activeClass='green'>Contact Us</stencil-route-link>
        </nav>
      </header>
    );
  }

}
