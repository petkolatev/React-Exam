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

export const useBook = (bookId) => {
    const [book, setBook] = useState({})

    useEffect(() => {
        fetch(`http://localhost:3000/api/book/${bookId}`)
            .then(res => res.json())
            .then(setBook)
    }, [bookId])

    return { book }
}

export const useCreateBook = () => {
    const create = (bookData) => {
        fetch('http://localhost:3000/api/book', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(bookData)
        })
    }
    return { create }
}

export const useEditBook = () => {
    const edit = (bookId, bookData) => {
        fetch(`http://localhost:3000/api/book/${bookId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(bookData)
        })
    }
    return { edit }
}

export const useDeleteBook = () => {
    const deleteBook = (bookId) => {
        fetch(`http://localhost:3000/api/book/${bookId}`, {
            method: 'DELETE'
        })
    }
    return { deleteBook }
}