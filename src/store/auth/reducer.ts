import {
    AUTH_ERROR,
    USER_REQUESTED, USER_LOADED,
    REGISTER_SUCCESS, REGISTER_FAILED,
    DEREGISTER_SUCCESS, DEREGISTER_FAILED,
    LOGIN_SUCCESS, LOGIN_FAILED,
    LOGOUT_SUCCESS,
    EMAIL_TOKEN_SENT, EMAIL_TOKEN_ERROR, EMAIL_VERIFIED,
    PASSWORD_TOKEN_SENT, PASSWORD_TOKEN_ERROR, PASSWORD_TOKEN_VERIFIED,
    AuthState, AuthActions
} from "./types";

const initialState = {
    isAuthenticated: null,
    isLoading: false,
    user: null
};

export default (state: AuthState = initialState, action: AuthActions) => {
    switch(action.type) {
        case USER_REQUESTED:
            return {
                ...state,
                isLoading: true
            };
        case EMAIL_TOKEN_SENT:
        case EMAIL_VERIFIED:
        case PASSWORD_TOKEN_SENT:
        case PASSWORD_TOKEN_VERIFIED:
        case EMAIL_TOKEN_ERROR:
        case PASSWORD_TOKEN_ERROR:
        case DEREGISTER_SUCCESS:
        return {
            ...state,
            isLoading: false
        };
        case USER_LOADED:
            return {
                ...state,
                isLoading: false,
                user: action.payload
            };
        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true,
                isLoading: false
            };
        case AUTH_ERROR:
        case REGISTER_FAILED:
        case DEREGISTER_FAILED:
        case LOGIN_FAILED:
        case LOGOUT_SUCCESS:
            return {
                ...state,
                user: null,
                isAuthenticated: false,
                isLoading: false
            };
        default:
            return state;
    }
};