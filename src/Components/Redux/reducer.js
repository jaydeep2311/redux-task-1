import { setLogin } from "./action";
import { isAuth } from "./action";

export const reducer = (
  store = {
    user: {},
    isAuth: false,
  },
  { type, payload }
) => {
  switch (type) {
    case setLogin:
      return { ...store, user: payload };

    case isAuth:
      return { ...store, isAuth: payload };
    default:
      return store;
  }
};
