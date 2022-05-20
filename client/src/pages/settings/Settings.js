import { useContext } from "react";
import { Link, Route, Switch, useLocation } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import ProfileData from "./tabs/ProfileData";
import UserBooks from "./tabs/UserBooks";
import UserReviews from "./tabs/UserReviews";
import style from "./Settings.module.css";

export default function Settings() {
  const { auth } = useContext(AuthContext);
  const location = useLocation();

  const links = [
    { to: `/users/${auth.user.id}`, text: "Change profile" },
    { to: `/users/${auth.user.id}/books`, text: "Books" },
    { to: `/users/${auth.user.id}/reviews`, text: "Reviews" },
  ];

  return (
    <div className={style["background"]}>
      <div className="container m-0 p-0 pt-5 ">
        <div className="row mt-5">
          <div className="col-12 col-md-3 ">
          <div class="row bg-light ">
            <div className="list-group">
              {links.map((link) => (
                <Link
                  key={link.text}
                  to={link.to}
                  className={`list-group-item list-group-item-action my-3 ${style["tabs"]} ${
                    location.pathname === link.to ? "active" : ""
                  }`}
                >
                  {link.text}
                </Link>
              ))}
            </div>
            </div>
          </div>
          <div className="col-12 col-md-7 offset-md-1  ">
            <Switch>
              <Route path="/users/:id/books" component={UserBooks} />
              <Route path="/users/:id/reviews" component={UserReviews} />
              <Route path="" component={ProfileData} />
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
}
