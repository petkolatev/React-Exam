import { useNavigate, useParams } from "react-router"
import { useBook, useEditBook } from "../../api/bookApi"

export default function EditBook() {
    const navigate = useNavigate()
    const { bookId } = useParams()
    // const authData = useContext(UserContex)
    const { book } = useBook(bookId)
    const { edit } = useEditBook()
    // const owner = authData._id

    const editBookHandler =async (formData) => {
        const bookData = Object.fromEntries(formData)

        await edit(bookId,bookData)

        navigate(`/catalog/${bookId}`)
    }

    return (
        <div className="form-container" >
            <h2>Редактирай избраната книга</h2>
            <form action={editBookHandler}>
                <label htmlFor="title">Заглавие</label> <input type="text" id="title" name="title" defaultValue={book.title} />
                <label htmlFor="author">Автор</label> <input type="text" id="author" name="author" defaultValue={book.author} />
                <label htmlFor="genre">Жанр</label> <input type="text" id="genre" name="genre" defaultValue={book.genre} />
                <label htmlFor="year">Година</label> <input type="number" id="year" name="year" defaultValue={book.year} />
                <label htmlFor="description">Описание</label>
                <textarea id="description" name="description" defaultValue={book.description} rows="4"></textarea>
                <label htmlFor="image">URL на изображението</label> <input type="text" id="image"
                    name="image" defaultValue={book.image} />
                <button >Редактирай книгата</button>
            </form>
        </div>
    )
}