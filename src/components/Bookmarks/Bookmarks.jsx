import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks, readingTime }) => {
  return (
    <div className="md:w-1/3">
      <div className="text-center bg-purple-500 rounded-xl m-4 p-4 text-white">
        <h3>Reading Time: {readingTime}</h3>
      </div>
      <div className=" bg-gray-100 p-1 ml-4 mt-4 rounded-xl">
        <h2 className="m-4 text-3xl text-center">
          Bookmarked Blogs: {bookmarks.length}
        </h2>
        {bookmarks.map((bookmark) => (
          <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>
        ))}
      </div>
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.array.isRequired,
  readingTime: PropTypes.number.isRequired,
};
export default Bookmarks;
