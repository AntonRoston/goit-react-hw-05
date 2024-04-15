import { useEffect, useState } from "react";

import { ApiTrendingMovies } from "../../components/ApiService/ApiService";
import MovieList from "../../components/MovieList/MovieList";
import css from "./HomePage.module.css";
import Loader from "../../components/Loader/Loader";
const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoader(true);
        const { results } = await ApiTrendingMovies();
        setMovies(results);
      } catch (error) {
        console.log(error);
      } finally {
        setLoader(false);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <h1 className={css.title}>Trending Today</h1>
      {loader && <Loader />}
      <MovieList movies={movies} />
    </>
  );
};

export default HomePage;
