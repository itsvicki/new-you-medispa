export interface ProductInterface {
  name: string,
  url: string,
  browserDescription: string,
  thumbnail: string,
  image: string,
  type: string,
  price: string,
  size: string,
  productFeaturesHypertext?: any,
  directionsHypertext?: any,
  precautionHypertext?: any
}

export interface TreatmentInterface {
  name: string,
  url: string,
  browserDescription: string,
  thumbnail: string,
  hypertext?: any
}

export interface TestimonialInterface {
  quote: string,
  cite: string
}

export interface ErrorInterface {
  code: 'FILE_ERROR' | 'GENERAL_ERROR' | 'NO_MATCH',
  errorMessage: string
}