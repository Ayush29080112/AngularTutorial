export class SwitchCounterService{
    inactiveSwitchCount:number = 0
    activeSwitchCount:number = 0

    onSwitchToInactive(){
        this.inactiveSwitchCount +=1;
        console.log("Inactive Switch count is: "+ this.inactiveSwitchCount)
    }

    onSwitchToActive(){
        this.activeSwitchCount +=1;
        console.log("Active Switch count is: "+ this.activeSwitchCount)
    }
}