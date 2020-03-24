import { Component, h } from '@stencil/core';

@Component({
  tag: 'treatment-sidebar',
  styleUrl: 'treatment-sidebar.css',
  shadow: true
})
export class TreatmentsSideBar {

  render() {
    return (
      <aside-sector heading="Treatments">
        <ul>
          <li><a href="/treatment/muscle-relaxing" title="Muscle Relaxing from New You Medispa">Muscle Relaxing</a></li>
          <li><a href="/treatment/dermal-fillers" title="Dermal Fillers from New You Medispa">Dermal Fillers</a></li>
          <li><a href="/treatment/fat-and-cellulite-reduction" title="Fat and Cellulite Reduction from New You Medispa">Fat and Cellulite Reduction</a></li>
          <li><a href="/treatment/dermaroller" title="Dermaroller from New You Medispa">Dermaroller</a></li>
          <li><a href="/treatment/tca-peels" title="TCA Peels from New You Medispa">TCA Peels</a></li>
          <li><a href="/treatment/glycolic-skin-peels" title="Glycolic Skin Peels from New You Medispa">Glycolic Skin Peels</a></li>
          <li><a href="/treatment/skin-tightening" title="Skin Tightening from New You Medispa">Skin Tightening</a></li>
          <li><a href="/treatment/dermalux-led-phototherapy" title="Dermalux LED Phototherapy from New You Medispa">Dermalux LED Phototherapy</a></li>
          <li><a href="/treatment/fractional-skin-resurfacing" title="Fractional Skin Resurfacing from New You Medispa">Fractional Skin Resurfacing</a></li>
          <li><a href="/treatment/dermalux-led-phototherapy" title="Acne treatment from New You Medispa">Acne</a></li>
        </ul>
      </aside-sector>
    );
  }

}
