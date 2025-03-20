import { useContext } from 'react'
import { UserContex } from '../contexts/UserContex'
import './createBook.css'

export default function CreateBook() {
    const authData = useContext(UserContex)
    const owner = authData._id

    const createBookHandler = async (bookData) => {
        const { title, author, genre, year, description, image } = Object.fromEntries(bookData)
        const payload = { title, author, genre, year, description, image, owner }
        const response = await fetch('http://localhost:3000/api/book', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload)
        })
        console.log(payload);
    }
    return (
        <div className="form-container" >
            <h2>Добавяне на нова книга</h2>
            <form action={createBookHandler}>
                <label htmlFor="title">Заглавие</label> <input type="text" id="title" name="title" />
                <label htmlFor="author">Автор</label> <input type="text" id="author" name="author" />
                <label htmlFor="genre">Жанр</label> <input type="text" id="genre" name="genre" />
                <label htmlFor="year">Година</label> <input type="number" id="year" name="year" />
                <label htmlFor="description">Описание</label>
                <textarea id="description" name="description" rows="4"></textarea>
                <label htmlFor="image">URL на изображението</label> <input type="text" id="image"
                    name="image" />
                <button >Добави книга</button>
            </form>
        </div>
    )
}
