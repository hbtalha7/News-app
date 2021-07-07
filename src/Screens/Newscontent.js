import React from "react";
import { Link } from "react-router-dom";
import newsdata from "../data";

export default function Newscontent(props) {
  const product = newsdata.data.find(
    (x) => x.id === Number(props.match.params.id)
  );
  return (
    <div id="Newspage">
      <a href={product.link}>
        <h3 id="htitle">{product.title}</h3>
      </a>
      {product.summary}
      <br />
      {product.published}
      <Link to="/">Back</Link>
    </div>
  );
}
