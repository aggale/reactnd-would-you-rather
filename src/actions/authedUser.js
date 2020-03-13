export const LOGIN_AUTHED_USER = "LOGIN_AUTHED_USER";
export const LOGOUT_AUTHED_USER = "LOGOUT_AUTHED_USER";

export function loginAuthedUser(authedUser) {
  return {
    type: LOGIN_AUTHED_USER,
    id: authedUser
  };
}

export function logoutAuthedUser(authedUser) {
  return {
    type: LOGOUT_AUTHED_USER
  };
}
