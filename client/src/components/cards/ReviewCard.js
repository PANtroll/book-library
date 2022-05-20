import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import style from "./Card.module.css";

export default function ReviewCard({ text, book, stars, removeReview, id, user }) {
  const { auth } = useContext(AuthContext);
  const colorClasses = ["danger", "danger", "warning", "success", "success"];
  return (
    <div className="card">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-start">
          <h6 className={style["title"]}>{book?.title.substring(0, 100)}</h6>
          <span
            className={`ms-auto mt-1 badge rounded-pill bg-${
              colorClasses[stars - 1]
            }`}
          >
            {stars} out of 5
          </span>
          {auth.user.id === user.id && (
            <i
              onClick={() => removeReview(id)}
              className="btn p-0 bi bi-trash ms-3"
            ></i>
          )}
        </div>
        <p className="small text-muted mb-4">{text.substring(0, 250)}</p>
        <Link to={"/books/" + book?.bid} className={style["button"]}>View more</Link>
      </div>
    </div>
  );
}
