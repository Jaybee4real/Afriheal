import { AUTH_LOADING, AUTH_SUCCESS, AUTH_FAILED } from './auth.types'

const INITIAL_STATE = {
    user: {},
    isAuthenticated: false,
    loading: false,
    error: {}
}

const authReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case AUTH_LOADING:
            return {
              ...state,
              loading: action.payload.loading,
            };
        case AUTH_SUCCESS: 
            return {
              ...state,
              loading: action.payload.loading,
              user: action.payload.user,
              isAuthenticated: true,
            };
        case AUTH_FAILED: 
            return {
              ...state,
              loading: action.payload.loading,
              error: action.payload.error,
            };
        default: 
            return state
    }

}

 export default authReducer