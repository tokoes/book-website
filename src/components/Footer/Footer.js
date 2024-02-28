import classes from "./footer.module.css";
import FooterPopular from "./FooterPopular";
import FooterWeb from "./FooterWeb";
import FooterMyAcc from "./FooterMyAcc";
import FooterPartnrshps from "./FooterPartnrshps";
import FooterQuickHelp from "./FooterQuickHelp";
import FooterAboutUs from "./FooterAboutUs";
import FooterFollowUs from "./FooterFollowUs";
import FooterThriftBooks from "./FooterThriftBooks";
import FooterEnd from "./FooterEnd";

const Footer = () => {
  return (
    <div className={classes.Footer}>
      <div className={classes.FooterlinksHal}>
        <div>
          <div className={classes.flex}>
            <div>
              <FooterPopular />
              <FooterWeb />
            </div>
            <div>
              <FooterMyAcc />
              <FooterPartnrshps />
            </div>
            <div>
              <FooterQuickHelp />
              <FooterAboutUs />
            </div>
          </div>
          <div className={classes.Thrift}>
            <FooterThriftBooks />
          </div>
        </div>
        <div className={classes.Footersidebar}>
          <h3 className={classes.follow}>Follow Us</h3>
          <FooterFollowUs />
        </div>
      </div>
      <div className={classes.FooterLast}>
        <FooterEnd />
      </div>
    </div>

    // <div className={classes.Footer}>
    //   <div className={classes.FooterlinksHal}>
    //     <div>
    //       <FooterPopular />
    //       <FooterWeb />
    //     </div>
    //     <div>
    //       <FooterMyAcc />
    //       <FooterPartnrshps />
    //     </div>
    //     <div>
    //       <FooterQuickHelp />
    //       <FooterAboutUs />
    //     </div>
    //     <div className={classes.Footersidebar}>
    //       <h3>Follow Us</h3>
    //       <div className={classes.icon}>
    //         <FooterFollowUs />
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Footer;
