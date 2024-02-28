import classes from "./header.module.css";

import MainIcon from "./MainIcon";
import MainInput from "./MainInput";
import RightHeader from "./RightHeader";
import SuperMenu from "../SuperMenu/SuperMenu";

const Header = () => {
  return (
    // ზემო ჰეადერი
    <div className={classes.MainHeader}>
      <div className={classes.Header}>
        <MainIcon />
        <MainInput />
        <RightHeader />
        {/* ამის ქვემოთ სელექტორი */}
      </div>
      <SuperMenu />
    </div>
  );
};

export default Header;
