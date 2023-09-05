import React, { Component } from "react";

const Newsitem = (props) => {

    let { title, description, imageUrl, newsUrl, author, date, source } =
      props;
    // in class based components, this.props is used to get the props
    return (
      <div className="my-3">
        <div className="card">
          <span
            class="position-absolute top-0 translate-middle badge rounded-pill bg-danger"
            style={{
              right: "0",
              zIndex: 1,
            }}
          >
            {source}
          </span>
          <img
            src={
              !imageUrl
                ? "https://www.pngitem.com/pimgs/m/413-4139885_marvel-fanon-daily-bugle-logo-png-transparent-png.png"
                : imageUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            {/* if we have used function based components then we needed to pass props.title insteadof just title */}
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small className="text-muted">
                By {!author ? "Anonymous" : author} on {date}
              </small>
            </p>

            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }

export default Newsitem;
