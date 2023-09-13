import React from 'react';
import type { Book } from '../../types/book.ts';

interface Props {
  book: Book;
}

export const BookItem: React.FC<Props> = ({ book }) => {
  const {
    attributes: { title, author },
  } = book;
  return (
    <li className="BookList__item">
      <span className="BookList__item-title">{`${title} (${author})`}</span>

      <a className="BookList__item-link" href={`/book/${book.id}`}>
        Open description
      </a>
    </li>
  );
};
