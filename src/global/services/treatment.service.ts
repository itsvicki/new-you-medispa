import {TreatmentInterface} from '../definitions/definitions';

class TreatmentServiceController {
  public localCache = new Map<string, Promise<TreatmentInterface[]>>();

  /**
   * Fetch all treatments from a JSON file & store into memory
   * 
   * @returns TreatmentInterface[]
   */
  private async load(): Promise<TreatmentInterface[]> {
    let cacheCheck = this.localCache.get('treatments');

    if (!cacheCheck) {
      try {
        const file = await fetch('/global/data/treatments.json');
        
        if (file.ok !== true) {
          return Promise.reject(
            {
              code: 'FILE_ERROR',
              errorMessage: 'ERROR: T1. Sorry, there was an issue fetching treatments. Please try again later'
            }
          );
        }

        const fileToJson = await file.json();
        this.localCache.set('treatments', fileToJson.treatments);

        return fileToJson.treatments;
      } 
      catch(errors) {
        return Promise.reject(
          {
            code: 'GENERAL_ERROR',
            errorMessage: 'ERROR: T2. Sorry, there was an issue fetching treatments. Please try again later'
          }
        );
      }
    }

    return cacheCheck;
  }

  /**
   * Return all treatments in the catalogue
   * 
   * @returns TreatmentInterface[]
   */
  public async getTreatments(): Promise<TreatmentInterface[]> {
    const data = await this.load();
    return data;
  }

  /**
   * Search the catalogue for a treatment based on a key match
   * 
   * @param product 
   * @param key   What key to match on. By default `url` is used
   * 
   * @returns TreatmentInterface
   */
  public async getTreatment(treatment, key = `url`): Promise<TreatmentInterface> {
    const cachedTreatments = await this.load();
    
    const result = (cachedTreatments as TreatmentInterface[]).find(treatments => treatments[key] === treatment);

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

export const TreatmentService = new TreatmentServiceController();
