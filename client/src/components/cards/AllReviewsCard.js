import style from "./Card.module.css";

export default function ReviewCard({
  text,
  book,
  stars,
  removeReview,
  id,
  user,
}) {
  const colorClasses = ["danger", "danger", "warning", "success", "success"];
  return (
    <div className="card">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-start">
          <h6 className={style["title"]}>{user?.name.substring(0, 100)}</h6>
          <span
            className={`ms-auto mt-1 badge rounded-pill bg-${
              colorClasses[stars - 1]
            }`}
          >
            {stars} out of 5
          </span>
        </div>
        <p className="small text-muted mb-4">{text.substring(0, 250)}</p>
      </div>
    </div>
  );
}
