import { Component, h } from '@stencil/core';

@Component({
  tag: 'social-bar',
  styleUrl: 'social-bar.css',
  shadow: true
})
export class SocialBar {

  render() {
    return (
      <div class="social" itemscope itemtype="http://data-vocabulary.org/Organization">
        <div class="telephone">
          <span class="phoneIcon" aria-hidden="true"></span>
          <a itemprop="tel" href="tel:01912573141">0191 257 3141</a>
        </div>

        {/* TODO: Check this URL */}
        <a class="socialMedia" href="https://www.facebook.com/pages/New-You-Medispa/464518073640015" title="View New You Medispa on Facebook" target="_blank">
          <span class="facebookIcon" aria-hidden="true"></span> 
          <span class="iconFontExplination">New You Medispa on Facebook</span>
        </a>
      </div>
    );
  }
}
