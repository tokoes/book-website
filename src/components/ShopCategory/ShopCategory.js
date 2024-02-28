import classes from "./shopCategory.module.css";
import { Link, Navigate, useNavigate } from "react-router-dom";

import { FirstAlbum } from "../Content/SecondContent";

const ObjImg = [
  {
    Category: ["Love", "Romance"],

    link: "/w/12-months-to-live-a-knock-out-new-series-from-james-patterson_james-patterson_mike-lupica/51066457/",
    img: "https://img.thriftbooks.com/api/images/i/l/E7F05F61B82E64C220227A16D8BC1B42C2C6471F.jpg",
    alt: "Mystery, Thriller &amp; Suspense Example Book Cover",
    big: "MYSTERY, THRILLER & SUSPENSE",
    one: "Crime Books",
    two: "Detective Books",
    three: "Mystery Books",
    four: "Suspense Books",
    five: "Thrillers",

    id: 60,

    idOne: 1668009048,
    idTwo: 9781668009048,
    author: "JAMES MIKE",

    MoneyName: [
      { price: 31.99, name: "Hardcover" },
      { price: 39.59, name: "Audio CD" },
      { price: 28.99, name: "Paper Back" },
      { price: "", name: "Mass Market PaperBack" },
    ],

    Overview:
      "When you're a quilt instead of a sheet, being a ghost is hard An adorable picture book for fans of Stumpkin and How to Make Friends with a Ghost. Ghosts are supposed to be sheets, light as air and able to whirl and twirl and float and soar. But the little ghost who is a quilt can't whirl or twirl at all, and when he flies, he gets very hot. He doesn't know why he's a quilt. His parents are both sheets, and so are all of his friends. (His great-grandmother was a lace curtain, but that doesn't really help cheer him up.) He feels sad and left out when his friends are zooming around and he can't keep up. But one Halloween, everything changes. The little ghost who was a quilt has an experience that no other ghost could have, an experience that only happens because he's a quilt . . . and he realizes that it's OK to be different.",

    Professional: "We don't have a record of any reviews for this work.",
    Awards: "We don't have a record of any awards for this work.",

    format: "Hardcover",
    language: "English",
    ISBN: "0735264473",
    ISBN13: "9780735264472",
    releaseDate: "September 2020",
    publisher: "Tundra Books (NY)",
    length: "48 Pages",
    weight: "1.00 lbs.",
    dimensions: '0.5" x 8.5" x 11.1"',
    ageRange: "3 to 7 years",
    gradeRange: "Preschool to Grade 2",
  },
  {
    Category: ["Fantasy", "Literary fiction"],

    link: "/w/the-ballad-of-songbirds-and-snakes_suzanne-collins/22787467/",
    img: "https://img.thriftbooks.com/api/images/i/l/442B6D265A5FBDE3C115CF41582E7459B2EEAD18.jpg",
    alt: "Science Fiction &amp; Fantasy Example Book Cover",
    big: "SCIENCE FICTION & FANTASY",
    one: " Action & Adventure Books",
    two: "Coming of Age Sci-Fi Books",
    three: "Historical Sci-Fi Books",
    four: "Sci-Fi Horror Books",
    five: "Sci-Fi Humor Books",
    id: 61,

    idOne: 10002149052,
    idTwo: 2780025001148,
    author: "Dav Pilkey",

    MoneyName: [
      { price: 91.99, name: "Hardcover" },
      { price: 29.59, name: "Audio CD" },
      { price: 18.99, name: "Paper Back" },
      { price: 119.99, name: "Mass Market PaperBack" },
    ],

    Overview:
      "Past horrors and evil lurk in Colorado's Overlook Hotel, threatening winter season caretakers Jack Torrance, his wife Wendy, and their young son, Danny. Gifted with the shining, a clairvoyant Danny must battle the darkest evil in the remote hotel in an attempt to save his family from its influence.",
  },
  {
    Category: ["Short stories", "Young adult"],
    link: "/w/zilot-other-important-rhymes_bob-odenkirk/38264527/",
    img: "https://img.thriftbooks.com/api/images/i/l/BF6A60225BD158FACB416212D83E891C3866EE4E.jpg",
    alt: "Children's Books Example Book Cover",
    big: "CHILDREN'S BOOKS",
    one: "Children's Action & Adventure Books",
    two: "Children's Animal Books",
    three: "  Children's Humor Books",
    four: "Children's Sci-Fi & Fantasy Books",
    five: " Classic Children's Books",
    id: 62,

    idOne: 12518007021,
    idTwo: 11920022445166,
    author: "Kvicha kvara",

    MoneyName: [
      { price: 46.99, name: "Hardcover" },
      { price: 32.59, name: "Audio CD" },
      { price: 48.99, name: "Paper Back" },
      { price: "", name: "Mass Market PaperBack" },
    ],

    Overview:
      "Never trust an assassin. Celaena's story continues in this second book in the #1 bestselling Throne of Glass series by Sarah J. Maas. Celaena Sardothien won a brutal contest to become the King's Champion. But she is far from loyal to the crown. Though she goes to great lengths to hide her secret, her deadly charade becomes more difficult when she realizes she is not the only one seeking justice. Her search for answers ensnares those closest to her, and no one is safe from suspicion-not the Crown Prince Dorian; not Chaol, the Captain of the Guard; not even her best friend, Nehemia, a princess with a rebel heart. Then, one terrible night, the secrets they have all been keeping lead to an unspeakable tragedy. As Celaena's world shatters, she will be forced to decide once and for all where her true loyalties lie . . . and what she is willing to fight for. The second book in the #1 New York Times bestselling Throne of Glass series returns readers to a land destroyed by liars, where one woman's truth is the only thing that can save them all.",
  },
  {
    Category: ["Fantasy", "Thrillers"],
    link: "/w/the-great-disappearance-31-ways-to-be-rapture-ready_david-jeremiah/39504928/",
    img: "https://img.thriftbooks.com/api/images/i/l/A0C7F9236B90D8F41554EA005EFB95E1C556C7EA.jpg",
    alt: "Religion &amp; Spirituality Example Book Cover",
    big: "RELIGION & SPIRITUALITY",
    one: "Astrology Books",
    two: "Christian Books & Bibles ",
    three: "History of Religion Books",
    four: "Inspirational Books   ",
    five: "New Age Books  ",
    id: 63,

    idOne: 2225007010,
    idTwo: 142112009048,
    author: "Mark Harmon",

    MoneyName: [
      { price: 31.99, name: "Hardcover" },
      { price: 10.59, name: "Audio CD" },
      { price: 2.99, name: "Paper Back" },
      { price: 80, name: "Mass Market PaperBack" },
    ],

    Overview:
      "Never trust an assassin. Celaena's story continues in this second book in the #1 bestselling Throne of Glass series by Sarah J. Maas. Celaena Sardothien won a brutal contest to become the King's Champion. But she is far from loyal to the crown. Though she goes to great lengths to hide her secret, her deadly charade becomes more difficult when she realizes she is not the only one seeking justice. Her search for answers ensnares those closest to her, and no one is safe from suspicion-not the Crown Prince Dorian; not Chaol, the Captain of the Guard; not even her best friend, Nehemia, a princess with a rebel heart. Then, one terrible night, the secrets they have all been keeping lead to an unspeakable tragedy. As Celaena's world shatters, she will be forced to decide once and for all where her true loyalties lie . . . and what she is willing to fight for. The second book in the #1 New York Times bestselling Throne of Glass series returns readers to a land destroyed by liars, where one woman's truth is the only thing that can save them all.",
  },
  {
    Category: ["Adventure stories", "classics"],
    link: "/w/strangers-in-our-own-land_rashid-khalidi/19782328/",
    img: "https://img.thriftbooks.com/api/images/i/l/C6D3916DE64704B5C73BF5A8DD7488E0313F202D.jpg",
    alt: "History Example Book Cover",
    big: "HISTORY",
    one: "   Military History Books ",
    two: "Modern History Books ",
    three: " Religious History Books  ",
    four: "United States History Books ",
    five: "World History Books ",
    id: 64,

    idOne: 2151009048,
    idTwo: 312566209048,
    author: "Margaret Renkl",

    MoneyName: [
      { price: 31.99, name: "Hardcover" },
      { price: 39.59, name: "Audio CD" },
      { price: 28.99, name: "Paper Back" },
      { price: 9, name: "Mass Market PaperBack" },
    ],

    Overview:
      "Past horrors and evil lurk in Colorado's Overlook Hotel, threatening winter season caretakers Jack Torrance, his wife Wendy, and their young son, Danny. Gifted with the shining, a clairvoyant Danny must battle the darkest evil in the remote hotel in an attempt to save his family from its influence.",
  },
  {
    Category: ["Fairy tales", "fables", "folk tales"],
    link: "/w/the-last-devil-to-die_eden-oneill_osman-richard/39740487/",
    img: "https://img.thriftbooks.com/api/images/i/l/129C1C92E065F79B834E68A859210408419F559E.jpg",
    alt: "Literature &amp; Fiction Example Book Cover",
    big: "LITERATURE & FICTION",
    one: "  Classic Books, Novels & Literature ",
    two: "Contemporary Literature Books ",
    three: "Foreign Language Fiction Books  ",
    four: "Genre Fiction Books ",
    five: "History & Criticism Books ",
    id: 65,

    idOne: 21570023048,
    idTwo: 129192809048,
    author: "Pizaro arealo",

    MoneyName: [
      { price: 21.99, name: "Hardcover" },
      { price: 19.59, name: "Audio CD" },
      { price: 58.99, name: "Paper Back" },
      { price: "", name: "Mass Market PaperBack" },
    ],

    Overview:
      "When you're a quilt instead of a sheet, being a ghost is hard An adorable picture book for fans of Stumpkin and How to Make Friends with a Ghost. Ghosts are supposed to be sheets, light as air and able to whirl and twirl and float and soar. But the little ghost who is a quilt can't whirl or twirl at all, and when he flies, he gets very hot. He doesn't know why he's a quilt. His parents are both sheets, and so are all of his friends. (His great-grandmother was a lace curtain, but that doesn't really help cheer him up.) He feels sad and left out when his friends are zooming around and he can't keep up. But one Halloween, everything changes. The little ghost who was a quilt has an experience that no other ghost could have, an experience that only happens because he's a quilt . . . and he realizes that it's OK to be different.",
  },
  {
    Category: ["Mystery", "Poetry"],
    link: "/w/a-court-of-mist-and-fury_sarah-j-maas/9939222/",
    img: "https://img.thriftbooks.com/api/images/i/l/F62506743473B57A847BDBF07DFD5A0946174290.jpg",
    alt: "Romance Example Book Cover",
    big: "ROMANCE",
    one: "Romantic Fantasy Books",
    two: "Romantic Fantasy Books ",
    three: "Romantic Historical Books  ",
    four: "Romantic Mystery Books ",
    five: "Romantic Sci-Fi Books ",
    id: 66,

    idOne: 42680902048,
    idTwo: 1251868209158,
    author: "lewandio larow",

    MoneyName: [
      { price: 21.19, name: "Hardcover" },
      { price: 69.59, name: "Audio CD" },
      { price: 28.99, name: "Paper Back" },
      { price: "", name: "Mass Market PaperBack" },
    ],
    Overview:
      "A #1 New York Times bestseller Sarah J. Maas's bestselling Crescent City series begins with House of Earth and Blood, which follows the story of half-Fae and half-human Bryce Quinlan as she seeks revenge in a contemporary fantasy world of magic, danger, and searing romance. Bryce Quinlan had the perfect life-working hard all day and partying all night-until a demon murdered her closest friends, leaving her bereft, wounded, and alone. When the accused is behind bars but the crimes start up again, Bryce finds herself at the heart of the investigation. She'll do whatever it takes to avenge their deaths. Hunt Athalar is a notorious Fallen angel, now enslaved to the Archangels he once attempted to overthrow. His brutal skills and incredible strength have been set to one purpose-to assassinate his boss's enemies, no questions asked. But with a demon wreaking havoc in the city, he's offered an irresistible deal: help Bryce find the murderer, and his freedom will be within reach. As Bryce and Hunt dig deep into Crescent City's underbelly, they discover a dark power that threatens everything and everyone they hold dear, and they find, in each other, a blazing passion-one that could set them both free, if they'd only let it. With unforgettable characters, sizzling romance, and page-turning suspense, this richly inventive new fantasy series by #1 New York Times bestselling author Sarah J. Maas delves into the heartache of loss, the price of freedom-and the power of love.",
  },
  {
    Category: ["War"],
    link: "/w/we-have-always-lived-in-the-castle-by-shirley-jackson/260558/",
    img: "https://img.thriftbooks.com/api/images/i/l/A2B29B256F372873AA9BAC63140B5155C1ABC964.jpg",
    alt: "Teen &amp; Young Adult Example Book Cover",
    big: "TEEN & YOUNG ADULT",
    one: "  Teen Fantasy Books ",
    two: "Teen Hobbies Books  ",
    three: "Teen Horror Books  ",
    four: "Teen Romance  ",
    five: "Teen Sci-Fi Books  ",
    id: 67,

    idOne: 2668009048,
    idTwo: 178758209048,
    author: "Alex yoayr",

    MoneyName: [
      { price: 11.99, name: "Hardcover" },
      { price: 29.59, name: "Audio CD" },
      { price: 58.99, name: "Paper Back" },
      { price: "", name: "Mass Market PaperBack" },
    ],

    Overview:
      "NEW YORK TIMES BESTSELLER - A stunning portrait of the enduring grace of friendship (NPR) about the families we are born into, and those that we make for ourselves. A masterful depiction of love in the twenty-first century.NATIONAL BOOK AWARD FINALIST - MAN BOOKER PRIZE FINALIST - WINNER OF THE KIRKUS PRIZE A Little Life follows four college classmates--broke, adrift, and buoyed only by their friendship and ambition--as they move to New York in search of fame and fortune. While their relationships, which are tinged by addiction, success, and pride, deepen over the decades, the men are held together by their devotion to the brilliant, enigmatic Jude, a man scarred by an unspeakable childhood trauma. A hymn to brotherly bonds and a masterful depiction of love in the twenty-first century, Hanya Yanagihara's stunning novel is about the families we are born into, and those that we make for ourselves. Look for Hanya Yanagihara's latest bestselling novel, To Paradise.",
  },
  {
    Category: ["Fantasy"],
    link: "/w/counting-the-cost_jill-duggar_craig-borlase/38831326/",
    img: "https://img.thriftbooks.com/api/images/i/l/EA6A878A2755A87A9B22E7F9063CAA3C7D005DAD.jpg",
    alt: "Biographies &amp; Memoirs Example Book Cover",
    big: "BIOGRAPHIES & MEMOIRS",
    one: "Historical Biographies",
    two: "Leaders & Notable People Biographies",
    three: "Modern Biographies",
    four: "Sports Biographies",
    five: "United States Biographies",
    id: 68,

    idOne: 2125003012,
    idTwo: 1562668007021,
    author: "aregato aishto",

    MoneyName: [
      { price: 30.99, name: "Hardcover" },
      { price: 31.59, name: "Audio CD" },
      { price: 24.99, name: "Paper Back" },
      { price: 9.99, name: "Mass Market PaperBack" },
    ],

    Overview: "Its good",
  },
];

const ShopCategory = () => {
  return (
    <div className={classes.ShopCategory}>
      <h1>Shop by Category</h1>

      <div className={classes.Imiges}>
        {ObjImg.map((item) => {
          return (
            <div className={classes.imagesAndTitles}>
              <Link to={`NonHeader/${item.id}`} state={{ item }}>
                <img
                  className={classes.Img}
                  src={item.img}
                  alt={item.alt}
                ></img>
              </Link>
              <div className={classes.everyH3}>
                <h3 className={classes.bigh3}>
                  <a>{item.big}</a>
                </h3>
                <div className={classes.everyA}>
                  <a>{item.one}</a>
                  <a>{item.two}</a>
                  <a>{item.three}</a>
                  <a>{item.four}</a>
                  <a>{item.five}</a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ShopCategory;

// <div className={classes.titles}>

// <div className={classes.everyH3}>
//   <h3 className={classes.bigh3}>
//     <a>{item.big}</a>
//   </h3>
//   <div className={classes.everyA}>
//     <a>{item.one}</a>
//     <a>{item.two}</a>
//     <a>{item.three}</a>
//     <a>{item.four}</a>
//     <a>{item.five}</a>
//   </div>

// </div>
// </div>
