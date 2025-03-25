import { Link } from 'react-router'
import '../catalog/catalog.css'

export default function BookItem({ book }) {
  
    return (

        <div className="product">
            <Link key={book._id} to={`/catalog/${book._id}`} className="normal">
                <h3>{book.title}</h3>
                <img src={book.image} alt={book.title} />
                {/* <p>{book.description}</p> */}
            </Link >
        </div>


    )
}