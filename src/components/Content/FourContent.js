import classes from "./fourContent.module.css";

export const FourContentAlbums = [
  {
    href: "/w/the-hobbit_jrr-tolkien/245980/",
    src: "https://img.thriftbooks.com/api/images/i/s/AFFC14465D51048A01371A5CE4C57A5B6C773C44.jpg",
    span: " The Hobbit",
    spanTwo: "J.R.R. Tolkien",
    price: " $3.99",
    id: 43,
  },

  {
    href: "/w/little-women-by-louisa-may-alcott/285700/",
    src: "https://img.thriftbooks.com/api/images/i/s/A7CC87C39724CF8AFCB1CAEAE899A5A63ECB94E2.jpg",
    span: "  Little Women",
    spanTwo: "Louisa May Alcott",
    price: "   $3.59",
    id: 44,
  },
  {
    href: "/w/sharp-objects-by-gillian-flynn/254320/",
    src: "https://img.thriftbooks.com/api/images/i/s/04C6F6AC02F200A513C6E9440323AE8D72814901.jpg",
    span: " Sharp Objects",
    spanTwo: "  Gillian Flynn",
    price: "  $3.59",
    id: 45,
  },
  {
    href: "/w/the-couple-next-door_shari-lapena/10881420/",
    src: "https://img.thriftbooks.com/api/images/i/s/7718558B28AEFC61DF71F324A9287F37AD9518E4.jpg",
    span: "  The Couple Next Door",
    spanTwo: " Shari Lapena",
    price: "$4.09",
    id: 46,
  },
  {
    href: "/w/eleanor-oliphant_gail-honeyman/13526160/",
    src: "https://img.thriftbooks.com/api/images/i/s/DFB2FD023242D210EEAFFA0891F17C9FA3855613.jpg",
    span: " Eleanor Oliphant is Completely... ",
    spanTwo: " Gail Honeyman",
    price: "  $3.99",
    id: 47,
  },
  {
    href: "/w/outliers-the-story-of-success-by-malcolm-gladwell/245740/",
    src: "https://img.thriftbooks.com/api/images/i/s/B60CCED5E9379E7B360A45ED0A0C3BFCE9C0198B.jpg",
    span: " Outliers: The Story of Success",
    spanTwo: "  Malcolm Gladwell",
    price: "$4.19",
    id: 48,
  },
  {
    href: "/w/hop-on-pop-by-dr-seuss/246000/",
    src: "https://img.thriftbooks.com/api/images/i/s/2550FB2BB550B717F1C24DE40859910C6C5C9B99.jpg",
    span: " Hop on Pop",
    spanTwo: " Dr. Seuss",
    price: "  $3.59",
    id: 49,
  },
  {
    href: "/w/the-shack-where-tragedy-confronts-eternity-by-wm-paul-young/247440/",
    src: "https://img.thriftbooks.com/api/images/i/s/4DB61DD7F0AF9CA18F98A513D9C20A1860D69602.jpg",
    span: " The Shack: Where Tragedy...",
    spanTwo: " William Paul Young",
    price: " $3.59",
    id: 50,
  },
  {
    href: "/w/harry-potter-and-the-cursed-child_jk-rowling_john-tiffany/10045360/",
    src: "https://img.thriftbooks.com/api/images/i/s/B84046D870A07EC2898389F30BC88DC46347E4BD.jpg",
    span: " Harry Potter and the...",
    spanTwo: " J.K. Rowling",
    price: " $4.19",
    id: 51,
  },
  {
    href: "/w/the-things-they-carried-by-tim-obrien/248200/",
    src: "https://img.thriftbooks.com/api/images/i/s/B44947D47D4B6889644C059A42A5A905B30E5AE8.jpg",
    span: " The Things They Carried",
    spanTwo: " Tim O'Brien",
    price: " $4.19",
    id: 52,
  },
];

const FourContent = () => {
  return (
    <div className={classes.BigFirstContent}>
      {FourContentAlbums.map((item) => {
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

export default FourContent;
