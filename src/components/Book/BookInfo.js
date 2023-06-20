import React, { Fragment } from "react";

const BookInfo = ({ Info }) => {
  return (
    <Fragment>
      <h2 className="text-center">Book Details</h2>
      {Info ? (
        <div className="pt-4 ">
          <p className="fw-bold text-capitalize ">
            Author :<span className="h5 text-primary">{Info.author}</span>{" "}
          </p>
          <p className="fw-bold text-capitalize">
            Book Title :<span className="h5 text-primary">{Info.title}</span>{" "}
          </p>
          <p className="fw-bold text-capitalize">
            Description :{" "}
            <span className="h5 text-primary ">{Info.Description}</span>
          </p>
          <p className="fw-bold text-capitalize">
            Price : <span className="h5 text-primary">{Info.price} $ </span>
          </p>
        </div>
      ) : (
        <div className="alert alert-secondary" role="alert">
          There is No Book Selected Yet. Please Select One!
        </div>
      )}
    </Fragment>
  );
};

export default BookInfo;
