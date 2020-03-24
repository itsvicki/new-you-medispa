import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-about',
  styleUrl: 'app-about.css',
  shadow: true
})
export class AppAbout {

  render() {
    return (
      <div>
        <picture>
          <img src="./assets/images/newyou_reception.jpg" class="reception-img" alt="Reception in New You Medispa" />
        </picture>

        <h2>About Us</h2>
        <p>New You Medispa Ltd are the leading experts in low-cost but highly effective cosmetic treatments including <a href="/treatment/muscle-relaxing" title="Muscle Relaxing with New You Medispa" class="underline">anti-wrinkle treatments</a> and <a href="/treatment/dermal-filler" title="Derma Fillers with New You Medispa" class="underline">Dermal Fillers</a>.</p>
        <p>Theresa Whiffing and Dianne Turner founded New You Medispa in June 2013. Theresa has previously worked for some of the leading clinics in the North East, including the Newcastle Sk:n clinic and the Ewan Bramley Skin Clinic on the North Shields Fish Quay.</p>

        <picture class="float-left">
          <img src="./assets/images/newyou_outside.jpg" alt="Outside of New You Medispa" />
        </picture>

        <p>The clinic is centrally located; next to the North Shields Shopping Centre, where parking is free after 5:30PM.</p>
        <p>Like us on <a href="https://www.facebook.com/pages/New-You-Medispa/464518073640015" target="_blank" title="View New You Medispa on Facebook" class="underline">Facebook</a> for up-to-date information on our latest treatments and promotional offers.</p>
        <p><a href="/book-a-consultation" title="Book a consultation New You Medispa" class="em noUnderline">Click to book your free consultation today!</a></p>
        
        <div class="opening-hours">
          <h3>Opening Times</h3>
          <table>
            <tbody>
              <tr>
                <td>Mon:</td>
                <td>
                  09:30 - 17:00
                </td>
              </tr>
              <tr>
                <td>Tue:</td>
                <td>
                  11:00 - 19:00
                </td>
              </tr>
              <tr>
                <td>Wed:</td>
                <td>
                  Closed
                </td>
              </tr>
              <tr>
                <td>Thu:</td>
                <td>
                  11:00 - 20:00
                </td>
              </tr>
              <tr>
                <td>Fri:</td>
                <td>
                  09:30 - 16:00
                </td>
              </tr>
              <tr>
                <td>Sat:</td>
                <td>10:00 - 14:00</td>
              </tr>
              <tr>
                <td>Sun:</td>
                <td>Closed</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Theresa Whiffing</h3>
        <p>Theresa Whiffing is an Independent Nurse Prescriber who has a degree in nursing. She initially worked for the NHS for 20 years. She now has over ten years of experience in facial aesthetics, five of which were spent as the lead nurse for Sk:n Newcastle and is an expert specialist in <a href="/treatment/dermal-filler" title="Derma Fillers with New You Medispa" class="underline">Dermal Fillers</a>, <a href="/treatment/muscle-relaxing" title="Muscle Relaxing with New You Medispa" class="underline">Muscle Relaxing</a> (also known as Botox) and Skin Rejuvenation.</p>
        <p>Theresa is trained in a wide range of world recognised brands including Botox, <a href="http://www.juvederm.co.uk/" target="_blank" title="New You Medispa use Juviderm" class="underline">Juviderm</a>, <a href="http://lifestyleaesthetics.com/home/teosyal.html" target="_blank" title="New You Medispa use Teosyal" class="underline">Teosyal</a>, <a href="http://www.neostrata.com/" target="_blank" title="New You Medispa use Neostrata" class="underline">Neostrata</a> and <a href="http://skintech.info/" target="_blank" title="New You Medispa use Skin Tech" class="underline">Skin Tech</a>.</p>
        <p>Fellow colleagues and clients alike give high praise for Theresa's attention to detail, medical skills and focus on individual clients' needs.</p>
        <p>In order to stay up to date on the latest trends in facial aesthetics, she is a member of the <a href="http://www.rcn.org.uk/" target="_blank" title="Royal College of Nursing" class="underline">Royal College of Nursing</a>, <a href="http://www.cosmeticnurses.org/" target="_blank" title="British Association of Cosmetic Nurses" class="underline">British Association of Cosmetic Nurses</a> and <a href="http://anp.org.uk/" target="_blank" title="Association of Nurse Prescribers" class="underline">The Association of Nurse Prescribers</a>.</p>
      </div>
    );
  }
}
