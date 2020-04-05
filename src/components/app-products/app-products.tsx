import {Component, Host, h, ComponentInterface, Prop, Build} from '@stencil/core';
import {RouterHistory} from '@stencil/router';

import {ProductService} from '../../global/services/product.service';

import {ProductInterface, ErrorInterface} from '../../global/definitions/definitions';
import {defaultPageMetaDescription} from '../../global/site-structure-utils';

@Component({
  tag: 'app-products',
  styleUrl: 'app-products.css',
  shadow: true
})
export class AppProducts implements ComponentInterface {
  private pageMetaDescription = defaultPageMetaDescription;
  private products: ProductInterface[] = [];
  private error: ErrorInterface = {} as ErrorInterface;

  @Prop() history: RouterHistory;

  async componentWillLoad() {
    try {
      const products:ProductInterface[] = await ProductService.getProducts();
      this.products = products;

      // Update title & description
      document.title = `Product list for New You Medispa`;
      document.querySelector('meta[name="description"]').setAttribute("content", this.pageMetaDescription);
    }
    catch(err) {
      this.error = err;
    }
  }
  
  componentDidLoad() {
    if (Build.isBrowser) {
      // Update google analytics
      const page = this.history.location.pathname;
      (window as any).ga('send', 'pageview', page);
    }
  }

  render() {
    const {errorMessage} = this.error;
    const products = this.products;

    return (
      <Host>
        <h1>Product List</h1>

        {errorMessage 
          ? <p>{errorMessage}</p>
          : <div class="products">
              {products.map((product) =>
                <stencil-route-link url={product.url}>
                  <img src={product.thumbnail} alt="" />
                </stencil-route-link>
              )}
          </div>
        }
      </Host>
    );
  }
}
