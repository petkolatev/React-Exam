import { useParams } from 'react-router'
import './bookInfo.css'
import { useBook } from '../../api/bookApi'

export default function BookInfo() {
    const { bookId } = useParams()
    const { book } = useBook(bookId)

    return (
        <div className="book-container">
            <img src={book.image} alt={book.title} />
            <h2>{book.title}</h2>
            <p><strong>Автор:</strong>{book.author}</p>
            <p><strong>Жанр:</strong> {book.genre}</p>
            <p><strong>Година:</strong>{book.year}</p>
            <p>{book.description}.</p>
            {/* <button >Edin</button>
            <button >Delete</button>
            <button >Like</button>
            <button >Buy</button>
            <button >Rent</button> */}
        </div>

    )
}