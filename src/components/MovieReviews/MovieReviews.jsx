import { useEffect, useState } from "react";
import { ApiMovieRewiews } from "../ApiService/ApiService";
import { useParams } from "react-router-dom";
import css from "./MovieReviews.module.css";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const results = await ApiMovieRewiews(movieId);
        setReviews(results);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [movieId]);

  return (
    <>
      {reviews.length === 0 ? (
        <p className={css.noResult}>
          We do not have any reviews for this movie 😢
        </p>
      ) : (
        <ul className={css.reviewsList}>
          {reviews.map((item) => (
            <li key={item.id} className={css.reviewsItem}>
              <p>{item.author}</p>
              <p>{item.content}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default MovieReviews;