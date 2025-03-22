
import { UserContex } from "../components/contexts/UserContex";
import usePersistedState from "../hooks/usePersistedState";

export default function UserProvider({
    children,
}) {
    const [authData, setAuthData] = usePersistedState('auth', {})

    const userLoginHandler = (resultData) => {
        setAuthData(resultData)
    }

    const userLogoutHandler = () => {
        setAuthData({});
    }

    return(
        <UserContex.Provider value={{...authData,userLoginHandler,userLogoutHandler}}>
            {children}
        </UserContex.Provider>
    )
}