import classes from "./collectible.module.css";

const BooksOneObj = [{ title: "First Editions" }, { title: "Signed Books" }];

const BooksTwoObj = [{ title: "ReadingRewards" }, { title: "e-Gift Cards" }];

const Genress = [
  { title: "Action & Adventure" },
  { title: "Americas" },
  { title: "Arts, Music & Photography" },
  { title: "Biographies" },
  { title: "Children's Books" },
  { title: "Classics" },
  { title: "Contemporary" },
  { title: "Education & Reference" },
  { title: "Genre Fiction" },
  { title: "Historical" },
];

const GenressTwo = [
  { title: "History" },
  { title: "Humanities" },
  { title: "Literary" },
  { title: "Literature & Fiction" },
  { title: "Military" },
  { title: "Mystery, Thriller & Suspense" },
  { title: "Politics & Social Sciences" },
  { title: "Religion & Spirituality" },
  { title: "Science & Math" },
  { title: "Science Fiction & Fantasy" },
];

const GenresThree = [
  { title: "Social Sciences" },
  { title: "Textbooks" },
  { title: "Thrillers" },
  { title: "Travel" },
  { title: "United States" },
];

const Collectible = () => {
  return (
    <div className={classes.SuperMenuHeart}>
      <div className={classes.h3Main}>
        <h5>Collectible Books</h5>
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

export default Collectible;
