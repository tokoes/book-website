import classes from "./superMBooks.module.css";

const BooksOneObj = [
  { title: "Best Sellers" },
  { title: "★ Secret Shelf ★" },
  { title: "#BookTok" },
  { title: "Large Print" },
  { title: "Foreign Language" },
];

const BooksTwoObj = [
  { title: "ThriftBooks Deals" },
  { title: "ReadingRewards" },
  { title: "ThriftBooks 4 Teachers" },
  { title: "e-Gift Cards" },
  { title: "See All Offers" },
];

const Biographies = [
  { title: "Arts & Literature" },
  { title: "Cultural" },
  { title: "European" },
  { title: "Historical" },
  { title: "Leaders & Notable People" },
  { title: "Shop All" },
];

const Literature = [
  { title: "Anthologies" },
  { title: "Classics" },
  { title: "Contemporary" },
  { title: "Foreign Language" },
  { title: "Genre Fiction" },
  { title: "Shop All" },
];

const Children = [
  { title: "Action & Adventure" },
  { title: "Activity Books" },
  { title: "Animals" },
  { title: "Cars & Trucks" },
  { title: "Classics" },
  { title: "Shop All" },
];

const Mystery = [
  { title: "Conspiracy" },
  { title: "Crime" },
  { title: "Detective" },
  { title: "Mysteries" },
  { title: "Spy" },
  { title: "Shop All" },
];

const Education = [
  { title: "Catalogs" },
  { title: "Colleges" },
  { title: "Curriculum" },
  { title: "Dictionaries" },
  { title: "Education" },
  { title: "Shop All" },
];

const Religion = [
  { title: "Agnosticism" },
  { title: "Astrology" },
  { title: "Atheism" },
  { title: "Buddhism" },
  { title: "Christian" },
  { title: "Shop All" },
];

const Historya = [
  { title: "Catalogs" },
  { title: "Colleges" },
  { title: "Curriculum" },
  { title: "Dictionaries" },
  { title: "Education" },
  { title: "Shop All" },
];

const Categories = [
  { title: "Romance" },
  { title: "Sci-Fi & Fantasy" },
  { title: "Science & Math" },
  { title: "Teen & Young Adult" },
  { title: "Health, Fitness & Dieting" },
  { title: "Shop All" },
];

const SuperMBooks = () => {
  return (
    <div className={classes.SuperMenuHeart}>
      <div className={classes.h3Main}>
        <h5>Books</h5>
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
        <div className={classes.biograph}>
          <h5>Biographies & Memoirs</h5>
          {Biographies.map((item) => {
            return <p>{item.title}</p>;
          })}
        </div>

        <div className={classes.Literature}>
          <h5>Literature & Fiction</h5>
          {Literature.map((item) => {
            return <p>{item.title}</p>;
          })}
        </div>
        <div className={classes.Children}>
          <h5>Children's</h5>
          {Children.map((item) => {
            return <p>{item.title}</p>;
          })}
        </div>
        <div className={classes.Mystery}>
          <h5>Mystery & Suspense</h5>
          {Mystery.map((item) => {
            return <p>{item.title}</p>;
          })}
        </div>
        <div className={classes.Education}>
          <h5>Education & Reference</h5>
          {Education.map((item) => {
            return <p>{item.title}</p>;
          })}
        </div>
        <div className={classes.Religion}>
          <h5>Religion & Spirituality</h5>
          {Religion.map((item) => {
            return <p>{item.title}</p>;
          })}
        </div>
        <div className={classes.History}>
          <h5>History</h5>
          {Historya.map((item) => {
            return <p>{item.title}</p>;
          })}
        </div>
        <div className={classes.Categories}>
          <h5>More Categories</h5>
          {Categories.map((item) => {
            return <p>{item.title}</p>;
          })}
        </div>
      </div>
    </div>
  );
};

export default SuperMBooks;
