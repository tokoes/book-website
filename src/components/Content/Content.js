import classes from "./content.module.css";
import FirstContent from "./FirstContent";
import SecondContent from "./SecondContent";
import ThirdContent from "./ThirdContent";
import FourContent from "./FourContent";
import FifthContent from "./FifthContent";

const Content = () => {
  return (
    <div className={classes.Content}>
      <div className={classes.First}>
        <p className={classes.llh2}>Top 10 Coming Soon</p>
        <FirstContent />
      </div>
      <div className={classes.Second}>
        <div className={classes.sh2}>Bestsellers</div>
        <h3 className={classes.sh3}>This year's top sellers</h3>
        <SecondContent />
      </div>
      <div className={classes.Therd}>
        <div className={classes.th2}>New & Trending</div>
        <ThirdContent />
      </div>
      <div className={classes.Four}>
        <div className={classes.fh2}>ThriftBooks Deals</div>
        <FourContent />
      </div>

      <div className={classes.Second}>
        <div className={classes.sh2}>Just Arrived</div>
        <h3 className={classes.sh3}>
          These books have just arrived on our shelves
        </h3>
        <FifthContent />
      </div>
    </div>
  );
};

export default Content;
