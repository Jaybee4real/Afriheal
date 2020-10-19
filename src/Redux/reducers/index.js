import { combineReducers } from 'redux';
import VerifyReducer from './verify.reducer';
import LoginReducer from './loginReducer';
import { signupReducer } from './signup.reducer';
import FacebookReducer from './facebookReducer';
import authReducer from "../auth/auth.reducer";
// import DashbordReducer from './/dashboard.reducer';
import Logout from './logout.reducer';
import Notification from './notification.reducer';
import ChatReducer from './chat.reducer';

const allReducers = combineReducers({
  Verify: VerifyReducer,
  auth: authReducer,
  // loginProp: LoginReducer,
  // signup: signupReducer,
  facebook: FacebookReducer,
  Logout,
  Notification,
  ChatReducer,
});

export default allReducers;
