import jwtDecode from "jwt-decode";
import API_SERVICE from "../../utils/API";
import { message as alert } from "antd";
import "../../components/common/antAlert.scss";

import { AUTH_LOADING, AUTH_SUCCESS, AUTH_FAILED, LOGOUT } from './auth.types'

export const authLoading = () => ({
  type: AUTH_LOADING,
  payload: {
    loading: true
  }
});

export const authSuccess = (user) => ({
  type: AUTH_SUCCESS,
  payload: {
    loading: true,
    user,
  }
});

export const authFailed = (error) => ({
  type: AUTH_FAILED,
  payload: {
    loading: false,
    error
  }
});

export const logout = () => ({
  type: LOGOUT,
});

export const registerAccount = (userData, history) => async (dispatch) => {
  dispatch(authLoading())

  try {
    const newuser = await API_SERVICE.post("https://health-stack.herokuapp.com/api/v1/auth/signup", userData)
    alert.success("Account Created! Check your inbox to verify your email")
    dispatch(authSuccess(newuser))
    return history.push('/signin')
  } catch (error) {
    const {
      data: { errors },
    } = error.response
    const message = Object.values(errors)[0]
    alert.error(message)
    return dispatch(authFailed(message))
  }
} 

export const signInAccount = (userData, history, accountVerification) => async (dispatch) => {
  dispatch(authLoading())

  try {
    let userToken
    if (userData !== null) {
        const logInUser = await API_SERVICE.post(
          "https://health-stack.herokuapp.com/api/v1/auth/signin",
          userData
        );
        const { token } = logInUser.data;
        userToken = token;
    } else userToken = accountVerification

    localStorage.setItem('jwtToken', userToken)
    const user = jwtDecode(userToken)
    const successMessage = accountVerification ? "Your account is successfully verified" : "User successfully logged in"
    alert.success(successMessage)
    dispatch(authSuccess(user))
    return history.push('/dashboard')
  
  } catch (error) {
     const {
       data: { errors },
     } = error.response;
     const message = Object.values(errors)[0];
     alert.error(message);
     return dispatch(authFailed(message));
  }
}

export const logoutAccount = (history) => async (dispatch) => {
  try {
    await API_SERVICE.post("auth/logout");
    dispatch(logout());
    localStorage.removeItem("jwtToken");
    alert.success("You have successfully signed out!");
    return history.push("/");
  } catch (error) {
    const {
      data: { errors },
    } = error.response;
    const message = Object.values(errors)[0];
    return dispatch(authFailed(message));
  }
}