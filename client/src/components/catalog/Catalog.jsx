
import '../catalog/catalog.css'
import BookItem from "../bookItem/BookItem"
import { useBooks } from "../../api/bookApi"

export default function Catalog() {
    const { books } = useBooks()

    const style1 = {
        marginLeft: '10px'
    }
    return (
        <>
            <h2>Каталог на Продукти</h2>

            <div className="catalog section">

                {books.map((book) =>
                    <BookItem key={book._id} book={book} />
                )}
            </div>
        </>


    )
}
