import { useContext, useEffect } from "react"
import { UserContex } from "../contexts/UserContex"
import { useUpdateProfile } from "../../api/authApi"
import { useNavigate } from "react-router"

export default function UserProfile() {
    const navigate = useNavigate()
    const { user, token, userUpdate } = useContext(UserContex)
    const { update } = useUpdateProfile()
    let newUpdatedData = { username: user?.username, email: user?.email, _id: user?._id }

    const userUpdateProfile = async (userData) => {
        const data = Object.fromEntries(userData)
        const updatedData = await update(data)

        newUpdatedData = {
            token: token,
            user: {
                _id: updatedData._id,
                username: updatedData.username,
                email: updatedData.email,
                __v: 0
            }
        }
        
        userUpdate(newUpdatedData)
        navigate(`/profile/${user._id}`)
    }

    const { username, email } = newUpdatedData



    return (
        <div className="row">
            <div className="column side">
                <h2>Редактиране на профила</h2>
                <div className="register-form">
                    <form action={userUpdateProfile}>
                        <label htmlFor="username">Потребителско име</label>
                        <input type="text" id="username" name="username" placeholder="username" defaultValue={username} />
                        <label htmlFor="email">Имейл</label>
                        <input type="email" id="email" name="email" placeholder="email" defaultValue={email} />
                        <button>Потвърди</button>
                    </form>

                </div>
            </div>
        </div>
    )

}