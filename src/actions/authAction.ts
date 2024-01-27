export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGOUT = 'LOGOUT';
export const SET_AUTH_FOR_SENSITIVE_DATA = 'SET_AUTH_FOR_SENSITIVE_DATA';

export const loginSuccess = () => ({
  type: LOGIN_SUCCESS,
});

export const logout = () => ({
  type: LOGOUT,
});

export const setAuthForSensitiveData = () => ({
  type: SET_AUTH_FOR_SENSITIVE_DATA,
});
