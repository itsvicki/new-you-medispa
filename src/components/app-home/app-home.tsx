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
        <h1>Latest News - Clinic Temporarily Closing</h1>

        <p>
          The Government has annouced on the 30th December, that the North East are to move to Tier 4. Although we are a medical
          establishment, we feel the situation is very serious, with the infection rate rising so rapidly. The safety of our
          clients and supporting the NHS is paramount to us. We have therefore with regret decided to close.
        </p>

        <p>
          All Clients, who already have appointments, will be prioritised once we feel it is safe to re-open. We will keep you
          updated. If you have any queries or need any help, please contact us at:&nbsp;
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
