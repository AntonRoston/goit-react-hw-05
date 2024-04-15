import { useEffect, useRef, useState } from 'react';
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from 'react-router-dom';
import MovieCast from '../../components/MovieCast/MovieCast';
import MovieReviews from '../../components/MovieReviews/MovieReviews';
import css from './MovieDetailsPage.module.css';
import { getMovieDetails } from '../../apiService/moveis';
import { IoIosArrowRoundBack } from 'react-icons/io';
import Loader from '../../components/Loader/Loader';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
const img = 'https://image.tmdb.org/t/p/w500';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const location = useLocation();
  const linkBack = useRef(location.state ?? '/');

  useEffect(() => {
    if (!movieId) return;

    async function fetchData() {
      setIsLoading(true);
      try {
        const results = await getMovieDetails(movieId);
        setMovie(results);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, [movieId]);

  return (
    <>
      <Link className={css.goBack} to={linkBack.current}>
        <IoIosArrowRoundBack size={30} />
        Go Back
      </Link>
      {isLoading && <Loader />}
      {error && <ErrorMessage />}
      {!isLoading && !error && (
        <div className={css.moveiDetailsWrap}>
          <div className={css.detailsMovies}>
            <div>
              <img
                src={img + movie.poster_path}
                alt={movie.original_title}
                width={300}
              />
            </div>
            <div>
              <h1 className={css.title}>{movie.original_title}</h1>

              <p className={css.userScore}>
                User score:{' '}
                {parseInt(parseFloat(Number(movie.vote_average)) * 10)}%
              </p>
              <h2 className={css.subtitle}>Overwiew</h2>
              <p className={css.text}>{movie.overview}</p>
              <h2 className={css.subtitle}>Genres</h2>
              {movie.genres && (
                <p className={css.text}>
                  {movie.genres.map(genre => genre.name).join(' ')}
                </p>
              )}
            </div>
          </div>
          <div className={css.aditionalInfoWrap}>
            <h2 className={css.infoTitle}>Additional information</h2>
            <ul className={css.infoList}>
              <li>
                <NavLink to="cast" element={<MovieCast />} className={css.link}>
                  Cast
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="reviews"
                  element={<MovieReviews />}
                  className={css.link}
                >
                  Reviews
                </NavLink>
              </li>
            </ul>

            <Outlet />
          </div>
        </div>
      )}
    </>
  );
};

export default MovieDetailsPage;
