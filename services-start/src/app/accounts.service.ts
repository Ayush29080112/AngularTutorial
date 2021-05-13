import { EventEmitter, Injectable } from "@angular/core";
import { LoggingService } from "./logging.service";

@Injectable()
export class AccountsService{

    accounts = [
        {
          name: 'Master Account',
          status: 'active'
        },
        {
          name: 'Testaccount',
          status: 'inactive'
        },
        {
          name: 'Hidden Account',
          status: 'unknown'
        }
      ];

      eventEmitter = new EventEmitter<string>()
      constructor(private loggingService:LoggingService){

      }

      addAccount(newAccount: {name: string, status: string}){
        this.loggingService.logStatusChange(status)
        this.accounts.push({name:newAccount.name ,status: newAccount.status})
      }

      updateAccount(id:number, stat:string){
        this.loggingService.logStatusChange(status)
        this.accounts[id].status = stat;
      }

}