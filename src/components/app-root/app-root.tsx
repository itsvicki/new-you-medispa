import { Component, h, ComponentInterface, Host } from "@stencil/core";

@Component({
  tag: "app-root",
  styleUrl: "app-root.css",
  shadow: true,
})
export class AppRoot implements ComponentInterface {
  render() {
    return (
      <Host>
        <nyms-global-header></nyms-global-header>

        <div id="body">
          <main>
            <stencil-router scrollTopOffset={0}>
              <stencil-route-switch>
                <stencil-route url="/" component="app-home" exact={true} />
                <stencil-route url="/about" component="app-about" />
                <stencil-route
                  url={["/products", "/products/"]}
                  component="app-products"
                  exact={true}
                />
                <stencil-route url="/product/:page" component="app-product" />
                <stencil-route
                  url={["/treatments", "/treatments/"]}
                  component="app-treatments"
                  exact={true}
                />
                <stencil-route
                  url="/treatment/:page"
                  component="app-treatment"
                />
                <stencil-route url="/price-list" component="app-price-list" />
                <stencil-route url="/contact-us" component="app-contact-us" />
                <stencil-route component="app-not-found" />
              </stencil-route-switch>
            </stencil-router>
          </main>
        </div>

        <nyms-global-footer></nyms-global-footer>
      </Host>
    );
  }
}
