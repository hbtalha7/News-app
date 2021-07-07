import React from "react";
import { Link } from "react-router-dom";

export default function News(props) {
  const { key, products, HoriVerti } = props;

  console.log(products.id);
  const title = products.title.substring(0, HoriVerti ? 80 : 20) + "...";
  var summary = "...";
  if (products.summary != null) {
    summary = products.summary.substring(0, HoriVerti ? 120 : 80) + "...";
  } else {
    summary = "...";
  }
  const onRemove = (key) => {};
  return (
    <>
      <div
        className="container"
        id={HoriVerti ? "NewsContainer" : "NewsContainerVeri"}
      >
        <div key={key} className="card" id="left">
          {HoriVerti ? "" : <i className="fa fa-close" id="iveri"></i>}
          <div className="card-body">
            <Link to={`/newcontent/${products.id}`}>
              <b>{title}</b>
            </Link>
            <div className="price">
              <p>
                {" "}
                {summary}
                <br />
                {products.published}
              </p>
            </div>
          </div>
        </div>
      </div>
      {HoriVerti ? (
        <button id="close" onClick={() => onRemove(products.id)}>
          <i className="fa fa-close"></i>
        </button>
      ) : (
        ""
      )}
    </>
  );
}
