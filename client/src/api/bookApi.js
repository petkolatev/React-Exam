import { useEffect, useState } from "react"

export const useBooks = () => {
    const [books, setBooks] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/api/book')
            .then(res => res.json())
            .then(setBooks)
    }, [])

    return { books };
}

export const useBook = (bookId)=>{
    const [book, setBook] = useState({})

    useEffect(() => {
        fetch(`http://localhost:3000/api/book/${bookId}`)
            .then(res => res.json())
            .then(setBook)
    }, [bookId])

    return {book}
}