import axios from "axios";

const AUTH_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMzFhOTZjNTMyMDhkYTM5ZTViNmFlZDQyZjMyNWI0OSIsInN1YiI6IjY2MDE1ZmI2MjI2YzU2MDE2NDcwZTc5OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PmdmOow6dqNiM4zz0OEcO5o07n_vX1dVtNeHC3o-DYU";

export const ApiTrendingMovies = async () => {
  const url = "https://api.themoviedb.org/3/trending/movie/day?language=en-US";

  const options = {
    headers: {
      Authorization: `Bearer ${AUTH_TOKEN}`,
    },
  };
  const response = await axios.get(url, options);
  return response.data;
};
export const ApiMovieDetails = async (id) => {
  const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;

  const options = {
    headers: {
      Authorization: `Bearer ${AUTH_TOKEN}`,
    },
  };
  const response = await axios.get(url, options);
  return response.data;
};
export const ApiMovieCast = async (id) => {
  const url = `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`;

  const options = {
    headers: {
      Authorization: `Bearer ${AUTH_TOKEN}`,
    },
  };
  const response = await axios.get(url, options);
  return response.data;
};
export const ApiMovieRewiews = async (id) => {
  const url = `https://api.themoviedb.org/3/movie/${id}/reviews?language=en-US&page=1`;

  const options = {
    headers: {
      Authorization: `Bearer ${AUTH_TOKEN}`,
    },
  };
  const response = await axios.get(url, options);
  return response.data;
};
export const ApiMovieSearch = async (query) => {
  const url = `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`;

  const options = {
    headers: {
      Authorization: `Bearer ${AUTH_TOKEN}`,
    },
  };
  const response = await axios.get(url, options);
  return response.data;
};
