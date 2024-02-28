import classes from "./homeDesktop.module.css";
import HomePage from "./HomePage";
import RightHomePage from "./RightHomePage";
import ThreeNews from "./ThreeNews";
import Content from "../Content/Content";
import ShopCategory from "../ShopCategory/ShopCategory";
import HomeAbout from "../HomeAbout/HomeAbout";

const HomeDesktop = () => {
  return (
    <div className={classes.MainDesktopePage}>
      <div className={classes.HomePage}>
        <HomePage />
        <RightHomePage />
      </div>
      <div className={classes.ContentBar}>
        <ThreeNews />
      </div>
      <div className={classes.Content}>
        <Content />
      </div>
      <div className={classes.ShopCategory}>
        <ShopCategory />
      </div>
      <div className={classes.HomeAbout}>
        <HomeAbout />
      </div>
    </div>
  );
};

export default HomeDesktop;
