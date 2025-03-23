import { useState } from 'react'
import './search.css'
import BookItem from '../bookItem/BookItem'
import { useSearchBooks } from '../../api/bookApi'



export default function Search() {
    const [books, setBooks] = useState([])
    const { search } = useSearchBooks()

    const searchHandler = async (searchData) => {
        let searchText = Object.fromEntries(searchData)
        searchText = Object.values(searchText)

        const result = await search(searchText)
        setBooks(result)
    }

    return (
        <div className="container">
            <form action={searchHandler}>
                <div className="search-bar">
                    <input type="text" id="search-input" name="searchText"
                        placeholder="Търсене на продукти..." />
                </div>
                <button >Търсене</button>


                {books.length > 0 &&

                    <div className="catalog section">

                        {books.map((book) =>
                            <BookItem key={book._id} book={book} />
                        )}
                    </div>
                }
                {books.length === 0 &&
                    <p>Няма намерени резултати.</p>
                }


            </form>
        </div>
    )
}