import { Component, h } from '@stencil/core';

@Component({
  tag: 'testimonial-sidebar',
  styleUrl: 'testimonial-sidebar.css',
  shadow: true
})
export class TestimonialSideBar {

  render() {
    return (
      <aside-sector heading="what our clients say about us..">
        
      </aside-sector>
    );
  }

}
