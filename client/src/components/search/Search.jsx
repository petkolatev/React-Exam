import './search.css'



export default function Search() {
    return (
        <div className="container">
            <form >
                <div className="search-bar">
                    <input type="text" id="search-input" name="searchText"
                        placeholder="Търсене на продукти..." />
                </div>
                <button >Търсене</button>


                {/* <p>Няма намерени резултати.</p> */}


                {/* <div className="catalog section">
                    <div className="product">
                        <img src={''} alt={''} />
                        <a className="normal">
                            <h3>{''}</h3>
                        </a>
                        <p>{''}</p>
                    </div>
                </div> */}
            </form>
        </div>
    )
}