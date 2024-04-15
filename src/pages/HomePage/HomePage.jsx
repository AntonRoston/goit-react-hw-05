import { useEffect, useState } from "react";
import { getTrendingMovies } from "../../apiService/moveis";
import css from './HomePage.module.css';
import Loader from "../../components/Loader/Loader";
import MovieList from "../../components/MovieList/MovieList";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
          const { results } = await getTrendingMovies();
        setMovies(results);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);
    
  return (
    <>
      <h1 className={css.title}>Trending Today</h1>
          {isLoading && <Loader />}
          {error && <ErrorMessage />}
          {movies.length > 0 && <MovieList movies={movies} />}
    </>
  );
};

export default HomePage;
