import { useNavigate } from 'react-router'
import './login.css'
import { useLogin } from '../../api/authApi'



export default function Login({ onLogin }) {
    const navigate = useNavigate()
    const { login } = useLogin()


    const loginHeandler = async (loginData) => {
        const data = Object.fromEntries(loginData)
        const { email, password } = data

        const authData = await login(email,password)
        onLogin(authData)
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
