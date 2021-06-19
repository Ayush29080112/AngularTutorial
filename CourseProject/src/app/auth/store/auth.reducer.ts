import { User } from "../user.model";
import { AuthActions, CLEAR_ERROR, LOGIN, LoginFailed, LOGIN_FAILED, LOGIN_START, LOGOUT, SIGNUP_START } from "./auth.action";

export interface AuthState{
    user :User,
    authError: string,
    loading:boolean
}

const initialState : AuthState= {
    user:null,
    authError:null,
    loading:false
}

export function authReducer(state = initialState,action:AuthActions){

    switch(action.type){
        case LOGIN:
            const user  = new User(action.payload.email,action.payload.userId,action.payload.token,action.payload.expirationDate);
            return{
                ...state,
                user:user,
                authError:null,
                loading:false
            }
        case LOGOUT:
            return{
                ...state,
                user:null,
            }

        case LOGIN_START:
        case SIGNUP_START:
            return{
                ...state,
                authError:null,
                loading:true
            }

        case CLEAR_ERROR:
            return{
                ...state,
                authError:null
            }

        case LOGIN_FAILED:
            return{
                ...state,
                user:null,
                authError:action.payload,
                loading:false
            }
        default:
            return state;

    }
}