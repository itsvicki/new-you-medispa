import { Component, h, ComponentInterface, Prop } from "@stencil/core";
import { RouterHistory } from "@stencil/router";

import { defaultPageMetaDescription } from "../../global/site-structure-utils";
import { registerViewWithTracking } from "../../global/services/helper.utils";

@Component({
  tag: "app-book",
  styleUrl: "app-book.css",
  shadow: true,
})
export class AppBook implements ComponentInterface {
  private pageMetaDescription = defaultPageMetaDescription;

  @Prop() history: RouterHistory;

  constructor() {
    document.title = `Book an appointment with New You Medispa`;
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
        <h1>Book an appointment</h1>

        <h2>Latest News - Clinic Reopening</h2>

        <p>
          Good news! Medically qualified practitioners have been allowed to
          open. We look forward to seeing everyone soon!
        </p>

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

        <iframe
          src="https://bookings.gettimely.com/newyoumedispa/bb/book"
          scrolling="no"
          id="timelyWidget"
          // style="width:480px;height:600px;border:none"
        ></iframe>
      </div>
    );
  }
}
