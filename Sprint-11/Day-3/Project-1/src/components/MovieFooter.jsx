import PropTypes from "prop-types";

const MovieFooter = (props) => {
  const { totalMovies } = props;

  return (
    <div className="bg-white text-xs p-4 shadow rounded-md dark:bg-gray-800 dark:text-gray-400">
      <b>{totalMovies}</b> film gösteriliyor
    </div>
  );
};

export default MovieFooter;

MovieFooter.propTypes = {
  totalMovies: PropTypes.number.isRequired,
};
