import { Component, h, ComponentInterface, Prop } from "@stencil/core";
import { RouterHistory } from "@stencil/router";

import { registerViewWithTracking } from "../../global/services/helper.utils";

@Component({
  tag: "app-about",
  styleUrl: "app-about.css",
  shadow: true,
})
export class AppAbout implements ComponentInterface {
  @Prop() history: RouterHistory;

  constructor() {
    document.title = `About New You Medispa`;

    const description = `About new you medispa in newcastle-upon-tyne`;
    document
      .querySelector('meta[name="description"]')
      .setAttribute("content", description);
  }

  componentDidLoad() {
    registerViewWithTracking(this.history.location.pathname);
  }

  render() {
    return (
      <div class="content-wrapper">
        <img
          src="/assets/images/newyou_reception.jpg"
          class="reception-img"
          alt="Reception in New You Medispa"
        />

        <div class="heading-wrapper">
          <h1>about us</h1>
          <div class="divider"></div>
        </div>

        <p>
          New You Medispa Ltd are the leading experts in low-cost but highly
          effective cosmetic treatments including{" "}
          <stencil-route-link url="/treatment/muscle-relaxing">
            anti-wrinkle treatments
          </stencil-route-link>{" "}
          and{" "}
          <stencil-route-link url="/treatment/dermal-fillers">
            Dermal Fillers
          </stencil-route-link>
          .
        </p>
        <p>
          Theresa Whiffing (RGN) and Dianne Turner (level 3 beauty therapist),
          founded New You Medispa Ltd in 2003.
        </p>
        <p>
          Consultations are complementary and include an honest, friendly
          appraisal and discussion of all potential treatment options.
        </p>

        <img
          src="/assets/images/newyou_outside.jpg"
          alt="Outside of New You Medispa"
          class="outside-img"
        />

        <br />
        <p>
          The clinic is centrally located; next to the North Shields Shopping
          Centre, where parking is free after 5:30PM.
        </p>
        <p>
          Like us on{" "}
          <a
            href="https://www.facebook.com/pages/New-You-Medispa/464518073640015"
            target="_blank"
            rel="noopener noreferrer"
            title="View New You Medispa on Facebook"
          >
            Facebook
          </a>{" "}
          for up-to-date information on our latest treatments.
        </p>
        <p>
          <a
            href="https://connect.pabau.com/bookings.php?compid=8710"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book your free consultation today!
          </a>
        </p>

        <div class="opening-hours">
          <opening-hours></opening-hours>
        </div>

        <h2>Theresa Whiffing</h2>
        <p>
          Theresa Whiffing is a Registered General Nurse who previously worked
          for the NHS . She has a BSc(Nursing), is an Independent Nurse
          Prescriber and has a Postgraduate Certificate in Professional
          non-surgical Aesthetic Practice from Northumbria University.
        </p>
        <p>
          Theresa has worked in Aesthetics since 2003, previously working for
          some of the leading clinics in the North East, including Sk:n, where
          she was Lead Nurse for 5 years, and the Ewan Bramley Skin Clinic.
        </p>
        <p>
          She is trained in the use of a wide range of world wide endorsed
          brands including Botox,{" "}
          <a
            href="https://www.juvederm.co.uk/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Juviderm
          </a>
          ,{" "}
          <a
            href="https://lifestyleaesthetics.com/home/teosyal.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Teosyal
          </a>
          ,{" "}
          <a
            href="https://restylane.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Restylane
          </a>{" "}
          and{" "}
          <a
            href="hhttps://ha-derma.co.uk/products/profhilo/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Prophilo
          </a>
          . In order to stay up to date she subscribes to medical journals,
          attends regular conferences and update meetings.
        </p>
      </div>
    );
  }
}
