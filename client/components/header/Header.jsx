import {Link} from 'react-router'


const navigation = [
    { name: 'Начало', path: '/' },
    { name: 'Каталог с книги', path: '/catalog' },
    { name: 'Търсене', path: '#' },
    { name: 'Добави', path: '/create' },
    { name: 'Излез', path: '#' },
    { name: 'Профил', path: '#' },
    { name: 'Вход', path: '/login' },
    { name: 'Регистрация', path: '/register' },
]
export default function Header() {
 
    return (
        <>
            <div className="header">
                <h1>БАЗАР ЗА КНИГИ</h1>
                <p>Купуване и наемане на книги!</p>
            </div>
            <div className="topnav">
                <nav>
                    {navigation.map((item) => (
                        <Link key={item.name} to={item.path} > {item.name}</Link>
                    ))}
                </nav>
            </div >
        </>
    )
}