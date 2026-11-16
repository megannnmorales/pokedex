import type { Book } from "../types";
import BookCard from "./BookCard";

interface BookListProps {
  books: Book[];
  heading?: string;
  onToggleRead: (id: number) => void;
  onDelete: (id: number) => void;
}

export default function BookList({ books, heading, onToggleRead, onDelete }: Readonly<BookListProps>) {
  return (
    <section>
      {heading && <h2>{heading}</h2>}
      <ul className="book-list">
        {books.length > 0 ? (
          books.map((book) => (
            <BookCard key={book.id} book={book} onToggleRead={onToggleRead} onDelete={onDelete} />
          ))
        ) : (
          <li className="empty-state">There are no books to show.</li>
        )}
      </ul>
    </section>
  );
}
