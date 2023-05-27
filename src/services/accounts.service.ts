import { AccountResponseDto } from "../dtos/account-response.dto";
import { AccountDto } from "../dtos/account.dto";
import { API_URL, GET_CONFIG } from "../shared";
import axios from 'axios'

const axiosInstance = axios.create()

export class AccountService {

    async getAllAccounts() : Promise<AccountDto[]>{
        let isNextEmpty : boolean = false
        let accounts : AccountDto[] = []
        let res : AccountResponseDto;
        let i = 1;
        while(!isNextEmpty){
            res = await this.getAccountsByPage(i);
            res.accounts.forEach((val) => {
                accounts.push(val);
            })
            if(res.links.next == ""){
                isNextEmpty = true;
            }
            i++;
        }
        return accounts
    }

    async getAccountsByPage(page : number) : Promise<AccountResponseDto>{
        try{
            const accounts = await axiosInstance.get(API_URL + '/accounts?page=' + page, GET_CONFIG);
            const accountList : AccountResponseDto = accounts.data;
            return accountList;
          }
          catch(e){
            throw new Error('Error while retrieving data: ' + e);
          }
    }
}
