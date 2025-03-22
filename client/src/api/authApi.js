import { useContext, useEffect } from "react";
import request from "../utils/request";
import { UserContex } from '../components/contexts/UserContex'


const baseUrl = 'http://localhost:3000/api';

export const useLogin = () => {


    const login = async (email, password) => {
        return await request.post(
            `${baseUrl}/login`,
            { email, password },
        );

    }

    return {
        login,
    }
}

export const useRegister = () => {
    const register = async (data) =>
        await request.post(`${baseUrl}/register`, data)

    return {
        register
    }
}

export const useUpdateProfile = () => {
    const { user } = useContext(UserContex)
    const update = async (data) => {
        return await request.put(`${baseUrl}/profile/${user._id}`, { ...data })
    }

    return { update }
}

export const useLogout = () => {
    const { token, userLogoutHandler } = useContext(UserContex);

    useEffect(() => {

        if (!token) {
            return;
        }

        request.get(`${baseUrl}/logout`, null,)
            .then(userLogoutHandler);

    }, [token, userLogoutHandler]);

    return {
        isLoggedOut: !!token,
    };
}