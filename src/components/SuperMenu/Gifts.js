import classes from "./gifts.module.css";

const BooksTwoObj = [{ title: "ReadingRewards" }, { title: "e-Gift Cards" }];

const Genress = [
  { title: "Everyday" },
  { title: "Birthday" },
  { title: "Easter" },
  { title: "Mother's Day" },
  { title: "Father's Day" },
  { title: "Shop All" },
];

const GenressTwo = [
  { title: "Figurines" },
  { title: "Ornaments" },
  { title: "Villages" },
  { title: "Village Accessories" },
  { title: "Shop All" },
];

const GenressThree = [
  { title: "Drinkware" },
  { title: "Fashion & Accessories" },
  { title: "Home Decor" },
  { title: "Journals & More" },
  { title: "Kitchen" },
  { title: "Shop All" },
];

const GenressFour = [
  { title: "Department 56" },
  { title: "Disney" },
  { title: "Grand Jester" },
  { title: "Grinch" },
  { title: "Jim Shore" },
  { title: "Shop All" },
];

const Gifts = () => {
  return (
    <div className={classes.SuperMenuHeart}>
      <div className={classes.h3Main}>
        <h5>Gifts</h5>
        <p>{">"}</p>
      </div>
      <div className={classes.SuperMenuHead}>
        <div className={classes.BooksBigObj}>
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
          <h5>Holidays & Occasions</h5>
          {Genress.map((item) => {
            return <p>{item.title}</p>;
          })}
        </div>
        <div className={classes.GenresTwo}>
          <h5>Popular Collections</h5>
          {GenressTwo.map((item) => {
            return <p>{item.title}</p>;
          })}
        </div>
        <div className={classes.GenresThree}>
          <h5>Categories</h5>
          {GenressThree.map((item) => {
            return <p>{item.title}</p>;
          })}
        </div>
        <div className={classes.GenresFour}>
          <h5>Classic Brands</h5>
          {GenressFour.map((item) => {
            return <p>{item.title}</p>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Gifts;
