import React from "react";
import { BookServiceConsumer } from "../book-service-context";

const withBookStoreService = () => Wrapped => {
  return props => {
    return (
      <BookServiceConsumer>
        {bookStoreService => {
          return <Wrapped {...props} bookStoreService={bookStoreService} />;
        }}
      </BookServiceConsumer>
    );
  };
};

export default withBookStoreService;
