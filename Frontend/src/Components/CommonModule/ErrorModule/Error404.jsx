import Styles from "./Error404.module.css";
import { Link } from "react-router-dom";
import ErrorSvg from "/Error404.svg";

const Error404 = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.content}>
        <div className={Styles.illustration}>
          <img
            src={ErrorSvg}
            alt="404 Error Illustration"
            className={Styles.errorImage}
          />
        </div>
        <Link
          to="/"
          className={Styles.homeButton}
          role="button"
          aria-label="Go to Home"
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default Error404;
