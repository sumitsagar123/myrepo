import React from "react";
import Newsitem from "./newsitem";
import Spinner from "./spinner";
import PropTypes from "prop-types";
import { useState } from "react";
import { useEffect } from "react";

const News = (props) => {
  const [items, setitems] = useState([]);
  const [page, setpage] = useState(1);
  const [loading, setloading] = useState(false);

  const capitalizeFirstLetter = (str) => {
    // converting first letter to uppercase
    const capitalized = str.charAt(0).toUpperCase() + str.slice(1);
    return capitalized;
  };

  document.title = `${capitalizeFirstLetter(props.category)} - News App`;

  const updatenews = async () => {
    setloading(true);
    props.setProgress(0);
    // secocond api =0bb4cd14c08b4c43a4af859618d5d589
    // First api =c7fe3eb3338a45ee9ebc4879487e5459
    let data = await fetch(
      `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=0bb4cd14c08b4c43a4af859618d5d589&page=${page}&pagesize=3`
    );
    let parseddata = await data.json();
    setitems(parseddata.articles);
    setloading(false);
    props.setProgress(100);
  };

  useEffect(() => {
    updatenews();
  }, []);

  const handleprev = () => {
    setpage(page - 1);
    updatenews();
  };
  const handlenext = () => {
    setpage(page + 1);
    updatenews();
  };

  // const { items } = this.state;
  // console.log(items);
  return (
    <div>
      <div className="container my-3">
        <h1 className="text-center" style={{ margin: "35px 0px" }}>
          News - Top Headlines from {capitalizeFirstLetter(props.category)}
          {loading && <Spinner />}
        </h1>

        <div className="row">
          {items.map((el) => {
            return (
              <div className="col-md-4" key={el.url}>
                <Newsitem
                  title={el.title ? el.title.slice(0, 45) : ""}
                  description={
                    el.description ? el.description.slice(0, 88) : ""
                  }
                  imageURL={el.urlToImage}
                  newsUrl={el.url}
                  publishedAt={el.publishedAt}
                />
              </div>
            );
          })}
        </div>
        <div className="d-flex justify-content-between">
          <button
            type="button"
            onClick={handleprev}
            className="btn btn-secondary "
            disabled={page === 1}
          >
            <i> Prev</i>
          </button>
          <button
            type="button"
            onClick={handlenext}
            className="btn btn-secondary"
          >
            <i>Next</i>
          </button>
        </div>
      </div>
    </div>
  );
};

News.defaultProps = {
  country: "in",
  category: "general",
};
News.prototypes = {
  country: PropTypes.string,
  category: PropTypes.string,
};

export default News;
