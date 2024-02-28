import classes from "./fifthContent.module.css";

export const FifthContentAlbums = [
  {
    href: "/w/the-lion-the-witch-and-the-wardrobe-by-cs-lewis/246392/",
    src: "https://img.thriftbooks.com/api/images/i/s/87027360B5B9ADC9439DC3378F1640039F77E4A2.jpg",
    span: "The Lion, the Witch and the Wardrobe",
    spanTwo: "C.S. Lewis",
    price: " $3.59",
    id: 53,
  },

  {
    href: "/w/mans-search-for-meaning-by-viktor-e-frankl-simon-vance/248792/",
    src: "https://img.thriftbooks.com/api/images/i/s/D203A7921F6F55A5024471125FBEC95765EA0931.jpg",
    span: "Man's Search for Meaning",
    spanTwo: " Viktor E. Frankl",
    price: "  $5.69",
    id: 54,
  },
  {
    href: "/w/the-art-of-war_sun-tzu_sunzi/250412/",
    src: "https://img.thriftbooks.com/api/images/i/s/6195E150E5A1898C841A91C2733D55F243DEBB45.jpg",
    span: " The Art of War",
    spanTwo: " Sun Tzu",
    price: " $3.99",
    id: 55,
  },

  {
    href: "/w/the-giving-tree-by-shel-silverstein/249012/",
    src: "https://img.thriftbooks.com/api/images/i/s/7FC7A8EAD39F98907C8FA557B6F616111EA3FEE5.jpg",
    span: "The Giving Tree",
    spanTwo: "Shel Silverstein",
    price: "$4.39",
    id: 56,
  },
  {
    href: "/w/the-kite-runner-by-khaled-hosseini/246792/",
    src: "https://img.thriftbooks.com/api/images/i/s/77BAAF026C906D3C555A7658E909954D03971702.jpg",
    span: " The Kite Runner",
    spanTwo: " Khaled Hosseini",
    price: "$3.99",
    id: 57,
  },
  {
    href: "/w/the-four-winds_kristin-hannah/26493212/",
    src: "https://img.thriftbooks.com/api/images/i/s/B3C7EDB1FDAF5D0C210E85978DB51DDE098F534D.jpg",
    span: "The Four Winds",
    spanTwo: " Kristin Hannah",
    price: "$6.09",
    id: 58,
  },
  {
    href: "/w/holes_louis-sachar/249532/",
    src: "https://img.thriftbooks.com/api/images/i/s/950EA56356586DE87B557839DE2B5EBE72E86F10.jpg",
    span: "Holes",
    spanTwo: " Louis Sachar",
    price: "$3.59",
    id: 59,
  },
];

const FifthContent = () => {
  return (
    <div className={classes.BigFirstContent}>
      {FifthContentAlbums.map((item) => {
        return (
          <div key={item.id} className={classes.FirstContent}>
            <a className={classes.aTag} href={item.href}>
              <img
                className={classes.imgTag}
                src={item.src}
                alt={item.span}
              ></img>
              <div className={classes.TextBody}>
                <div className={classes.pFTag}>{item.span}</div>
                <div className={classes.pSTag}>{item.spanTwo}</div>
                <div className={classes.pFrom}>
                  from:
                  <span className={classes.pPrice}>{item.price}</span>
                </div>
              </div>
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default FifthContent;
