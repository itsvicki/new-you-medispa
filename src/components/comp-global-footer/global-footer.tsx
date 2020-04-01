import {Component, h, ComponentInterface} from '@stencil/core';

@Component({
  tag: 'nyms-global-footer',
  styleUrl: 'global-footer.css',
  shadow: true
})
export class GlobalFooter implements ComponentInterface {

  render() {
    return (
      <footer>
        <p>17 Northumberland Square<br />North Shields<br />NE30 1PX</p>
        <p><span class="green">T:</span> 0191 257 3141</p>
        <p>
          <span class="green">E:</span> <a href="mailto:reception@newyou-medispa.co.uk">reception@newyou-medispa.co.uk</a>
        </p>
      </footer>
    );
  }

}
