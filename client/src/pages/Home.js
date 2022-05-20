import style from "./Home.module.css";
import img from './arrow-top.png';


export default function BookList() {
  return (
    <>
      <div className={style["background"]} id="top">
        <div className={style["align"]}>
          <p className={style["textTitle"]}>All books in one place</p>
          <p className={style["description"]}>
            Choose the best from our books collection, save them to your own
            list and write honest reviews
          </p>
          <button className={style["button"]} href="#section2">
            learn more
          </button>
        </div>
      </div>
      <div className={style["img"]}></div>

      <div className={style["body"]}>
        <div className="container-fluid pb-5">
          <div className="row pb-5" id="section2">
            <div className="col-12 col-md-7 offset-md-5 position-relative">
              <p className={style["textSubTitle"]}>How it works</p>

              <div className={style["columns"]}>
                <div className={style["icon-col"]}>
                  <span className={style["circle-num"]}>1</span>
                  <span className={style["border-line"]}></span>
                  <span className={style["circle-num"]}>2</span>
                  <span className={style["border-line"]}></span>
                  <span className={style["circle-num"]}>3</span>
                </div>
                <div className={style["text-col"]}>
                  <div className={style["icon-block"]}>
                    <p className={style["span-title"]}>Sign up</p>
                    <p className={style["span-desc"]}>
                      Sign up and fill your profile with personal information
                    </p>
                  </div>
                  <div className={style["icon-block"]}>
                    <p className={style["span-title"]}>Choose books</p>
                    <p className={style["span-desc"]}>
                      Choose books you like and save them to your wishlist
                    </p>
                  </div>
                  <div className={style["icon-block"]}>
                    <p className={style["span-title"]}>Leave the review</p>
                    <p className={style["span-desc"]}>
                      Leave your review to the book you’ve already read
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-sm">
        <p className={style["quote"]}>
        "Some of these things are true and some of them lies. But they are all good stories"
        </p>
        <p className={style["quoteAuthor"]}>
         - Hilary Mantel, Wolf Hall
        </p>
        </div>
        <div className="row">
          <div className="col-md-5 offset-md-2">
            <p className={style["endTextTitle"]}>Contact us</p>
            <p className={style["contactText"]}>
              Any questions remained? <br />
              We will be happy to help!
            </p>
          </div>
          <div className="col-md-5">
            <button className={style["buttonContact"]}>Email </button>
            <button className={style["buttonContact"]}>Phone </button>
          </div>
        </div>

        <footer className={style["footer"]}>
          <a href="#top" className="d-block ps-3 pt-3">
            <img className="d-block" src={img} width="50" height="50" alt="GoTop" />
          </a>
        </footer>
      </div>
    </>
  );
}
