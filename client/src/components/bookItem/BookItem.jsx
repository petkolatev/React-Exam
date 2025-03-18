import { Link } from 'react-router'
import '../catalog/catalog.css'

export default function BookItem({ book }) {
    const style1 = {
        marginBottom: '10px'
    }
    return (
    
            <div className="product">
                <Link key={book._id} to={`/catalog/${book._id}`} className="normal">
                    <h3>{book.title}</h3>
                    <img src={book.image} height="400" style={style1} alt={book.title} />
                    <p>{book.description}</p>
                </Link >
            </div>
        

    )
}