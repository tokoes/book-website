import classes from "./videoGames.module.css";

const BooksOneObj = [{ title: "Best Sellers" }, { title: "New Releases" }];

const BooksTwoObj = [{ title: "ReadingRewards" }, { title: "e-Gift Cards" }];

const Genress = [
  { title: "Action" },
  { title: "Adventure" },
  { title: "Fighting" },
  { title: "Horror" },
  { title: "Music/Dance" },
  { title: "Party" },
  { title: "Puzzle" },
  { title: "Racing" },
  { title: "Real-Time Strategy" },
  { title: "RPG" },
];

const GenressTwo = [
  { title: "Nintendo Switch" },
  { title: "Playstation 4" },
  { title: "Playstation 5" },
  { title: "Xbox One" },
  { title: "Xbox Series X" },
];

const VideoGames = () => {
  return (
    <div className={classes.SuperMenuHeart}>
      <div className={classes.h3Main}>
        <h5>Video Games</h5>
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
          <h5>Category</h5>
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
      </div>
    </div>
  );
};

export default VideoGames;
