import { AccountDto } from "./account.dto";

export class AccountResponseDto {
    accounts : AccountDto[];
    links: {
        self : string;
        next : string;
    }
}