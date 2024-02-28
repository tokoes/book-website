import classes from "./threeNews.module.css";

const ThreeNews = () => {
  return (
    <div className={classes.ThreeNews}>
      <div className={classes.FirstNews}>
        <a className={classes.Firsta} href="/readingrewards/">
          <div className={classes.aFirst}>
            <div className={classes.aFirstDivF}>ReadingRewards</div>
            <div className={classes.aFirstDivS}>
              Join now to earn FREE BOOKS
            </div>
          </div>
        </a>
      </div>

      <div className={classes.SecondNews}>
        <a className={classes.Seconda} href="/b/thriftbooks-deals/">
          <div className={classes.aSecond}>
            <div className={classes.aSecondDivF}>ThriftBooks Deals</div>
            <div className={classes.aFirstDivS}>
              save up to 20% off any eligible item
            </div>
          </div>
        </a>
      </div>
      <div className={classes.ThirdNews}>
        <a className={classes.Thirda} href="/app/">
          <div className={classes.aThird}>
            <div className={classes.aThirdDivF}>Mobile App</div>
            <div className={classes.aThirdDivS}>
              Shop faster &amp; earn bonus points
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default ThreeNews;
