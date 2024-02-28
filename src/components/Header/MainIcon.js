import classes from "./mainIcon.module.css";
import { Link } from "react-router-dom";

const MainIcon = () => {
  return (
    <Link to={"/"} className={classes.IconPosition}>
      <img
        alt="ThriftBooks"
        src="https://static.thriftbooks.com/images/tblogo-green_20200225.svg"
      ></img>
    </Link>
  );
};

export default MainIcon;
