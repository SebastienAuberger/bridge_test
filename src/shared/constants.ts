export const API_URL = "https://dsague.fr";

export const GET_CONFIG = {
    headers:{
      'X-Api-Key': "17066624-8fef-4b49-b2b5-d0b8cebcf171"
    }
  };

  export enum CURRENCY {
    EUROS = 'EUR',
    US_DOLLARS = "USD"
  }

  export enum SIGN {
    DEBIT = 'CDT',
    CREDIT = "DBT"
  }