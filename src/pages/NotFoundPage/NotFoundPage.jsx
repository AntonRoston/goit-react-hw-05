import { Link, useLocation } from "react-router-dom";
import css from "./NotFoundPage.module.css";
import { GiCat } from 'react-icons/gi';

const NotFoundPage = () => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? "/";
  return (
    <div className={css.notFound}>
          <p>Not Found Page...</p>
          <GiCat size={60}/>
      <Link to={backLinkHref} className={css.homeBtn}>
        Home page
      </Link>
    </div>
  );
};

export default NotFoundPage;
