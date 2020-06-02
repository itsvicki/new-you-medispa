import { Component, h, Prop, ComponentInterface } from "@stencil/core";

@Component({
  tag: "opening-hours",
  styleUrl: "opening-hours.css",
  shadow: true,
})
export class OpeningHours implements ComponentInterface {
  // private openingData = [
  //   {
  //     day: 'Mon',
  //     time: '09:30 - 17:00'
  //   },
  //   {
  //     day: 'Tue',
  //     time: '11:00 - 19:00'
  //   },
  //   {
  //     day: 'Wed',
  //     time: 'Closed'
  //   },
  //   {
  //     day: 'Thu',
  //     time: '11:00 - 20:00'
  //   },
  //   {
  //     day: 'Fri',
  //     time: '09:30 - 16:00'
  //   },
  //   {
  //     day: 'Sat',
  //     time: '10:00 - 14:00'
  //   },
  //   {
  //     day: 'Sun',
  //     time: 'Closed'
  // }];

  @Prop() smallTitle: boolean = false;

  render() {
    return (
      <div>
        <h2 class={this.smallTitle ? "small" : ""}>
          Latest information - Clinic Reopening
        </h2>

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

        <h3>Register your interest</h3>
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

        {/* {this.openingData.map((data) =>
        <div class="row">
          <div class="day">{data.day}:</div>
          <div class="time">{data.time}</div>
        </div>
        )} */}
      </div>
    );
  }
}
