import { useParams, useNavigate, Link } from 'react-router'
import './bookInfo.css'
import { useBook, useDeleteBook, useLikeBook } from '../../api/bookApi'
import { useContext, } from 'react'
import { UserContex } from '../contexts/UserContex'
import UseAuth from '../../hooks/useAuth'

export default function BookInfo() {
    const navigate = useNavigate()
    const { isAuthenticated } = UseAuth()
    const authData = useContext(UserContex)
    const { bookId } = useParams()
    const { book, likes } = useBook(bookId)
    const { deleteBook } = useDeleteBook()
    const { like } = useLikeBook()

    const deleteBookHandler = () => {
        const hasConfirm = confirm('Are you sure?')

        if (!hasConfirm) {
            return
        }
        deleteBook(bookId)
        navigate('/catalog')
    }
    let isLiked = Boolean
    let isOwner = Boolean
    let likeHandler =''

    if (isAuthenticated) {


        if (likes) {
            isLiked = likes.includes(authData.user._id)
        }


         likeHandler = async () => {
            await like(bookId, book, authData.user?._id)
        }

        isOwner = book.owner === authData.user._id
    }

    return (
        <div className="book-container">
            <img src={book.image} alt={book.title} />
            <h2>{book.title}</h2>
            <p><strong>Автор:</strong>{book.author}</p>
            <p><strong>Жанр:</strong> {book.genre}</p>
            <p><strong>Година:</strong>{book.year}</p>
            <p>{book.description}.</p>

            {isAuthenticated && isOwner && (
                <>
                    <button onClick={deleteBookHandler}>Delete</button>
                    <button className='info-btn'><Link to={`/catalog/${bookId}/edit`} >Edit</Link></button>
                </>

            )}
            {isAuthenticated && !isOwner && (
                <>
                    {!isLiked &&
                        <button className='info-btn' onClick={likeHandler}>Like</button>
                    }
                    <button className='info-btn'>Buy</button>
                </>
            )}

        </div>

    )
}