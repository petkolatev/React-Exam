import { useContext } from "react";
import { UserContex } from "../components/contexts/UserContex";

export default function UseAuth(){
    const authData = useContext(UserContex)

    return{
        ...authData,
        isAuthenticated : !!authData.token,
    }
}