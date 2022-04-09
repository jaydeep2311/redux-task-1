export const setLogin = "set_Login";
export const isAuth = "Authorised";

export const setlogin = (payload) => {
  return {
    type: setLogin,
    payload: payload,
  };
};
export const Auth = (payload) => {
  return {
    type: isAuth,
    payload: payload,
  };
};
