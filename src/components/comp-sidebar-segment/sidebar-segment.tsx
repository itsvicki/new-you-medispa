import { Component, Host, h, Prop, ComponentInterface } from '@stencil/core';

@Component({
  tag: 'nyms-sidebar-segment',
  styleUrl: 'sidebar-segment.css',
  shadow: true
})
export class SidebarSegment implements ComponentInterface {
  @Prop() heading: string = '';

  render() {
    return (
      <Host>
        <article>
          <h3>{this.heading}</h3>
          <slot></slot>
        </article>
      </Host>
    );
  }

}
