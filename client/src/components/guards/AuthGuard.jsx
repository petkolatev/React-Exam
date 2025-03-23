import { Navigate, Outlet } from "react-router";
import UseAuth from "../../hooks/useAuth";

export default function AuthGuard() {
    const { isAuthenticated } = UseAuth()
    console.log(isAuthenticated);
    if (!isAuthenticated) {
        return <Navigate to='/login' />
    }

    return <Outlet />
}