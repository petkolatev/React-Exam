
import './register.css'

const initialValues = { username: '', email: '', password: '', rePassword: '' }

export default function Register() {

    const registerHandler = async (userData) => {

        const { password, rePassword } = Object.fromEntries(userData)
        const data = Object.fromEntries(userData)

        if (password !== rePassword) {
            initialValues.username = data.username
            console.log(initialValues.username);
            return (`Repassword missmatch`)
        }

        const response = await fetch('http://localhost:3000/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
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