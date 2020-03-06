export const RECEIVE_AUTHED_USER = "RECEIVE_AUTHED_USER";

export function receiveAuthedUser(authedUser) {
  return {
    type: RECEIVE_AUTHED_USER,
    id: authedUser
  };
}
