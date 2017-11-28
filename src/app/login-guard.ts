import { CanActivate } from "@angular/router/src/interfaces";

export class LoginGuard implements CanActivate {
    canActivate (){
        return this.checkIfLoggedIn();
    }

    private checkIfLoggedIn(): boolean {
        let loggedIn:boolean = false;
        if(localStorage.getItem("currentUser")) {
            loggedIn = true;
        } else {
            loggedIn = false;
        }
        console.log(loggedIn);
        return loggedIn;
    }
}
