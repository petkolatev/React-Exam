
import { useNavigate } from 'react-router'
import './register.css'
import { useRegister } from '../../api/authApi'

const initialValues = { username: '', email: '', password: '', rePassword: '' }

export default function Register() {
    const navigate = useNavigate()
    const { register } = useRegister()
    const registerHandler = async (userData) => {
        const data = Object.fromEntries(userData)

        const { password, rePassword } = data

        if (password !== rePassword) {
            return (`Repassword missmatch`)
        }

        await register(data)


        navigate('/login')
    }

    return (
        <div className="register-form">
            <h2>Регистрация</h2>
            <form action={registerHandler}>
                <label htmlFor="username">Потребителско име</label>
                <input type="text" id="username" name="username" placeholder="username" defaultValue={initialValues.username} />
                <label htmlFor="email">Имейл</label>
                <input type="email" id="email" name="email" placeholder="email" />

                <label htmlFor="password">Парола</label>
                <input type="password" id="password" name="password"
                    placeholder="******" />
                <label htmlFor="rePassword">Потвърди паролата</label>
                <input type="password" id="rePassword" name="rePassword" placeholder="******" />

                <button type="submit">Регистрация</button>
            </form>
        </div>
    )
}