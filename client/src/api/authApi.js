import request from "../utils/request";


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