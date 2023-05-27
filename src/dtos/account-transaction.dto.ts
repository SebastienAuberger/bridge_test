import { TransactionDto } from "./transaction.dto";

export class AccountTransactionDto {
    acc_number : string;
    amount : number;
    transactions : TransactionDto[];
}