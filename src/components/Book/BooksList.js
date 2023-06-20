import React from "react";
import { useDispatch } from "react-redux";
const BooksList = ({ isLoading, data, logged, deleteBook, bookInfo }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <h2 className="text-center"> Books List</h2>
      {isLoading ? (
        " loading .... "
      ) : (
        <ul className="list-group">
          {data.length > 0
            ? data.map((item) => (
                <li
                  key={item.id}
                  className="list-group-item d-flex  justify-content-between align-items-center"
                >
                  <div className="text-capitalize fw-bold">{item.title}</div>
                  <div className="" role="group">
                    <button
                      type="button"
                      className="btn btn-primary me-1 px-4"
                      onClick={() => dispatch(bookInfo(item))}
                    >
                      Read
                    </button>
                    <button
                      type="button"
                      className="btn btn-danger px-4"
                      disabled={!logged}
                      onClick={() => dispatch(deleteBook(item.id))}
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))
            : " There Is No Books Available ... ! "}
        </ul>
      )}
    </div>
  );
};

export default BooksList;
