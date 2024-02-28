import classes from "./workConteiner.module.css";
import { useState } from "react";
import { SecondContentAlbums } from "../components/Content/SecondContent";

import { ThirdContentAlbums } from "../components/Content/ThirdContent";
import { useContext } from "react";
import { MyContext } from "../App";

const FiveThing = [
  { name: "Like New", result: "Unavailable" },
  { name: "Very Good", result: "Unavailable" },
  { name: "Good", result: "Unavailable" },
  { name: "Acceptable", result: "Unavailable" },
  { name: "New", result: 25.85 },
];

const WorkConteiner = (props) => {
  const Editionali = (
    <div className={classes.lalala}>
      Format: {props.item.format}
      <br />
      Language: {props.item.language}
      <br />
      ISBN: {props.item.ISBN}
      <br />
      ISBN13: {props.item.ISBN13}
      <br />
      Release Date: {props.item.releaseDate}
      <br />
      Publisher: {props.item.publisher}
      <br />
      Length: {props.item.length}
      <br />
      Weight: {props.item.weight}
      <br />
      Dimensions: {props.item.dimensions}
      <br />
      Age Range: {props.item.ageRange}
      <br />
      Grade Range: {props.item.gradeRange}
    </div>
  );
  //   const [paper, setPaper] = useState();

  // const HardCoverHandler = () => {
  //   setHardAudio(true);
  // };

  //   const AudioClickHandler = () => {
  //     setHardAudio(false);
  //   };

  //   const PaperBackHandler = () => {};

  //   const MassMarketHandler = () => {};

  const [selectedButton, setSelectedButton] = useState(0);
  const selectedObject = props.item.MoneyName[selectedButton];

  const handleButtonClick = (index) => {
    setSelectedButton(index);
  };

  const FilteredSelectedFormat = props.item.MoneyName.filter((item) => {
    return item.price != "";
  });

  const [threeEdition, setThreeEdition] = useState("Edition Details");

  const SwitchThreeEditionHandler = (text) => {
    setThreeEdition(text);
  };

  //   const filteredArray = FiveThing.filter(
  //     (item) => item.result === "Unavailable"
  //   );

  //   const btnClasses = `${
  //     filteredArray ? classes.FiveButton : classes.FiveButtonTrue
  //   }`;

  //   const FilteredResult = FiveThing.filter((results) => {
  //     // return results.result === "Unavailable";

  //     return results.result.includes("Unavailable");
  //   });
  //   setFilteredFiveThing(FilteredResult);

  //   const Price = props.item.Price;

  //   const FinalPrice = (Price / 21.26) * 100;

  const name = selectedObject.name;

  let price = selectedObject.price;

  const SalePrice = (price / 100) * 21.65;

  const FinalPricex = price - SalePrice;

  const FinalPrice = FinalPricex.toFixed(2);

  // const ShopCategoryMap = props.item.map((item) => {
  //   return item.Category;
  // });

  // const filteredProps = props.item.Category.map((item) => {
  //   return item;
  // });

  const FilteredByCategory = SecondContentAlbums.filter((item) => {
    return item.Category.includes(...props.item.Category);
  });

  // function areArraysEqual(arr1, arr2) {
  //   return (
  //     arr1.length === arr2.length &&
  //     arr1.every((value, index) => value === arr2[index])
  //   );
  // }

  // const ArrayComparisonComponent = () => {
  //   const array1 = props.item.Category;
  //   const array2 = FirstAlbum.map((item) => {
  //     return item.Category;
  //   });
  //   const arraysEqual = areArraysEqual(array1, array2);
  //   console.log(areArraysEqual(array1, array2));
  // };

  // const FilteredAlbum = FirstAlbum.filter((albumItem) => {
  //   return props.item.Category.some((imgItem) =>
  //     imgItem.Category.some((category) => albumItem.Category.includes(category))
  //   );
  // });
  // console.log(FilteredAlbum);

  // const FilteredByCategory = FirstAlbum.filter((item) => {
  //   return item.Category.includes(
  //     props.item.Category.map((item) => {
  //       return item;
  //     })
  //   );
  // });

  // console.log(FilteredByCategory);

  // console.log(FilteredByCategory);

  // var categories = null;

  // for (let i = 0; i < props.item.Category.length; i++) {
  //   categories = props.item.Category[i];
  // }

  // console.log(
  //   FirstAlbumMap.filter((item) => {
  //     return item === ["Love", "Romance"];
  //   })
  // );

  // console.log(FilteredByCategory);

  // var prp = props.item.Category;

  // for (let i = 0; i < prp.length; i++) {
  //   const categories = prp[i];
  //   console.log(categories);
  // }

  //   console.log(categories);

  // const FilteredByCategory = FirstAlbum.filter((item) => {
  //   return item.Category.includes(categories);
  // });

  // }

  // FirstAlbumMap[0]
  const [liked, setLiked] = useState(false);
  const [like, setLike] = useState(0);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const onChangeHandler = (event) => {
    setComment(event.target.value);
  };

  const AddClickComment = () => {
    if (comment.trim() !== "") {
      setComments([{ text: comment, like: 0, liked: false }, ...comments]);
    }
    setComment("");
  };

  const onLikeHandler = (index) => {
    setComments((prevComments) => {
      let newComments = [...prevComments];
      let commentsToUpdate = newComments[index];

      if (commentsToUpdate.liked === false) {
        commentsToUpdate.liked = true;
        commentsToUpdate.like += 1;
      } else if (commentsToUpdate.liked === true) {
        commentsToUpdate.liked = false;
        commentsToUpdate.like -= 1;
      }
      // console.log(
      //   newComments.map((item, arrInd) =>
      //     arrInd === index ? { ...commentsToUpdate } : item
      //   )
      // );
      // console.log(newComments[index]);
      // console.log(newComments);
      // console.log(commentsToUpdate);
      return newComments;
    });
  };

  // knfkasnfkjas fjaskflas njfbsajofb ajobfjoasbfojsabfojasbfobn12e1214
  // const ctx = useContext(MyContext);

  // const AddToCartHandler = () => {
  //   const quantity = parseInt(onSelect, 10);

  //   if (isNaN(quantity) || quantity <= 0) {
  //     // Handle invalid quantity
  //     return;
  //   }

  //   const itemsToAdd = Array.from({ length: quantity }, () => props.item);
  //   ctx.setCarts((prevCarts) => [...prevCarts, ...itemsToAdd]);
  // };
  // console.log(props.item);

  // const [onSelect, setOnSelect] = useState(1);

  // const [report, setReport] = useState(0);

  const [selectedValue, setSelectedValue] = useState("1");
  const onSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };
  // console.log(onSelect);

  const { addToCart, carts, AddCrt } = useContext(MyContext);
  const cartItemAmount = carts[props.item.id];

  return (
    <div className={classes.WorkCont}>
      <div className={classes.WorkHeadCont}>
        <div className={classes.leftHand}>
          <div className={classes.leftImg}>
            <img src={props.item.img} alt={props.item.alt}></img>
          </div>
          <div className={classes.fourIcon}>
            <div className={classes.FcbkIcon}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 320 512"
              >
                <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
              </svg>
            </div>
            <div className={classes.PinterestIcon}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 384 512"
              >
                <path d="M204 6.5C101.4 6.5 0 74.9 0 185.6 0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4 0-9.3-23.7-29.1-23.7-67.8 0-80.4 61.2-137.4 140.4-137.4 68.1 0 118.5 38.7 118.5 109.8 0 53.1-21.3 152.7-90.3 152.7-24.9 0-46.2-18-46.2-43.8 0-37.8 26.4-74.4 26.4-113.4 0-66.2-93.9-54.2-93.9 25.8 0 16.8 2.1 35.4 9.6 50.7-13.8 59.4-42 147.9-42 209.1 0 18.9 2.7 37.5 4.5 56.4 3.4 3.8 1.7 3.4 6.9 1.5 50.4-69 48.6-82.5 71.4-172.8 12.3 23.4 44.1 36 69.3 36 106.2 0 153.9-103.5 153.9-196.8C384 71.3 298.2 6.5 204 6.5z" />
              </svg>
            </div>
            <div className={classes.TwiterIcon}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 512 512"
              >
                <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
              </svg>
            </div>
            <div className={classes.ShareIcon}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 512 512"
              >
                <path d="M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z" />
              </svg>
            </div>
          </div>
          <div className={classes.TwoIds}>
            <p className={classes.justPOne}>
              ISBN: <span className={classes.IdOne}>{props.item.idOne}</span>
            </p>
            <p className={classes.justPTwo}>
              ISBN13: <span className={classes.IdTwo}>{props.item.idTwo}</span>
            </p>
          </div>
        </div>
        <div className={classes.MidHand}>
          <div className={classes.midHead}>
            <h1>{props.item.big}</h1>
            <div className={classes.byATag}>
              by <a href="">{props.item.author}</a>
            </div>
            <div className={classes.SeeCustomerReviews}>
              <div className={classes.stars}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 576 512"
                >
                  <path d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.6 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 576 512"
                >
                  <path d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.6 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 576 512"
                >
                  <path d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.6 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 576 512"
                >
                  <path d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.6 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 576 512"
                >
                  <path d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.6 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z" />
                </svg>
              </div>
              <button className={classes.buttonReviews}>
                See Customer Reviews
              </button>
            </div>
          </div>
          <div className={classes.midSide}>
            <h5>Selected Format</h5>
            <div className={classes.HardcoverAndAudio}>
              {FilteredSelectedFormat.map((item, index) => (
                <button
                  key={index}
                  onClick={() => handleButtonClick(index)}
                  className={
                    item.price === ""
                      ? classes.blur
                      : index === selectedButton
                      ? classes.OneBoxCliced
                      : classes.OneBox
                  }
                >
                  <div className={classes.FirstBox}>
                    <span className={classes.Hardcore}>{item.name}</span>
                    <span className={classes.FirstPrice}>
                      ${calculateFinalPrice(item.price)}
                    </span>
                  </div>
                </button>
              ))}

              {/* <button
              id="1"
              onClick={HardCoverHandler}
              className={hardAudio ? classes.OneBoxCliced : classes.OneBox}
            >
              <div className={classes.FirstBox}>
                <span className={classes.Hardcore}>Hardcover</span>

                <span className={classes.FirstPrice}>${FinalPrice}</span>
              </div>
            </button>
            <button
              id="2"
              onClick={AudioClickHandler}
              className={hardAudio ? classes.TwoBox : classes.TwoBoxClicked}
            >
              <div className={classes.FirstBox}>
                <span className={classes.Hardcore}>Audio CD</span>

                <span className={classes.FirstPrice}>${RightFinalPrice}</span>
              </div>
            </button>
            <button
              id="3"
              onClick={PaperBackHandler}
              className={paper ? classes.TwoBoxClicked : classes.TwoBox}
            >
              <div className={classes.FirstBox}>
                <span className={classes.Hardcore}>Paper Back</span>

                <span className={classes.FirstPrice}>${RightFinalPrice}</span>
              </div>
            </button>
            <button
              id="4"
              onClick={MassMarketHandler}
              className={hardAudio ? classes.TwoBox : classes.TwoBoxClicked}
            >
              <div className={classes.FirstBox}>
                <span className={classes.Hardcore}>Mass Market PaperBack</span>

                <span className={classes.FirstPrice}>${RightFinalPrice}</span>
              </div>
            </button> */}
            </div>
            <div className={classes.SelectCondition}>
              <h5>
                Select Condition
                <img
                  src="https://static.thriftbooks.com/site_images/helpicon.svg"
                  alt="ThriftBooks Help Icon"
                ></img>
              </h5>
            </div>
            <div className={classes.FiveCategory}>
              {/* {FiveThing.filter((name) => {
              return name.result.includes("Unavailable");
            }).map((item) => (
              <button className={classes.FiveButton}>
                <div className={classes.NameResult}>
                  <div className={classes.FiveBoxName}>{item.name}</div>
                  <div className={classes.FiveBoxResult}>{item.result}</div>
                </div>
              </button>
            ))} */}
              {FiveThing.map((item) => {
                return (
                  <button className={classes.FiveButton}>
                    <div className={classes.NameResult}>
                      <div className={classes.FiveBoxName}>{item.name}</div>
                      <div className={classes.FiveBoxResult}>{item.result}</div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
          <div className={classes.downSide}>
            <button className={classes.downSideButton}>
              <div className={classes.BothBookAndOth}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 576 512"
                >
                  <path d="M249.6 471.5c10.8 3.8 22.4-4.1 22.4-15.5V78.6c0-4.2-1.6-8.4-5-11C247.4 52 202.4 32 144 32C93.5 32 46.3 45.3 18.1 56.1C6.8 60.5 0 71.7 0 83.8V454.1c0 11.9 12.8 20.2 24.1 16.5C55.6 460.1 105.5 448 144 448c33.9 0 79 14 105.6 23.5zm76.8 0C353 462 398.1 448 432 448c38.5 0 88.4 12.1 119.9 22.6c11.3 3.8 24.1-4.6 24.1-16.5V83.8c0-12.1-6.8-23.3-18.1-27.6C529.7 45.3 482.5 32 432 32c-58.4 0-103.4 20-123 35.6c-3.3 2.6-5 6.8-5 11V456c0 11.4 11.7 19.3 22.4 15.5z" />
                </svg>
                <div className={classes.SeeAllEd}>
                  See All 3 Editions from $17.10
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 320 512"
                >
                  <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
                </svg>
              </div>
            </button>
          </div>
        </div>
        <div className={classes.RightHand}>
          <div className={classes.inside}>
            <h5>Selected</h5>
            <p className={classes.pTag}>
              Format: <span>{name}</span>
            </p>
            <p className={classes.pTag}>
              Condition: <span>New</span>
            </p>
            <div className={classes.MainPrice}>
              <p className={classes.Dollar}>$</p>
              <span>{FinalPrice}</span>
            </div>
            <p className={classes.SalePrice}>
              Save <span>${SalePrice.toFixed(2)}</span>
            </p>
            <div>
              <p className={classes.LastPrice}>
                List Price <span>${price}</span>
              </p>
              <p className={classes.Available}>50 Available</p>
              <div className={classes.QuantitySelect}>
                <label>
                  <span>Quantity:</span>
                  <div className={classes.selector}>
                    <select
                      value={selectedValue}
                      onChange={onSelectChange}
                      aria-label="Select Drop Down Item"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                        <option key={num} value={num}>
                          {num}
                        </option>
                      ))}
                    </select>
                  </div>
                </label>
              </div>

              <button
                // onClick={AddToCartHandler}
                onClick={() =>
                  AddCrt(props.item.id, parseInt(selectedValue, 10))
                }
                className={classes.AddCartButton}
              >
                <span>Add to Cart</span>
              </button>

              <div className={classes.AddtoWish}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 512 512"
                >
                  <path d="M228.3 469.1L47.6 300.4c-4.2-3.9-8.2-8.1-11.9-12.4h87c22.6 0 43-13.6 51.7-34.5l10.5-25.2 49.3 109.5c3.8 8.5 12.1 14 21.4 14.1s17.8-5 22-13.3L320 253.7l1.7 3.4c9.5 19 28.9 31 50.1 31H476.3c-3.7 4.3-7.7 8.5-11.9 12.4L283.7 469.1c-7.5 7-17.4 10.9-27.7 10.9s-20.2-3.9-27.7-10.9zM503.7 240h-132c-3 0-5.8-1.7-7.2-4.4l-23.2-46.3c-4.1-8.1-12.4-13.3-21.5-13.3s-17.4 5.1-21.5 13.3l-41.4 82.8L205.9 158.2c-3.9-8.7-12.7-14.3-22.2-14.1s-18.1 5.9-21.8 14.8l-31.8 76.3c-1.2 3-4.2 4.9-7.4 4.9H16c-2.6 0-5 .4-7.3 1.1C3 225.2 0 208.2 0 190.9v-5.8c0-69.9 50.5-129.5 119.4-141C165 36.5 211.4 51.4 244 84l12 12 12-12c32.6-32.6 79-47.5 124.6-39.9C461.5 55.6 512 115.2 512 185.1v5.8c0 16.9-2.8 33.5-8.3 49.1z" />
                </svg>
                <span>Add to Wish List</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.BookOverview}>
        <h1>Book Overview</h1>
        <p>{props.item.Overview}</p>
      </div>
      <div className={classes.ThreeEdition}>
        <div className={classes.ThreeBig}>
          <div className={classes.ThreeButton}>
            <button
              className={threeEdition === "Edition Details" && classes.btnthree}
              onClick={() => {
                return SwitchThreeEditionHandler("Edition Details");
              }}
            >
              <p className={classes.btnp}>Edition Details</p>
            </button>
            <button
              className={
                threeEdition === "Professional Reviews" && classes.btnthree
              }
              onClick={() => {
                return SwitchThreeEditionHandler("Professional Reviews");
              }}
            >
              <p className={classes.btnp}>Professional Reviews</p>
            </button>
            <button
              className={threeEdition === "Awards" && classes.btnthree}
              onClick={() => {
                return SwitchThreeEditionHandler("Awards");
              }}
            >
              <p className={classes.btnp}>Awards</p>
            </button>
          </div>
          <p>
            <div>
              {threeEdition === "Edition Details" && Editionali}
              {threeEdition === "Professional Reviews" && (
                <div>{props.item.Professional}</div>
              )}
              {threeEdition === "Awards" && <div>{props.item.Awards}</div>}
            </div>
          </p>
        </div>
      </div>
      <div className={classes.First}>
        <p className={classes.llh2}>You Might Also Enjoy</p>
        <div className={classes.BigFirstContent}>
          {FilteredByCategory.map((item, index) => {
            return (
              <div key={index} className={classes.FirstContent}>
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
      </div>

      <div className={classes.RealatedBig}>
        <h3>Realated Subjects</h3>
        <div className={classes.ReleatedSubject}>
          {props.item.Category.map((item) => {
            return <div className={classes.ReleatedSubjectItem}>{item}</div>;
          })}
        </div>
      </div>
      <div className={classes.MiddBorderrr}></div>

      <div>
        <h1>Customer Reviews</h1>
        <div className={classes.InputButton}>
          <input
            value={comment}
            placeholder="Add a Comment"
            onChange={onChangeHandler}
          ></input>
          <button onClick={AddClickComment}>Add Comment</button>
        </div>
        <div>
          {comments.map((item, index) => {
            return (
              <div key={index} className={classes.Commentsss}>
                <p>{item.text}</p>
                <div className={classes.LikeReport}>
                  <div className={classes.Like}>{item.like}</div>
                  <button
                    className={item.liked ? classes.likeICon : ""}
                    onClick={() => {
                      return onLikeHandler(index);
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 512 512"
                    >
                      <path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" />
                    </svg>
                  </button>
                  <div className={classes.Report}>report</div>
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 448 512"
                    >
                      <path d="M64 32C64 14.3 49.7 0 32 0S0 14.3 0 32V64 368 480c0 17.7 14.3 32 32 32s32-14.3 32-32V352l64.3-16.1c41.1-10.3 84.6-5.5 122.5 13.4c44.2 22.1 95.5 24.8 141.7 7.4l34.7-13c12.5-4.7 20.8-16.6 20.8-30V66.1c0-23-24.2-38-44.8-27.7l-9.6 4.8c-46.3 23.2-100.8 23.2-147.1 0c-35.1-17.6-75.4-22-113.5-12.5L64 48V32z" />
                    </svg>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* akasnfkasnfkanskfnas */}
      <div className={classes.Second}>
        <p className={classes.llh2}>You Might Also Enjoy</p>
        <div className={classes.BigFirstContent}>
          {ThirdContentAlbums.map((item, index) => {
            return (
              <div key={index} className={classes.FirstContent}>
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
      </div>
    </div>
  );
};

function calculateFinalPrice(itemPrice) {
  const SalePrice = (itemPrice / 100) * 21.65;
  const FinalPricex = itemPrice - SalePrice;

  return FinalPricex.toFixed(2);
}

export default WorkConteiner;
