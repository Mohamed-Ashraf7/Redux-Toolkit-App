import React, { Fragment, useEffect } from "react";
import BookInfo from "./BookInfo";
import BooksList from "./BooksList";
import "./book.css";
import { useDispatch, useSelector } from "react-redux";
import { getBooks, deleteBook, bookinfo } from "../../store/bookSlice";
// import { useState } from "react";
const PostContainer = () => {
  const { loading, books, error, info } = useSelector((state) => state.Books);
  const { login } = useSelector((state) => state.Login);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  // another solution to get data info without creating slice
  // const [infoData, setInfoData] = useState(null);
  // const getinfo = (item) => {
  //   setInfoData((prev) => {
  //     return { ...prev, item };
  //   });
  // };

  return (
    <Fragment>
      {error && (
        <div
          className="alert alert-danger mt-5 p-3 text-center mb-0"
          role="alert"
        >
          {error}
        </div>
      )}
      <hr className="my-5" />
      <div className="row">
        <div className="col-12 col-md-6">
          <BooksList
            isLoading={loading}
            data={books}
            logged={login}
            deleteBook={deleteBook}
            bookInfo={bookinfo}
          />
        </div>
        <div className="col-12 col-md-6 side-line mt-md-2 mt-5">
          <BookInfo Info={info} />
        </div>
      </div>{" "}
    </Fragment>
  );
};

export default PostContainer;
