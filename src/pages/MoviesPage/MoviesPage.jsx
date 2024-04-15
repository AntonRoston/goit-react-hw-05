import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList";
import SearchForm from "../../components/SearchForm/SearchForm";
import { useSearchParams } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import { getMovieBySearch } from "../../apiService/moveis";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

const MoviesPage = () => {
  const [movies, setMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
    const [isLoader, setIsLoader] = useState(false);
    const [error, setError] = useState(null);

  const query = searchParams.get("query");
  const onSubmit = (value) => {
    if (value === query) {
      alert("nono");
      return;
    }
    setMovies(null);
    setSearchParams({ query: value });
  };
  useEffect(() => {
    if (query === "" || query === null) return;
    const fetchData = async () => {
      try {
        setIsLoader(true);

        const { results } = await getMovieBySearch(query);
        if (results.length === 0) {
          alert('Sorry, nothing was found for your query');
        }
        setMovies(results);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoader(false);
      }
    };
    fetchData();
  }, [query]);
    
  return (
    <div>
      <SearchForm onSubmit={onSubmit} />
          {isLoader && <Loader />}
          {error && <ErrorMessage />}
      {movies !== null && Array.isArray(movies) && (
        <MovieList movies={movies} />
      )}
    </div>
  );
};

export default MoviesPage;
