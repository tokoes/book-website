import classes from "./music.module.css";

const BooksOneObj = [{ title: "Best Sellers" }, { title: "New Releases" }];

const BooksTwoObj = [{ title: "ReadingRewards" }, { title: "e-Gift Cards" }];

const Genress = [
  { title: "Bluegrass" },
  { title: "Blues" },
  { title: "Children's" },
  { title: "Christian" },
  { title: "Christmas" },
  { title: "Classical" },
  { title: "Comedy" },
  { title: "Country & Western" },
  { title: "Dance" },
  { title: "Easy Listening" },
];

const GenressTwo = [
  { title: "Electronica" },
  { title: "Folk" },
  { title: "Gospel/Christian Music" },
  { title: "Holiday" },
  { title: "Jazz" },
  { title: "Latin" },
  { title: "New Age" },
  { title: "Original Cast Recordings" },
  { title: "Performing Arts" },
  { title: "Pop" },
];

const GenresThree = [
  { title: "Popular" },
  { title: "Rap & Hip Hop" },
  { title: "Reggae" },
  { title: "Rock" },
  { title: "Soul" },
  { title: "Soundtracks" },
  { title: "Spoken Word" },
  { title: "TV & Cartoon Soundtracks" },
  { title: "Vocals" },
  { title: "World Music" },
];

const Music = () => {
  return (
    <div className={classes.SuperMenuHeart}>
      <div className={classes.h3Main}>
        <h5>Music</h5>
        <p>{">"}</p>
      </div>
      <div className={classes.SuperMenuHead}>
        <div className={classes.BooksBigObj}>
          <div className={classes.BooksOneObj}>
            {BooksOneObj.map((item) => {
              return (
                <div className={classes.SuperMenuFeatured}>
                  <p className={classes.first}>{item.title}</p>
                </div>
              );
            })}
          </div>
          <div className={classes.BooksTwoObj}>
            {BooksTwoObj.map((item) => {
              return (
                <div className={classes.SuperMenuFeaturedTwo}>
                  <p className={classes.two}>{item.title}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className={classes.Genres}>
          <h5>Genres</h5>
          {Genress.map((item) => {
            return <p>{item.title}</p>;
          })}
        </div>
        <div className={classes.GenresTwo}>
          <h5></h5>
          {GenressTwo.map((item) => {
            return <p>{item.title}</p>;
          })}
        </div>
        <div className={classes.GenresThreee}>
          <h5></h5>
          {GenresThree.map((item) => {
            return <p>{item.title}</p>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Music;
