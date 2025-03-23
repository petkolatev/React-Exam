import { Navigate, Outlet } from "react-router";
import UseAuth from "./useAuth";

export default function GuestGuard() {
    const { isAuthenticated } = UseAuth()
    if (isAuthenticated) {
        return <Navigate to='/' />
    }
    return <Outlet />

}