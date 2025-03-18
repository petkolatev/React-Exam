import './login.css'

export default function Login() {
    return (
        <div className="login-form">
            <h2>Логин</h2>

            <form >
                <label htmlFor="email">Имейл</label>
                <input type="email" id="email" name="email" />
                <label htmlFor="password">Парола</label>
                <input type="password" id="password" name="password" />
                <button>Вход</button>
            </form>
        </div>
    )
}