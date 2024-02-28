import classes from "./nonHeader.module.css";
import { useLocation } from "react-router-dom";
import WorkConteiner from "./WorkConteiner";
import MarketingBanner from "./MarketingBanner";

const NonHeader = (props) => {
  const location = useLocation();

  const OBJ = location.state.item;
  console.log(props.lala);
  return (
    <div className={classes.nonHeader}>
      <MarketingBanner />
      <WorkConteiner item={OBJ} />

      {/* <a>
        <div className={classes.Imiges}>
          <div className={classes.imagesAndTitles}>
            <a className={classes.AImg} href={OBJ.link}>
              <img className={classes.Img} src={OBJ.img} alt={OBJ.alt}></img>
            </a>
            <div className={classes.everyH3}>
              <h3 className={classes.bigh3}>
                <a>{OBJ.big}</a>
              </h3>
              <div className={classes.everyA}>
                <a>{OBJ.one}</a>
                <a>{OBJ.two}</a>
                <a>{OBJ.three}</a>
                <a>{OBJ.four}</a>
                <a>{OBJ.five}</a>
              </div>
            </div>
          </div>
        </div>
      </a> */}
    </div>
  );
};

export default NonHeader;
