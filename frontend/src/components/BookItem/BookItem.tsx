import React from 'react';
import type { Book } from '../../types/book.ts';

interface Props {
  book: Book;
}

export const BookItem: React.FC<Props> = ({ book }) => {

  const bookData = book?.attributes;
  return (
    <li className="BookList__item">
      <span className="BookList__item-title">{`${bookData?.title} (${bookData?.author})`}</span>

      <a className="BookList__item-link" href={`/book/${book?.id}`}>
        Open description
      </a>
    </li>
  );
};
