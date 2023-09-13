import React from 'react';
import './BookList.scss';
import type { Book } from '../../types/book.ts';
import { BookItem } from '../BookItem';

interface Props {
  books: Book[];
}

export const BookList: React.FC<Props> = ({ books }) => {
  return (
    <section className="BookList">
      <ul className="BookList__list">
        {books.map((book) => (
          <BookItem book={book} key={book.id} />
        ))}
      </ul>
    </section>
  );
};
