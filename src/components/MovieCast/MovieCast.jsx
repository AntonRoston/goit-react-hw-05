import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import css from './MovieCast.module.css';
import { getMovieCast } from '../../apiService/moveis';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
const img = 'https://image.tmdb.org/t/p/w300';

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        const results = await getMovieCast(movieId);
        setCast(results.cast);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, [movieId]);

  return (
    <div>
      {isLoading && <Loader />}
      {error && <ErrorMessage />}
      {cast.length === 0 ? (
        <p>
          Sorry, we do not have any cast information...
        </p>
      ) : (
        <ul className={css.castList}>
          {cast.map(({ id, profile_path, name, character }) => (
            <li className={css.castItem} key={id}>
              <img src={img + profile_path} alt={name} width={150} />
              <div className={css.infoWrap}>
                <p>{name}</p>
                <p>{character}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MovieCast;
