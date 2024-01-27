import {
  LOGIN_SUCCESS,
  LOGOUT,
  SET_AUTH_FOR_SENSITIVE_DATA,
} from '../actions/authAction';

const initialState = {
  isAuthenticated: false,
  isAuthForSensitiveData: false,
};

const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
      };
    case LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        isAuthForSensitiveData: false,
      };
    case SET_AUTH_FOR_SENSITIVE_DATA:
      return {
        ...state,
        isAuthForSensitiveData: true,
      };
    default:
      return state;
  }
};

export default authReducer;
