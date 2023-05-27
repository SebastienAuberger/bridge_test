import { AccountTransactionDto } from "../dtos/account-transaction.dto";
import { TransactionDto } from "../dtos/transaction.dto";
import { TransactionResponseDto } from "../dtos/transactionResponse.dto";
import { API_URL, GET_CONFIG } from "../shared";
import axios from 'axios'
import { AccountService } from "./accounts.service";

const axiosInstance = axios.create()
const accountService = new AccountService();

export class TransactionService {
    async getAllAccountTransaction(acc_number : string) : Promise<TransactionDto[]>{
        let isNextEmpty : boolean = false
        let transactions = []
        let res;
        let i = 1;
        while(!isNextEmpty){
            res = await this.getAccountTransactionsByPage(acc_number,i);
            res.transactions.forEach((val) => {
                transactions.push(val);
            })
            if(res.links.next == ""){
                isNextEmpty = true;
            }
            i++;
        }
        return transactions;
    }

    async getAccountTransactionsByPage(acc_number : string, page: number) : Promise<TransactionResponseDto>{
        let res = await axiosInstance.get(API_URL + "/accounts/" + acc_number + "/transactions?page=" + page, GET_CONFIG);
        return res.data;
    }

    async getAccountTransactionNumber(acc_number) : Promise<number> {
        return await (await this.getAllAccountTransaction(acc_number)).length
    }

    async getAllAccountAllTransaction() : Promise<AccountTransactionDto[]>{
        let accountsTransaction : AccountTransactionDto[] = []
        const accounts = await accountService.getAllAccounts();
        accounts.forEach( async (val) => {
            let nbTransactions = await this.getAccountTransactionNumber(val.acc_number)
            let accountsTransactionList = await this.getAllAccountTransaction(val.acc_number)
            console.log(nbTransactions)
            accountsTransaction.push({
                acc_number : val.acc_number,
                amount : nbTransactions,
                transactions : accountsTransactionList
            })
        })
        return accountsTransaction;
    }
}