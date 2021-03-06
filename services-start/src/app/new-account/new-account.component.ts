import { Component, EventEmitter, Output } from '@angular/core';
import { AccountsService } from '../accounts.service';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent {
  // @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  constructor(private loggingService:LoggingService, private accountsService:AccountsService){
    this.accountsService.eventEmitter.subscribe((status: string)=>alert("status is "+status))
  }
  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsService.addAccount({name:accountName,status:accountStatus})
  }
}
