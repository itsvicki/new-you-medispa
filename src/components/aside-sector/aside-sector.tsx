import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'aside-sector',
  styleUrl: 'aside-sector.css',
  shadow: true
})
export class AsideSector {
  @Prop() heading: string = '';

  render() {
    return (
      <Host>
        <article class="treatments">
          <h3>{this.heading}</h3>
          <slot></slot>
        </article>
      </Host>
    );
  }

}
