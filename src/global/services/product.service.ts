import {ProductInterface} from '../definitions/definitions';

export default class ProductServiceController {
  public localCache = new Map<string, Promise<ProductInterface[]>>();

  /**
   * Fetch all products from a JSON file & store into memory
   * 
   * @returns ProductInterface[]
   */
  private async load(): Promise<ProductInterface[]> {
    let cacheCheck = this.localCache.get('products');

    if (!cacheCheck) {
      try {
        const file = await fetch('/global/data/products.json');
        
        if (file.ok !== true) {
          return Promise.reject(
            {
              code: 'FILE_ERROR',
              errorMessage: 'ERROR: T1. Sorry, there was an issue fetching products. Please try again later'
            }
          );
        }

        const fileToJson = await file.json();
        this.localCache.set('products', fileToJson.products);

        return fileToJson.products;
      } 
      catch(errors) {
        return Promise.reject(
          {
            code: 'GENERAL_ERROR',
            errorMessage: 'ERROR: T2. Sorry, there was an issue fetching products. Please try again later'
          }
        );
      }
    }

    return cacheCheck;
  }

  /**
   * Return all products in the catalogue
   * 
   * @returns ProductInterface[]
   */
  public async getProducts(): Promise<ProductInterface[]> {
    const data = await this.load();
    return data;
  }

  /**
   * Search the catalogue for a product based on a key match
   * 
   * @param product 
   * @param key   What key to match on. By default `url` is used
   * 
   * @returns ProductInterface
   */
  public async getProduct(product, key = `url`): Promise<ProductInterface> {
    const cachedProducts = await this.load();
    
    const result =  (cachedProducts as ProductInterface[]).find(products => products[key] === product);

    if (result) {
      return result;
    }

    return Promise.reject(
      {
        code: 'NO_MATCH',
        errorMessage: 'ERROR: T3. Sorry, we don\'t seem to recognise that treatment. Please try again later'
      }
    );
  }
}

export const ProductService = new ProductServiceController();
