import { AccountService } from "./services/accounts.service";
import { TransactionService } from "./services/transaction.service";

const accountService = new AccountService();
const transactionService = new TransactionService();

const main = async () => {
  try{
      const account = await accountService.getAccountsByPage(1);
      const allAccounts = await accountService.getAllAccounts();
      const transactions = await transactionService.getAccountTransactionsByPage(account.accounts[0].acc_number,1);
      const allTransactions = await transactionService.getAllAccountTransaction(account.accounts[0].acc_number)
      const nbTransactions = await transactionService.getAccountTransactionNumber(account.accounts[0].acc_number)
      const getAllAccountAllTransaction = await transactionService.getAllAccountAllTransaction()
      console.log(getAllAccountAllTransaction)
  }
  catch(e){
    throw new Error(e)
  }
};

main();
