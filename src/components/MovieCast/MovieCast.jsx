import { useEffect, useState } from "react";
import { ApiMovieCast } from "../ApiService/ApiService";
import { useParams } from "react-router-dom";
import css from "./MovieCast.module.css";
const img = "https://image.tmdb.org/t/p/w500";

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const results = await ApiMovieCast(movieId);
        setCast(results);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [movieId]);
  return (
    <div>
      {cast.length === 0 ? (
        <p className={css.noResult}>
          We do not have any cast for this movies😢
        </p>
      ) : (
        <ul className={css.castList}>
          {cast.cast.map((item) => (
            <li className={css.castItem} key={item.id}>
              <img src={img + item.profile_path} alt={item.name} width={200} />
              <p>{item.name}</p>
              <p>{item.character}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MovieCast;
