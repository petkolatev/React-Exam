import { useNavigate } from 'react-router'
import './login.css'
import { useContext } from 'react'
import { UserContex } from '../contexts/UserContex'

export default function Login() {
    const navigate = useNavigate()
    const { userLoginHandler } = useContext(UserContex)


    const loginHeandler = async (loginData) => {
        const data = Object.fromEntries(loginData)

        const response = await fetch('http://localhost:3000/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        const result = await response.json()
        userLoginHandler(result)
        console.log(authData);
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
