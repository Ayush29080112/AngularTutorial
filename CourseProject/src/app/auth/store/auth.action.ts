import { Action } from "@ngrx/store";

export const LOGIN ='LOGIN';
export const LOGOUT ='LOGOUT';

export const LOGIN_START ='LOGIN_START';

export const LOGIN_FAILED ='LOGIN_FAILED';

export const SIGNUP_START ='SIGNUP_START';

export const CLEAR_ERROR ='CLEAR_ERROR';

export const AUTO_LOGIN ='AUTO_LOGIN';

export const AUTO_LOGOUT = 'AUTO_LOGOUT';

export class Login implements Action{
    readonly type = LOGIN
    constructor(public payload:{email:string, userId:string,token:string, expirationDate:Date}){}
}

export class Logout implements Action{
    readonly type = LOGOUT
}

export class LoginStart implements Action{
    readonly type = LOGIN_START

    constructor(public payload:{email:string,password:string}){}
}

export class SignupStart implements Action{
    readonly type = SIGNUP_START

    constructor(public payload:{email:string,password:string}){}
}

export class LoginFailed implements Action{
    readonly type = LOGIN_FAILED

    constructor(public payload:string){}
}

export class ClearError implements Action{
    readonly type = CLEAR_ERROR

}

export class AutoLogin implements Action{
    readonly type = AUTO_LOGIN

}

export class AutoLogout implements Action{
    readonly type = AUTO_LOGOUT

}


export type AuthActions = Login|Logout|LoginStart| LoginFailed|SignupStart|ClearError|AutoLogin|AutoLogout;