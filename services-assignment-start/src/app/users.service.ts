import { Injectable } from "@angular/core";
import { SwitchCounterService } from "./switchcounter.service";

@Injectable()
export class UsersService{
    activeUsers = ['Max', 'Anna'];
    inactiveUsers = ['Chris', 'Manu'];

    constructor(private switchCounterService:SwitchCounterService){}
    onSetToInactive(id: number) {
        this.inactiveUsers.push(this.activeUsers[id]);
        this.activeUsers.splice(id, 1);
        this.switchCounterService.onSwitchToInactive()
    }

    onSetToActive(id: number) {
        this.activeUsers.push(this.inactiveUsers[id]);
        this.inactiveUsers.splice(id, 1);
        this.switchCounterService.onSwitchToActive()
    }
}