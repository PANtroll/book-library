import { Link } from "react-router-dom";
import style from "./Card.module.css";

export default function BookCard({ title, description, bid }) {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h6 className={style["title"]}>{title}</h6>
        <p className="text-muted mb-4" dangerouslySetInnerHTML={{__html: (description || '-').substr(0, 300)}} />
        <Link to={"/books/" + bid} className={style["button"]}>View more</Link>
      </div>
    </div>
  );
}
