import { CURRENCY, SIGN } from "../shared";

export class TransactionDto {
    id : string;
    label : string;
    sign : SIGN;
    amount: number;
    currency: CURRENCY;
}