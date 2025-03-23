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

export const useSearchBooks = () => {

    const search = async (searchData) => {
        return await fetch(`http://localhost:3000/api/book?title=${searchData}`)
            .then(res => res.json())

    }



    return { search };
}

export const useBook = (bookId) => {
    const [book, setBook] = useState({})
    let likes = book.likes
    useEffect(() => {
        fetch(`http://localhost:3000/api/book/${bookId}`)
            .then(res => res.json())
            .then(setBook)
    }, [bookId, likes])



    return { book, likes }
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

export const useLikeBook = () => {
    const like = (bookId, bookData, userId) => {
        return fetch(`http://localhost:3000/api/book/${bookId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ likes: [...bookData.likes, userId] })
        })
    }

    return { like }
}

export const useDeleteBook = () => {
    const deleteBook = (bookId) => {
        fetch(`http://localhost:3000/api/book/${bookId}`, {
            method: 'DELETE'
        })
    }
    return { deleteBook }
}