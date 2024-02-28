import Classes from "./mainInput.module.css";
import { FirstContentAlbums } from "../Content/FirstContent";
import { SecondContentAlbums } from "../Content/SecondContent";
import { ThirdContentAlbums } from "../Content/ThirdContent";
import { FourContentAlbums } from "../Content/FourContent";
import { FifthContentAlbums } from "../Content/FifthContent";
import { useState } from "react";
import { Link } from "react-router-dom";
const MainInput = () => {
  const EveryObj = [
    ...FirstContentAlbums,
    // ...SecondContentAlbums,
    // ...ThirdContentAlbums,
    // ...FourContentAlbums,
    // ...FifthContentAlbums,
  ];

  const [inpE, setInptE] = useState("");

  const FilteredEveryObj = EveryObj.filter((item) => {
    if (inpE.length > 0) {
      return item.big.toLowerCase().includes(inpE.toLowerCase());
    } else {
      return false;
    }
  });

  const onChangeHandler = (event) => {
    setInptE(event.target.value);
  };

  const onButtonHandler = () => {};

  const onClickedd = () => {
    setInptE("");
  };

  function CalculatedPrice(jj) {
    const SalePrice = (jj / 100) * 21.65;

    const FinalPricex = jj - SalePrice;

    const FinalPrice = FinalPricex.toFixed(2);

    return FinalPrice;
  }

  return (
    <div className={Classes.MainInputButton}>
      <input
        value={inpE}
        onChange={onChangeHandler}
        type="text"
        placeholder="Search 13 million titles by title, author, or ISBN"
      />
      <button onClick={onButtonHandler}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
        </svg>
      </button>

      {inpE.length > 0 ? (
        <div className={Classes.FilteredInput}>
          {FilteredEveryObj.map((item) => {
            return (
              <div>
                <Link
                  onClick={onClickedd}
                  to={`NonHeader/${item.id}`}
                  state={{ item }}
                >
                  <div key={item.id} className={Classes.FilteredDivs}>
                    <img src={item.img} alt={item.big}></img>
                    <h4>{item.big}</h4>
                    <h5>{item.two}</h5>
                    <p>{CalculatedPrice(item.MoneyName[0].price)}</p>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
export default MainInput;
