import classes from "./marketingBanner.module.css";

const MarketingBanner = () => {
  return (
    <div className={classes.MarketBanner}>
      <a href="">
        <span className={classes.Banner}>
          Give & Get Double
          <br></br>
          Earn 2x Points Sitewide
        </span>
      </a>
    </div>
  );
};

export default MarketingBanner;
