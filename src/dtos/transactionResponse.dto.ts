import { TransactionDto } from "./transaction.dto";

export class TransactionResponseDto {
    transactions : TransactionDto[];
    links : {
        self : string;
        next : string;
    }
}