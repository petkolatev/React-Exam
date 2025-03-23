import { Navigate, Outlet } from "react-router";
import UseAuth from "../../hooks/useAuth";

export default function AuthGuard() {
    const { isAuthenticated } = UseAuth()
    if (!isAuthenticated) {
        return <Navigate to='/login' />
    }

    return <Outlet />
}