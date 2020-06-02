import { Component, h, ComponentInterface, Prop } from "@stencil/core";
import { RouterHistory } from "@stencil/router";

import { defaultPageMetaDescription } from "../../global/site-structure-utils";
import { registerViewWithTracking } from "../../global/services/helper.utils";

@Component({
  tag: "app-home",
  styleUrl: "app-home.css",
  shadow: true,
})
export class AppHome implements ComponentInterface {
  private pageMetaDescription = defaultPageMetaDescription;

  @Prop() history: RouterHistory;

  constructor() {
    document.title = `New You Medispa for affordable cosmetic treatments`;
    document
      .querySelector('meta[name="description"]')
      .setAttribute("content", this.pageMetaDescription);
  }

  componentDidLoad() {
    registerViewWithTracking(this.history.location.pathname);
  }

  render() {
    return (
      <div>
        <h1>Latest News - Clinic Reopening</h1>

        <p>
          We are hoping to reopen on July 6th, once we have been advised it is
          safe to do so by the Government. In the meantime we are preparing the
          clinic with deep cleaning and sourcing of PPE, so that we can reopen
          our doors under the safest and most hygienic conditions possible, to
          protect the well-being of both our clients and staff.
        </p>

        <p>
          We will reopen our online booking system once we have a definite date
          from the Government. We will update you once we have more information.
        </p>

        <h2>Register your interest</h2>
        <p>
          You can register your interest early by completing our online form and
          we will get back to you as soon as we have an opening date.
          <a
            class="btn"
            href="https://docs.google.com/forms/d/e/1FAIpQLSfXDGZNWd2UKJvqsHq0W5w-UEqUxO4Dd6Jb4FBEaQWMKFbSiQ/viewform?usp=sf_link"
            target="_blank"
            rel="noopener"
          >
            Register your interest
          </a>
        </p>
        <br />

        <p>
          If you have any queries or need any help, please contact us at:&nbsp;
          <a href="mailto:reception@newyou-medispa.co.uk">
            reception@newyou-medispa.co.uk
          </a>
        </p>

        <p>
          Thank you again for your on-going support. <br />
          Dianne and Theresa
        </p>
        <br />
        <br />
        <br />

        <div id="intro">
          <h2>
            New You Medispa are the leading experts in affordable skin
            rejuventation.
          </h2>
          <p>
            We understand that every person is unique, that's why we provide
            each client with your own custom-made treatment plan to give you a
            fresh and youthful look.
          </p>
          <p>
            Whether we're giving dermal fillers, muscle relaxing treatment or
            skin peels we pride ourselves on always providing a relaxed,
            friendly atmosphere, where your satisfaction is both paramount and
            guaranteed.
          </p>
          <p>
            All treatments are provided by our expert Harley Street trained
            nurse with over 12 years of experience.
          </p>
          <p>
            Call today for your free consultation and find out how we can give
            you your own New You look.
          </p>
          <p>
            New You Medispa,{" "}
            <span class="em">be your own kind of beautiful.</span>
          </p>
        </div>
      </div>
    );
  }
}
