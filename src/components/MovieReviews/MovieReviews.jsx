import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import css from './MovieReviews.module.css';
import { getMovieReviews } from '../../apiService/moveis';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      if (!movieId) return;
      setIsLoading(true);
      try {
        const results = await getMovieReviews(movieId);
        setReviews(results.results);
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
          {isLoading && <Loader />}
          {error && <ErrorMessage />}
      {reviews.length === 0 ? (
        <p>
          Sorry, we do not have any reviews for this movie...
        </p>
      ) : (
        <ul className={css.reviewsList}>
          {reviews.map(({id, author, content}) => (
            <li key={id} className={css.reviewsItem}>
              <p className={css.author}>{author}</p>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default MovieReviews;
