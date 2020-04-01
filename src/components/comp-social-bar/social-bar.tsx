import { Component, h } from '@stencil/core';

@Component({
  tag: 'nyms-social-bar',
  styleUrl: 'social-bar.css',
  shadow: true
})
export class SocialBar {

  render() {
    return (
      <div class="social" itemscope itemtype="http://data-vocabulary.org/Organization">
        <div class="telephone">
          <span class="phone-icon" aria-hidden="true"></span>
          <a itemprop="tel" href="tel:01912573141">0191 257 3141</a>
        </div>

        <a class="socialMedia" href="https://www.facebook.com/pages/New-You-Medispa/464518073640015" target="_blank" rel="noopener">
          <span class="facebook-icon" aria-hidden="true"></span> 
          <span class="screen-reader-only">New You Medispa's Facebook page</span>
        </a>
      </div>
    );
  }
}
