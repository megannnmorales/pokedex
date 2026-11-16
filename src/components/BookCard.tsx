import type { Book } from "../types";
import BookText from "./BookText";
import StatusBadge from "./StatusBadge";
import ProgressBar from "./ProgressBar/ProgressBar";

interface BookCardProps {
  book: Book;
  onToggleRead: (id: number) => void;
  onDelete: (id: number) => void;
}

export default function BookCard({ book, onToggleRead, onDelete }: Readonly<BookCardProps>) {
  const { id, title, author, genre, is_read: isRead, pages, coverUrl } = book;
  return (
    <li className={isRead ? "book-card is-read" : "book-card"}>
      {/* The title beside the cover already names the book, so the cover is decorative: empty alt. */}
      {coverUrl && <img src={coverUrl} alt="" width={60} height={90} />}
      <div className="book-info">
        <BookText title={title} author={author} genre={genre} pages={pages} />
        {isRead && <StatusBadge status="read" />}
      </div>
      <div className="book-actions">
        <button
          type="button"
          className="btn"
          aria-label={`${isRead ? "Mark unread" : "Mark read"}: ${title}`}
          onClick={() => onToggleRead(id)}
        >
          {isRead ? "Mark unread" : "Mark read"}
        </button>
        <button type="button" className="btn" aria-label={`Delete: ${title}`} onClick={() => onDelete(id)}>
          Delete
        </button>
        <ProgressBar/>
      </div>
    </li>
  );
}
