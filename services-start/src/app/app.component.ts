import { Component, OnInit } from '@angular/core';
import { AccountsService } from './accounts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  private accounts: {name: string, status: string}[];
  constructor(private accountsService:AccountsService){}
  ngOnInit(): void {
    this.accounts=this.accountsService.accounts;
  }

  // onAccountAdded(newAccount: {name: string, status: string}) {
  //   this.accountsService.addAccount(newAccount);
  // }

  // onStatusChanged(updateInfo: {id: number, newStatus: string}) {
  //   this.accountsService.updateAccount(updateInfo.id,updateInfo.newStatus)
  // }

}
