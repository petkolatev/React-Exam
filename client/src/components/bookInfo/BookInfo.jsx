import { useParams, useNavigate, Link } from 'react-router'
import './bookInfo.css'
import { useBook, useDeleteBook } from '../../api/bookApi'
import { useContext } from 'react'
import { UserContex } from '../contexts/UserContex'

export default function BookInfo() {
    const navigate = useNavigate()
    const authData = useContext(UserContex)
    const { bookId } = useParams()
    const { book } = useBook(bookId)
    const { deleteBook } = useDeleteBook()


    const deleteBookHandler = async () => {
        const hasConfirm = confirm('Are you sure?')

        if (!hasConfirm) {
            return
        }
        await deleteBook(bookId)
        navigate('/catalog')
    }

    const isOwner = book.owner === authData.user._id
    console.log(isOwner);

    return (
        <div className="book-container">
            <img src={book.image} alt={book.title} />
            <h2>{book.title}</h2>
            <p><strong>Автор:</strong>{book.author}</p>
            <p><strong>Жанр:</strong> {book.genre}</p>
            <p><strong>Година:</strong>{book.year}</p>
            <p>{book.description}.</p>
            {isOwner && (
                <>
                    <button onClick={deleteBookHandler}>Delete</button>
                    <button ><Link to={`/catalog/${bookId}/edit`} >Edit</Link></button>
                </>

            )}
              {!isOwner && (
                <>
                  <button >Like</button>
                  <button >Buy</button>
                </>
            )}
        </div>

    )
}