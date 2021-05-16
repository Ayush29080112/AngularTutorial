import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { ServersService } from "../servers.service";

@Injectable()
export class ServerResolver implements Resolve<{id: number, name: String, status:String}>{
    
    constructor(private serversService: ServersService){}
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): { id: number; name: String; status: String; } | Observable<{ id: number; name: String; status: String; }> | Promise<{ id: number; name: String; status: String; }> {
        return this.serversService.getServer(+route.params['id'])
    }

}