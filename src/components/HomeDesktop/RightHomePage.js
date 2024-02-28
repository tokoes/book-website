import classes from "./rightHomePage.module.css";

const RightHomePage = () => {
  return (
    <div className={classes.RightHome}>
      <div className={classes.TopCont}>
        <a href="https://www.thriftbooks.com/b/booktok/">
          <img
            src="https://static.thriftbooks.com/general/DT-M_544x144_c72630bf.jpg"
            alt="ThriftBooks BookTok"
          ></img>
          <p className={classes.cont}>
            <span className={classes.FirstSpan}>BookTok</span>
            <br></br>
            <span className={classes.SecondSpan}>Find your next obsession</span>
          </p>
        </a>
      </div>
      <div className={classes.TwoPhoto}>
        <div className={classes.left}>
          <a href="https://www.thriftbooks.com/b/thriftbooks-deals/">
            <img
              src="https://static.thriftbooks.com/site_images/deals-FINAL_88c7c3e6.png"
              alt="ThriftBooks ThriftBooks Deals"
            ></img>
            <p className={classes.LeftPhotoSpan}>
              <span className={classes.LeftSpanStyle}>ThriftBooks Deals</span>
              <br></br>
              <span className={classes.LeftSpanStyleSecond}>
                Up to 20% off eligible items
              </span>
            </p>
          </a>
        </div>
        <div className={classes.right}>
          <a href="https://www.thriftbooks.com/b/bestsellers/">
            <img
              src="https://static.thriftbooks.com/general/BestSellers-DT-S_f8579350.jpg"
              alt="ThriftBooks Best Sellers"
            ></img>
            <p className={classes.rightPhotoSpan}>
              <span className={classes.rightSpanStyle}>Best Sellers</span>
              <br></br>
              <span className={classes.rightSpanStyleSecond}>
                Shop our new best sellers
              </span>
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default RightHomePage;
