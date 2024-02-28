import classes from "./homePage.module.css";

const HomePage = () => {
  return (
    <div className={classes.HomePageBig}>
      <a
        className={classes.Dec}
        href="https://www.thriftbooks.com/b/fresh-fall-reads/"
      >
        <img
          src="https://static.thriftbooks.com/general/DT-L_3dcd431d.jpg"
          alt="ThriftBooks Fresh Fall Reads"
        />

        <div className={classes.LeftWords}>
          <span className={classes.FirstSpan}>Fresh Fall Reads</span>

          <span className={classes.SecondSpan}>Shop new releases</span>
        </div>
      </a>
    </div>
  );
};

export default HomePage;
