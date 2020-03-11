import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "../../utils";

import "./book-list.css";
import { withBookStoreService } from "../hoc";
import BookListItem from "../book-list-item";
import { booksLoaded } from "../../actions";
class BookList extends Component {
  componentDidMount() {
    // 1. recive data
    const { bookStoreService } = this.props;
    const data = bookStoreService.getBooks();

    // 2.dispatch action to store
    this.props.booksLoaded(data);
  }
  render() {
    const { books } = this.props;

    return (
      <ul className="book-list">
        {books.map(({ id, ...item }) => {
          return (
            <li key={id}>
              <BookListItem book={item} />
            </li>
          );
        })}
      </ul>
    );
  }
}

const mapStateToProps = ({ books }) => {
  return { books };
};

const mapDispatchToProps = { booksLoaded };

export default compose(
  withBookStoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookList);
