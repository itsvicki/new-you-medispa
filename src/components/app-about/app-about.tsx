import {Component, h, ComponentInterface, Prop} from '@stencil/core';
import {RouterHistory} from '@stencil/router';

import {registerViewWithTracking} from '../../global/services/helper.utils';

@Component({
  tag: 'app-about',
  styleUrl: 'app-about.css',
  shadow: true
})
export class AppAbout implements ComponentInterface {
  @Prop() history: RouterHistory;

  constructor() {
    document.title = `About New You Medispa`;

    const description = `About new you medispa in newcastle-upon-tyne`;
    document.querySelector('meta[name="description"]').setAttribute("content", description);
  }

  componentDidLoad() {
    registerViewWithTracking(this.history.location.pathname);
  }

  render() {
    return (
      <div>
        <img src="/assets/images/newyou_reception.jpg" class="reception-img" alt="Reception in New You Medispa" />

        <h1>About Us</h1>
        <p>New You Medispa Ltd are the leading experts in low-cost but highly effective cosmetic treatments including <stencil-route-link url="/treatment/muscle-relaxing">anti-wrinkle treatments</stencil-route-link> and <stencil-route-link url="/treatment/dermal-fillers">Dermal Fillers</stencil-route-link>>.</p>
        <p>Theresa Whiffing and Dianne Turner founded New You Medispa in June 2013. Theresa has previously worked for some of the leading clinics in the North East, including the Newcastle Sk:n clinic and the Ewan Bramley Skin Clinic on the North Shields Fish Quay.</p>
        
        <img src="/assets/images/newyou_outside.jpg" alt="Outside of New You Medispa" class="outside-img" />

        <br />
        <p>The clinic is centrally located; next to the North Shields Shopping Centre, where parking is free after 5:30PM.</p>
        <p>Like us on <a href="https://www.facebook.com/pages/New-You-Medispa/464518073640015" target="_blank" rel="noopener" title="View New You Medispa on Facebook">Facebook</a> for up-to-date information on our latest treatments and promotional offers.</p>
        <p><a href="/book-a-consultation" title="Book a consultation New You Medispa" class="book-consultation">Book your free consultation today!</a></p>
        
        <div class="opening-hours">
          <opening-hours></opening-hours>
        </div>

        <h2>Theresa Whiffing</h2>
        <p>Theresa Whiffing is an Independent Nurse Prescriber who has a degree in nursing. She initially worked for the NHS for 20 years. She now has over ten years of experience in facial aesthetics, five of which were spent as the lead nurse for Sk:n Newcastle and is an expert specialist in <a href="/treatment/dermal-filler" title="Derma Fillers with New You Medispa" class="underline">Dermal Fillers</a>, <a href="/treatment/muscle-relaxing" title="Muscle Relaxing with New You Medispa" class="underline">Muscle Relaxing</a> (also known as Botox) and Skin Rejuvenation.</p>
        <p>Theresa is trained in a wide range of world recognised brands including Botox, <a href="https://www.juvederm.co.uk/" target="_blank" rel="noopener" class="underline">Juviderm</a>, <a href="https://lifestyleaesthetics.com/home/teosyal.html" target="_blank" rel="noopener">Teosyal</a>, <a href="https://neostrata.com/" target="_blank" rel="noopener">Neostrata</a> and <a href="https://skintech.info/" target="_blank" rel="noopener">Skin Tech</a>.</p>
        <p>Fellow colleagues and clients alike give high praise for Theresa's attention to detail, medical skills and focus on individual clients' needs.</p>
        <p>In order to stay up to date on the latest trends in facial aesthetics, she is a member of the <a href="https://www.rcn.org.uk/" target="_blank" rel="noopener">Royal College of Nursing</a>, <a href="https://www.bacn.org.uk/" target="_blank" rel="noopener">British Association of Cosmetic Nurses</a> and <a href="http://anp.org.uk/" target="_blank" rel="noopener">The Association of Nurse Prescribers</a>.</p>
      </div>
    );
  }
}
