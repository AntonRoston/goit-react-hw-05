import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

const ACCESS_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlN2UzMjQxZTI5MjM4ODNhYTkwNmRlNWNhNjQ3NzExZCIsInN1YiI6IjY1ZmYxODQzNDU5YWQ2MDE4N2Y4NzY3YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eesgffZGCbb2TNrnzbP_5PZyyjCnx28F4IsQksLDf4Q";

const options = {
  headers: {
    Authorization: `Bearer ${ACCESS_TOKEN}`,
    accept: "application/json",
  },
};

export const getTrendingMovies = async () => {
  const response = await axios.get("/trending/movie/week?language=en-US", options);

  return response.data;
};

export const getMovieDetails = async (id) => {
  const response = await axios.get(`/movie/${id}?language=en-US`, options);

  return response.data;
};

export const getMovieCast = async (id) => {
  const response = await axios.get(
    `/movie/${id}/credits?language=en-US`,
    options
  );

  return response.data;
};

export const getMovieReviews = async (id) => {
  const response = await axios.get(
    `/movie/${id}/reviews?language=en-US`,
    options
  );

  return response.data;
};

export const getMovieBySearch = async (query) => {
  
  const response = await axios.get(
    `/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
    options
  );
  return response.data;
};






