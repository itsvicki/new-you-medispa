import {Component, Host, Prop, h, ComponentInterface, Build} from '@stencil/core';
import {MatchResults, RouterHistory} from '@stencil/router';

import {ProductService} from '../../global/services/product.service';
import {toHypertext} from '../../global/services/helper.utils';

import {ProductInterface, ErrorInterface} from '../../global/definitions/definitions';
import {fileNotFound} from '../../global/site-structure-utils';

@Component({
  tag: 'app-product',
  styleUrl: 'app-product.css',
  shadow: true
})
export class AppProduct implements ComponentInterface {
  private fileNotFound = fileNotFound;
  private product: ProductInterface = {} as ProductInterface;
  private error: ErrorInterface = {} as ErrorInterface;

  @Prop() match: MatchResults;
  @Prop() history: RouterHistory;

  async componentWillRender() {
    const page = `/product/${this.match.params.page}`;
    
    try {
      const product = await ProductService.getProduct(page);     
      this.product = product;

      // Update browser title & description
      document.title = `${product.name} - New You Medispa`;
      document.querySelector('meta[name="description"]').setAttribute("content", product.browserDescription); 
    }
    catch(err) {
      if (err.code === 'NO_MATCH') {
        this.fileNotFound();
      }

      this.error = err;
    }
  }

  componentDidLoad() {
    if (Build.isBrowser && typeof (window as any).ga === "function") {
      // Update google analytics
      const page = this.history.location.pathname;
      (window as any).ga('send', 'pageview', page);
    }
  }

  render() {
    const {errorMessage} = this.error;
    const {
      name, 
      image, 
      type, 
      size, 
      price, 
      productFeaturesHypertext,
      directionsHypertext,
      precautionHypertext
    } = this.product;

    return (
      <Host>
        {errorMessage 
          ? <p>{errorMessage}</p>
          : <div>
              <div class="product">
              <h1>{name}</h1>

              <stencil-route-link url='/products'>Back to products</stencil-route-link>
            </div>

            <div class="product-more-details"> 
              <div class="image">
                <img src={image} alt="" />
              </div>

              <div class="product-information">
                <h3>Product information</h3>

                <dl>
                  <dt>Type</dt>
                  <dd>{type}</dd>

                  <dt>Size</dt>
                  <dd>{size}</dd>

                  <dt>Price</dt>
                  <dd>{price}</dd>
                </dl>

                {(productFeaturesHypertext) &&
                  <nyms-accordion accordionTitle="Product Features" name="accordion-product-features" open={true}>
                    {toHypertext(productFeaturesHypertext)}
                  </nyms-accordion>
                }

                {(directionsHypertext) &&
                  <nyms-accordion accordionTitle="Directions" name="accordion-directions" open={false}>
                    {toHypertext(directionsHypertext)}
                  </nyms-accordion>
                }

                {(precautionHypertext) &&
                  <nyms-accordion accordionTitle="Precaution" name="accordion-precaution" open={false}>
                    {toHypertext(precautionHypertext)}
                  </nyms-accordion>
                }
              </div>
            </div>
          </div>
        }
      </Host>
    );
  }
}
