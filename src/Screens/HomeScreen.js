import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import News from "../components/News";
import newsdata from "../data";

export default function HomeScreen() {
  const products = newsdata.data;
  const Prolength = products.length;
  const [page, setpage] = useState(0);
  const [HoriVerti, setHoriVerti] = useState(true);

  const getContent = (products) => {
    let content = [];
    let range = HoriVerti ? 4 + page * 4 : 6 + page * 6;
    let initialpage = HoriVerti ? page * 4 : page * 6;
    for (let i = initialpage; i < range; i++) {
      const item = products[i];
      content.push(
        <News key={item.id} products={item} HoriVerti={HoriVerti}></News>
      );
    }
    return content;
  };

  const countRef = useRef(0);
  useEffect(() => countRef.current++);

  return (
    <div>
      <div className="container" id="Home">
        <div className="row">
          <div className="col-3">
            <div className="container">
              <div className="row" id="Menulist">
                <div className="col-sm-1" id="DP"></div>
                <div className="col-sm-4">Hi!Reader</div>
              </div>
              <div className="row" id="Menulist">
                <b>View Toggle</b>
                <p>
                  {" "}
                  Horizontal &nbsp;&nbsp;&nbsp;
                  <input
                    type="radio"
                    id="radio-one"
                    name="switch-one"
                    value="yes"
                    checked
                    onClick={() => setHoriVerti(true)}
                  />
                </p>
                <p>
                  Vertical &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <input
                    type="radio"
                    id="radio-two"
                    name="switch-one"
                    value="no"
                    onClick={() => {setHoriVerti(false)
                    if (page> Prolength/6-2){setpage(1)}
                  }}
                  />
                </p>
              </div>
              <div className="row" id="Menulist">
                <b>Have a feedback</b>
                <div className="row" id="Listening">
                  <Link to="/feedback">
                    <button>We're Listening</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-8" id="newscontent">
            {getContent(products)}
            <br />
            <button
              onClick={() => (page >= 1 ? setpage(page - 1) : setpage(1))}
            >
              Previous
            </button>{page+1}
            <button
              onClick={() =>
                page <  (HoriVerti?Prolength / 4-1:Prolength / 6-4) ? setpage(page + 1) : setpage(20)
              }
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
