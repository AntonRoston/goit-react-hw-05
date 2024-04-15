import { Link, useLocation } from "react-router-dom";
import css from "./MovieList.module.css";
const img = "https://image.tmdb.org/t/p/w400";

const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <div className={css.movieWrap}>
      <ul className={css.movieList}>
        {movies.map(({id, poster_path}) => (
          <li key={id}>
            <Link
              to={`/movies/${id}`}
              className={css.itemMovies}
              state={location}
            >
              <img src={img + poster_path} alt="" />
              
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
