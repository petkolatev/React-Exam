import { useContext } from 'react'
import { Link } from 'react-router'
import { UserContex } from '../contexts/UserContex'


const navigation = [

    { name: 'Търсене', path: '#' },
    { name: 'Добави', path: '/create' },
    { name: 'Излез', path: '#' },
    { name: 'Профил', path: '#' },
    { name: 'Вход', path: '/login' },
    { name: 'Регистрация', path: '/register' },
]
export default function Header() {
    const { email } = useContext(UserContex)

    return (
        <>
            <div className="header">
                <h1>БАЗАР ЗА КНИГИ</h1>
                <p>Купуване и наемане на книги!</p>
            </div>
            <div className="topnav">
                <nav>
                    <Link key='Начало' to='/' >Начало</Link>
                    <Link key='Каталог с книги' to='/catalog' >Каталог с книги</Link>
                    <Link key='Търсене' to='#' >Търсене</Link>
                    {email
                        ? (

                            <>
                                <Link key='Добави' to='/create' >Добави</Link>
                                <Link key='Излез' to='#' >Излез</Link>
                                <Link key='Профил' to='#' >Профил</Link>
                                <Link  >{email}</Link>
                            </>
                        )
                        : (
                            <>
                                <Link key='Вход' to='/login' >Вход</Link>
                                <Link key='Регистрация' to='/register' >Регистрация</Link>

                            </>
                        )
                    }

                </nav>
            </div >
        </>
    )
}