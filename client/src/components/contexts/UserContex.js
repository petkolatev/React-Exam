import { createContext } from "react";

export const UserContex = createContext({
    _id: '',
    email: '',
    username: '',
    accessToken: '',
    userLoginHandler: () => null,
    userLogoutHandler: () => null,
})