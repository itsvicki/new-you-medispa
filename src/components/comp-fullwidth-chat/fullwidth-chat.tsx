import { Component, h, Host } from "@stencil/core";

@Component({
  tag: "nyms-fullwidth-chat",
  styleUrl: "fullwidth-chat.css",
  shadow: true,
})
export class FullWidthChat {
  render() {
    return (
      <Host>
        <div class="heading-wrapper">
          <h2 class="as-h1">plan a visit</h2>
          <div class="divider"></div>
        </div>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2287.852942479825!2d-1.4460263000000002!3d55.010742799999996!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487e6ef1ca10e32b%3A0x8c4b5096ea3a3f7c!2s17+Northumberland+Square%2C+North+Shields%2C+Tyne+and+Wear+NE30+1PX!5e0!3m2!1sen!2suk!4v1416777768507"
          width="100%"
          height="300"
          frameborder="0"
          title="Location of New You Medispa"
        ></iframe>
      </Host>
    );
  }
}
