import BookSingelCard from "./BookSingelCard";
import PropTypes from "prop-types";

const BookCard = ({ books }) => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {books.map((item) => (
        <BookSingelCard key={item._id} book={item} />
      ))}
    </div>
  );
};

BookCard.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default BookCard;
