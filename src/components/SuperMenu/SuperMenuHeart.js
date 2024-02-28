import classes from "./superMenuHeart.module.css";

const SuperMenuHeartObj = [
  {
    src: "https://static.thriftbooks.com/general/DT-S-264x144-plain_edb01c0e.jpg",
    alt: "ThriftBooks ThriftBooks 4 Teachers™",
    definition: "ThriftBooks 4 Teachers™",
  },
  {
    src: "https://static.thriftbooks.com/general/DT-S_264x144_9bbb4dc9.jpg",
    alt: "ThriftBooks #BookTok",
    definition: "#BookTok",
  },
  {
    src: "https://static.thriftbooks.com/general/DT-S_09e202fe.jpg",
    alt: "ThriftBooks Coming Soon: Iron Flame",
    definition: "Coming Soon: Iron Flame",
  },
  {
    src: "https://static.thriftbooks.com/general/DT-S_11effe5e.jpg",
    alt: "ThriftBooks New &amp; Coming Soon",
    definition: "New & Coming Soon",
  },
  {
    src: "https://static.thriftbooks.com/general/DT-S-_264x144_8be1a94a.jpg",
    alt: "ThriftBooks Coffee Table Books",
    definition: "Coffee Table Books",
  },
  {
    src: "https://static.thriftbooks.com/general/DT-S_3067fa74.jpg",
    alt: "ThriftBooks Fresh Fall Reads",
    definition: "Fresh Fall Reads",
  },
  {
    src: "https://static.thriftbooks.com/general/LargePrint-teal_6288ec6b.jpg",
    alt: "ThriftBooks Large Print Books",
    definition: "Large Print Books",
  },
  {
    src: "https://static.thriftbooks.com/general/DT-S_13d74b48.jpg",
    alt: "ThriftBooks Secret Shelf™",
    definition: "Secret Shelf™",
  },
];

console.log(SuperMenuHeartObj[0].FeaturedSection);

const SuperMenuHeart = () => {
  return (
    <div className={classes.SuperMenuHeart}>
      <div className={classes.h3Main}>
        <h5>Featured</h5>
        <p>{">"}</p>
      </div>
      <div className={classes.SuperMenuHead}>
        {SuperMenuHeartObj.map((item) => {
          return (
            <div className={classes.SuperMenuFeatured}>
              <img src={item.src} alt={item.alt}></img>

              <p>{item.definition}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SuperMenuHeart;
