import { useState } from "react";
import { Link } from "react-router-dom";
import style from "./Books.module.css";

const searchByLabels = ['author', 'title'];

export default function BookList() {
  const [search, setSearch] = useState("");
  const [searchBy, setSearchBy] = useState(0);
  const [books, setBooks] = useState([]);

  function handleSubmit() {
    fetch("https://www.googleapis.com/books/v1/volumes?q=+in" + searchByLabels[searchBy] + ":" + search + "&printType=books")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res.items) {
          setBooks(res.items);
        }
      });
  }

  return (
    <div className={style["background"]}>
    <div className="container pt-5">
      <div className="row">
      <div className="form-check form-switch text-white">
  <input onChange={() => setSearchBy(p => p ^ 1)} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked={!!searchBy} />
  <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Search by {searchByLabels[searchBy]}</label>
</div>
      </div>
      <div className="row">
        <input
          className="form-control mt-4 w-75"
          placeholder="Type to search"
          type="text"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className={style["button"]} onClick={handleSubmit}>Search</button>
      </div>
      <div className="row d-flex align-items-stretch">
        {books.length === 0 && (
          <h2 className={"mt-5 w-50 " + style['text']}>Type keywords to search the book you need</h2>
          
        )}
        {books.length > 0 &&
          books.map((book, i) => (
            <div key={i} className="col col-sm-6 col-lg-3 mt-4 h-100">
              <div className="card h-100">
                <img
                  src={book.volumeInfo?.imageLinks?.thumbnail}
                  className="card-img-top"
                  alt=""
                />
                <div className="card-body">
                  <h5 className="card-title">{book.volumeInfo.title}</h5>
                  <p className="card-text text-muted small">
                    {book.volumeInfo.description?.substring(0, 150)}
                  </p>
                  <div>
                    {book.volumeInfo.authors?.map((author, j) => (
                      <span key={j} className="badge bg-primary me-2">
                        {author}
                      </span>
                    ))}
                  </div>
                  <Link to={"/books/" + book.id}>View more</Link>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
    </div>
  );
}
