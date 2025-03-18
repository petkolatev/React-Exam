import { useEffect, useState } from "react"


import '../catalog/catalog.css'
import BookItem from "../bookItem/BookItem"

export default function Catalog() {
    const [books, setBooks] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/api/book')
            .then(res => res.json())
            .then(result => {
                setBooks(result);
            })
    },[])

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
