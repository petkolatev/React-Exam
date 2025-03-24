import { useNavigate } from 'react-router'
import './login.css'
import { useLogin } from '../../api/authApi'
import { useContext } from 'react'
import { UserContex } from '../contexts/UserContex'



export default function Login() {
    const navigate = useNavigate()
    const { userLoginHandler } = useContext(UserContex)
    const { login } = useLogin()


    const loginHeandler = async (loginData) => {
        const data = Object.fromEntries(loginData)
        const { email, password } = data

        const authData = await login(email, password)

        if (authData.error) {
            return alert(authData.error)
        }
        userLoginHandler(authData)


        navigate('/catalog')
    }



    return (
        <div className="login-form">
            <h2>Логин</h2>

            <form action={loginHeandler}>
                <label htmlFor="email">Имейл</label>
                <input type="email" id="email" name="email" />
                <label htmlFor="password">Парола</label>
                <input type="password" id="password" name="password" />
                <button>Вход</button>
            </form>
        </div>
    )
}
