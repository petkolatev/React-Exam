import { useBooks } from "../../api/bookApi"
import BookItem from "../bookItem/BookItem"
import './home.css'

export default function Home() {
  const { books } = useBooks()
  books.sort((a, b) => b.likes.length - a.likes.length)

  const mostPopular = books.slice(0,3)

  return (
    <>
    <div className="row">
      <div className="column side">
        <h2>Бързо и лесно пазаруване</h2>
        <p>Изберете, поръчайте и се насладете на безпроблемно пазаруване с бърза доставка до вашия дом.</p>
        <p>Не пропускайте нашите ежемесечни промоции и отстъпки, които ще направят четенето още по-достъпно!</p>
      </div>
      <div className="column middle">
        <h2>Добре дошли в нашия книжарски свят!</h2>
        <p>Намерете своята следваща любима книга сред стотици заглавия на нашия сайт. Тук ще откриете богат избор от литература за всеки вкус - от бестселъри и класика до нови издания и специализирани издания. Независимо дали търсите вдъхновение, приключение или знания, ние имаме идеалната книга за вас.</p>
        <p>Бързо и лесно пазаруване
          Изберете, поръчайте и се насладете на безпроблемно пазаруване с бърза доставка до вашия дом.</p>
      </div>
      <div className="column side">
        <h2>Започнете да четете още днес!</h2>
        <p>Прегледайте нашите категории и открийте нови светове чрез страниците на книгите.</p>
      </div>
    </div>
    <h2>Топ 3 най-харесвани</h2>
    <div className="catalog section">

                {mostPopular.map((book) =>
                    <BookItem key={book._id} book={book} />
                )}
            </div>
    </>

    
  )
}