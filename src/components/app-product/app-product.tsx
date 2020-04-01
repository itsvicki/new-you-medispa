import {Component, Host, Prop, h, ComponentInterface} from '@stencil/core';

import {ProductService} from '../../global/services/product.service';
import HelperService from '../../global/services/helper.service';

import {ProductInterface, ErrorInterface} from '../../global/definitions/definitions';
import {fileNotFound} from '../../global/site-structure-utils';

@Component({
  tag: 'app-product',
  styleUrl: 'app-product.css',
  shadow: true
})
export class AppProduct implements ComponentInterface {
  private fileNotFound = fileNotFound;
  private helperService: HelperService = new HelperService();
  private product: ProductInterface = {} as ProductInterface;
  private toHypertext = this.helperService.toHypertext;
  private error: ErrorInterface = {} as ErrorInterface;

  @Prop() page: string;

  async componentWillRender() {
    if (this.page) {
      try {
        const product = await ProductService.getProduct(this.page);     
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
              <h2>{name}</h2>

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
                    {this.toHypertext(productFeaturesHypertext)}
                  </nyms-accordion>
                }

                {(directionsHypertext) &&
                  <nyms-accordion accordionTitle="Directions" name="accordion-directions" open={false}>
                    {this.toHypertext(directionsHypertext)}
                  </nyms-accordion>
                }

                {(precautionHypertext) &&
                  <nyms-accordion accordionTitle="Precaution" name="accordion-precaution" open={false}>
                    {this.toHypertext(precautionHypertext)}
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
