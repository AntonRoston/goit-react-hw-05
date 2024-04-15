import { useEffect, useRef, useState } from "react";
import { Link, Route, Routes, useLocation, useParams } from "react-router-dom";
import { ApiMovieDetails } from "../../components/ApiService/ApiService";
import MovieCast from "../../components/MovieCast/MovieCast";
import MovieReviews from "../../components/MovieReviews/MovieReviews";
import css from "./MovieDetailsPage.module.css";
const img = "https://image.tmdb.org/t/p/w500";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  const location = useLocation();
  const linkBack = useRef(location.state ?? "/");

  useEffect(() => {
    async function fetchData() {
      try {
        const results = await ApiMovieDetails(movieId);
        setMovie(results);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [movieId]);
  return (
    <div>
      <div className={css.detailsMovies}>
        <div className={css.leftBox}>
          <img
            src={img + movie.poster_path}
            alt={movie.original_title}
            width={300}
          />
          <Link className={css.goBack} to={linkBack.current}>
            Go Back
          </Link>
          <h1 className={css.title}>{movie.original_title}</h1>
        </div>
        <div className={css.infoBox}>
          <p className={css.score}>User Score: {movie.vote_average * 10}%</p>
          <h2>Overwiew</h2>
          <p className={css.overview}>{movie.overview}</p>
          <h2>Genres</h2>
          {movie.genres && (
            <p className={css.genres}>
              {movie.genres.map((genre) => genre.name).join(", ")}
            </p>
          )}
          <div>
            <h2 className={css.titleCompany}>Company</h2>
            <div className={css.companyBox}>
              {movie.production_companies &&
                movie.production_companies.map((path) => (
                  <div key={path.id} className={css.companyItem}>
                    <div className={css.companyItem}>
                      <h3 className={css.companyName}>{path.name}</h3>
                      <img src={img + path.logo_path} width={200} />
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
      <div>
        <h3 className={css.aditionalInfo}>Aditional information</h3>
        <div className={css.boxDetailes}>
          <Link className={css.itemDetailes} to="cast" state={linkBack.current}>
            Cast
          </Link>
          <Link
            className={css.itemDetailes}
            to="reviews"
            state={linkBack.current}
          >
            Rewiews
          </Link>
        </div>
        <Routes>
          <Route path="cast" element={<MovieCast />}></Route>
          <Route path="reviews" element={<MovieReviews />}></Route>
        </Routes>
      </div>
    </div>
  );
};

export default MovieDetailsPage;
