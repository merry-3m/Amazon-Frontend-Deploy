import React, { useContext } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import classes from "./header.module.css";
import "./dropDown.css";
import { useTranslation } from 'react-i18next';
import { DataContext } from "../DataProvider/DataProvider";
import { auth } from '../../Utility/firebase';

const LowerHeader = () => {
  const { t } = useTranslation();
  const [{ user }] = useContext(DataContext);

  const renderUserSection = () => {
    if (user) {
      return (
        <>
          <span className={classes.blockOne}>Hello, {user?.email?.split("@")[0]}</span>
          <span 
            onClick={() => auth.signOut()} 
            className={classes.blockTwo}
          >
            Sign Out
          </span>
        </>
      );
    } else {
      return (
        <span className={classes.blockOne}>{t("header.greeting")}</span>
      );
    }
  };

  return (
    <div className="navbar_panel">
      <button
        className="btn allMenu"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasExample"
        aria-controls="offcanvasExample"
      >
        <span className="menuIcon">
          <AiOutlineMenu size={20} />
        </span>
        <span style={{color:"white"}} className="menuText">{t("header.all")}</span>
      </button>

      <div
        className="offcanvas offcanvas-start"
        tabIndex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="menuProfile">
          <div className="userIcon"></div>
          <div className="userName">
            {renderUserSection()}
          </div>
        </div>
        <button
          type="button"
          className="btn-close text-reset"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
        <div className="menuContainer">
          <ul className="menuSection">
            <li className="heading">{t("lowerHeader.trending")}</li>
            <li className="heading">{t("lowerHeader.bestSeller")}</li>
            <li className="menuContent">{t("lowerHeader.newReleases")}</li>
            <li className="menuContent">{t("lowerHeader.moversShakers")}</li>
          </ul>
          <hr style={{ width: "100%", marginLeft: "0" }} />
          <ul className="menuSection">
            <li className="heading">{t("lowerHeader.digitalContentDevices")}</li>
            <li className="menuContent">{t("lowerHeader.primeVideo")}</li>
            <li className="menuContent">{t("lowerHeader.amazonMusic")}</li>
            <li className="menuContent">{t("lowerHeader.fireTV")}</li>
            <li className="menuContent">{t("lowerHeader.amazonPhotos")}</li>
            <li className="menuContent">{t("lowerHeader.amazonAppStore")}</li>
          </ul>
          <hr style={{ width: "100%", marginLeft: "0" }} />
          <ul className="menuSection">
            <li className="heading">{t("lowerHeader.shopByDepartment")}</li>
            <li className="menuContent">{t("lowerHeader.clothingShoesJewelry")}</li>
            <li className="menuContent">{t("lowerHeader.books")}</li>
            <li className="menuContent">{t("lowerHeader.moviesMusicGames")}</li>
          </ul>
          <hr style={{ width: "100%", marginLeft: "0" }} />
          <ul className="menuSection">
            <li className="heading">{t("lowerHeader.helpSettings")}</li>
            <li className="menuContent">{t("lowerHeader.yourAccount")}</li>
            <li className="menuContent">{t("lowerHeader.customerService")}</li>
            <li className="menuContent" onClick={() => auth.signOut()}>{t("lowerHeader.signOut")}</li>
          </ul>
        </div>
      </div>

      <div className="panel_content">
        <span className="panelText">{t("panel.sameDayDelivery")}</span>
        <span className="panelText">{t("panel.medicalCare")}</span>
        <span className="panelText">{t("panel.liveStreams")}</span>
        <span className="panelText">{t("panel.audible")}</span>
        <span className="panelText">{t("panel.amazonBusiness")}</span>
        <span className="panelText">{t("panel.pharmacy")}</span>
        <span className="panelText">{t("panel.buyAgain")}</span>
        <span className="panelText">{t("panel.subscribeSave")}</span>
        <span className="panelText">{t("panel.amazonBasics")}</span>
        <span className="panelText">{t("panel.tvVideos")}</span>
      </div>
    </div>
  );
};

export default LowerHeader;
