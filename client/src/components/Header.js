import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import style from "./Header.module.css"
import logo from './assets/images/logo.png';
import userPic from './assets/images/user.png';

export default function Header() {
  const { auth } = useContext(AuthContext);

  return (
    <nav className={"navbar fixed-top navbar-expand-sm navbar-dark "+style['bg-green']}>
      <div className="container-fluid">
      <img src={logo} className={style['image']}  alt="..." />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link to="/" className={style['link']}>
                home
              </Link>
            </li>
            <li className="nav-item">
              <Link className={style['link']} to="/books">
                books
              </Link>
            </li>
            
          </ul>
          <ul className="navbar-nav ms-auto">
            {auth.user ? (
              <>
                <li className="nav-item text-white d-flex align-items-center">
                  <p className={style['text']}> {auth.user.name}</p>
                </li>
                <li className="nav-item ms-3">
                  <Link 
                    to={"/users/" + auth.user.id}
                    className="btn btn-outline-light"
                  >
                     <img src={userPic} className={style['imageUser']}  alt="..."/>
                  </Link>
                </li>

              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link to="/login" className={style['link']}>
                    Log in
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/register" className={style['link']}>
                    Register
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
