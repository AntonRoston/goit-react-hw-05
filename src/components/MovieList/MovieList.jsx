import { Link, useLocation } from "react-router-dom";
import css from "./MovieList.module.css";
const img = "https://image.tmdb.org/t/p/w500";

const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <div className={css.boxList}>
      <ul className={css.listMovies}>
        {movies.map((item) => (
          <li key={item.id}>
            <Link
              to={`/movies/${item.id}`}
              className={css.itemMovies}
              state={location}
            >
              <img src={img + item.backdrop_path} alt="" />
              <h2 className={css.titleMovie}>
                {item.original_title} {`(${item.release_date.slice(0, 4)})`}
              </h2>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
