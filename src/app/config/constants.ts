export namespace CONSTANTS {
    const DOMAIN: string = "http://localhost:8999";

    export class EndPoints {
      //PRODUCTS
      static readonly PRODUCTS_LIST: string = `${DOMAIN}/public/products/`;
      static readonly CATEGORIES_LIST: string = `${DOMAIN}/public/products/categories/`;
    }

    export class Messages {
      static readonly DEFAULT_ERROR: string =  "Une erreur interne s'est produite";
    }

    export class LocalStorage {
      static readonly AUTHENTICATION_OBJECT: string =  "AUTH_OBJECT";
    }
}
