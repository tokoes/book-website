import classes from "./homeAbout.module.css";

const HomeAbout = () => {
  return (
    <div className={classes.HomeAbout}>
      <h2 className={classes.h2big}>For the Love of Reading</h2>
      <div className={classes.About}>
        <span className={classes.spanone}>Selection</span>
        <p>
          We have more than 13 million titles to choose from, from the earliest
          <a href="/b/childrens-books/">board books</a> to the all-time classics
          of <a href="/b/literature-and-fiction/">literature</a>.
        </p>
        <span className={classes.spantwo}>Purchasing Power</span>
        <p>
          Used books are often treasures that are out-of-print or rare. With
          Wish Lists you can choose to be notified the instant we find a copy,
          see how often we find rare titles, and see who else is interested.
        </p>
        <div className={classes.last}>
          <span className={classes.spanthree}>FREE Shipping &amp; More</span>
          <p>
            When you've found the books you want we'll ship qualifying orders to
            your door for <strong>FREE</strong> in 100% recyclable packaging. If
            there is no demand for a book, we will donate it to charity, or
            we'll recycle it.
          </p>
        </div>
        <p className={classes.button}>
          <div className={classes.box}>
            <a href="/aboutus.aspx">More About Us</a>
          </div>
        </p>
      </div>

      <div className={classes.ytImage}>
        <img
          src="https://static.thriftbooks.com/general/aboutthriftbooks_video_cover.png"
          alt="ThriftBooks Learn About Us Video"
        ></img>
        <button>
          <span>Read Video Transcript</span>
        </button>
      </div>
    </div>
  );
};

export default HomeAbout;
