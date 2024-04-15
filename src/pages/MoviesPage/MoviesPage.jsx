import { useEffect, useState } from "react";
import { ApiMovieSearch } from "../../components/ApiService/ApiService";
import MovieList from "../../components/MovieList/MovieList";
import SearchForm from "../../components/SearchForm/SearchForm";
import { useSearchParams } from "react-router-dom";
import Loader from "../../components/Loader/Loader";

const MoviesPage = () => {
  const [movies, setMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [loader, setLoader] = useState(false);

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
        setLoader(true);

        const { results } = await ApiMovieSearch(query);
        if (results.length === 0) {
          alert("Sorry! There is nothing found");
        }
        setMovies(results);
      } catch (error) {
        console.log(error);
      } finally {
        setLoader(false);
      }
    };
    fetchData();
  }, [query]);
  return (
    <div>
      <SearchForm onSubmit={onSubmit} />
      {loader && <Loader />}
      {movies !== null && Array.isArray(movies) && (
        <MovieList movies={movies} />
      )}
    </div>
  );
};

export default MoviesPage;
