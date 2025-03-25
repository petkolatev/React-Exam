
import { useNavigate } from 'react-router'
import './register.css'
import { useRegister } from '../../api/authApi'
import { useState } from 'react'



export default function Register() {
    const [passErr, setPassErr] = useState('')
    const [emailErr, setEmailErr] = useState('')
    const [usernameErr, setUsernameErr] = useState('')
    const [input, setInput] = useState({})
    const navigate = useNavigate()
    const { register } = useRegister()

    const registerHandler = async (userData) => {
        const data = Object.fromEntries(userData)
        setInput(data)
        const { username, email, password, rePassword } = data
        const regex = new RegExp('^[a-zA-Z0-9]{3,}@[a-zA-Z]+\.(bg|com)$')

        if (username.length < 3) {
            setUsernameErr('Minimum length is 3 characters')
            setTimeout(() => {
                setUsernameErr('')
            }, 5000)
            return
        }

        if (!regex.test(email)) {
            setEmailErr('Invalid email format!')
            setTimeout(() => {
                setEmailErr('')
            }, 5000)
            return
        }

        if (password !== rePassword) {
            setPassErr('Repassword missmatch!')
            setTimeout(() => {
                setPassErr('')
            }, 5000)
            return
        }


        await register(data)


        navigate('/login')
    }

    return (
        <div className="register-form">
            <h2>Регистрация</h2>
            <form action={registerHandler}>
                <label htmlFor="username">Потребителско име</label>
                <input type="text" id="username" name="username" placeholder="username" defaultValue={input.username} required />
                {usernameErr &&
                    <p className='err'>Minimum length is 3 characters!</p>
                }
                <label htmlFor="email">Имейл</label>
                <input type="text" id="email" name="email" placeholder="JohnDoe@abv.bg" defaultValue={input.email} required />
                {emailErr &&
                    <p className='err'>Invalid email format!</p>
                }
                <label htmlFor="password">Парола</label>
                <input type="password" id="password" name="password"
                    placeholder="******" required />

                <label htmlFor="rePassword">Потвърди паролата</label>
                <input type="password" id="rePassword" name="rePassword" placeholder="******" required />
                {passErr &&
                    <p className='err'>Repassword missmatch</p>
                }
                <button >Регистрация</button>
            </form>
        </div>
    )
}