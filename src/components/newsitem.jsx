import React from "react";

const Newsitem =(props)=> {
    let { title, description, imageURL, newsUrl, publishedAt } = props;
    return (
      <div className="my-3">
        <div className="card">
          <img
            src={
              !imageURL
                ? "https://media.gettyimages.com/id/1046898688/photo/us-president-donald-trump-sticks-out-his-tongue-as-he-addresses-a-make-america-great-again.jpg?s=612x612&w=0&k=20&c=MiDRc6F3neshp9sw9ikohN8R-R_F2nUjMTlUATUJ4Uk="
                : imageURL
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            
            <p className="card-text">{description}...</p>
            

            <p>
              <small className="text-body-secondary">
                {new Date(publishedAt).toGMTString()}
              </small>
            </p>
            <a
              href={newsUrl}
              rel="noreferrer"
              target="_blank"
              className="btn-sm btn btn-outline-info"
            >
              Read More
            </a>
          </div>
          <p className="card-text"></p>
        </div>
      </div>
    );
  
}

export default Newsitem;
