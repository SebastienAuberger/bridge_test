import { CURRENCY } from "../shared";

export class AccountDto {
    acc_number : string;
    amount? : string;
    currency: CURRENCY;
}