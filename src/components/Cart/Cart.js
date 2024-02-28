import classes from "./cart.module.css";
import { useContext, useState } from "react";
import { MyContext } from "../../App";
import { FirstContentAlbums } from "../Content/FirstContent";

const Cart = (props) => {
  const { carts, addToCart, removeFromCart, idEach } = useContext(MyContext);

  const calculatedPrice = (price) => {
    const SalePrice = (price / 100) * 21.65;

    const FinalPricex = price - SalePrice;

    const FinalPrice = FinalPricex.toFixed(2);

    return FinalPrice;
  };

  const totalCartPrice = FirstContentAlbums.reduce((total, product) => {
    if (carts[product.id] !== 0) {
      const SalePrice = (product.MoneyName[0].price / 100) * 21.65;
      const FinalPricex = product.MoneyName[0].price - SalePrice;
      const FinalPrice = parseFloat(FinalPricex.toFixed(2));

      return total + FinalPrice * carts[product.id];
    }
    return total;
  }, 0);

  return (
    <div className={classes.CartBig}>
      <div className={classes.Books}>
        <div>
          {FirstContentAlbums.map((product) => {
            if (carts[product.id] !== 0) {
              return (
                <div className={classes.cartsMap}>
                  <div className={classes.OneTwoThreeD} key={product.id}>
                    <div className={classes.LeftHand}>
                      <img
                        className={classes.imgssss}
                        src={product.img}
                        alt={product.alt}
                      />
                    </div>
                    <div className={classes.MiddleHand}>
                      <p className={classes.BigNamess}>{product.big}</p>
                      <p>{product.author}</p>
                      <p>
                        Condition: <b>{product.format}</b>
                      </p>
                      <p>
                        Language: <b>{product.language}</b>
                      </p>
                      <p>
                        <b> ${calculatedPrice(product.MoneyName[0].price)}</b>
                        each
                      </p>
                    </div>
                    <div>
                      <div className={classes.RigthHand}>
                        <button
                          className={classes.minusBtn}
                          onClick={() => removeFromCart(product.id)}
                        >
                          -
                        </button>
                        <input
                          className={classes.inputValued}
                          value={carts[product.id]}
                        ></input>
                        <button
                          className={classes.pliusBtn}
                          onClick={() => addToCart(product.id)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </div>
        <div className={classes.FinalRigthCalc}>
          <div className={classes.TotalPricesss}>
            <div className={classes.OrderDetails}>
              <h2>Order Details</h2>
            </div>
            <div className={classes.MidlleOrderDetails}>
              <b>
                <p>
                  Welcome, you can choose the book you want and buy it on our
                  site, thank you for using our site
                </p>
              </b>
            </div>

            <div className={classes.InsidePricess}>
              <p>items({idEach})</p>
              <div className={classes.TotalDiv}>
                <b>
                  <p>Total Cart Price: ${totalCartPrice.toFixed(2)}</p>
                </b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
