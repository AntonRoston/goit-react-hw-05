import { Link, useLocation } from "react-router-dom";
import css from "./NotFoundPage.module.css";
const NotFoundPage = () => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? "/";
  return (
    <div className={css.notFound}>
      <p>Sorry this is page is not found</p>
      <Link to={backLinkHref} className={css.btnHome}>
        Back to home page
      </Link>
    </div>
  );
};

export default NotFoundPage;
