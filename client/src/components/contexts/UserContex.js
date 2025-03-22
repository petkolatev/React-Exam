import { createContext } from "react";

export const UserContex = createContext({
    _id: '',
    email: '',
    username: '',
    token: '',
    userLoginHandler: () => null,
    userLogoutHandler: () => null,
    userUpdate: () => null,
})