import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {
  users: string[];

  constructor(private userService:UsersService){}
  ngOnInit(): void {
    this.users = this.userService.inactiveUsers
  }
  onSetToActive(id: number) {
    this.userService.onSetToActive(id)
  }
}
