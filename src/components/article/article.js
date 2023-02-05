import "./article.css";
import React from "react";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import nikeLogo from "./nike-logo.jpg";
import adidasLogo from "./adidas-logo.jpg";
import adidasRetro from "./adidas-retro-logo.jpg";
import jordanLogo from "./jordan-logo.png";
import newBalanceLogo from "./new-balance-logo.png";
import pumaLogo from "./puma-logo.jpg";
import vansLogo from "./vans-logo.png";
import reebokLogo from "./reebok-logo.jpg";
import skechersLogo from "./skechers-logo.png";

function BrandsArticle() {
  const logoInfo = {
    [nikeLogo]:
      "Nike is an American multinational corporation that designs, develops, manufactures, and markets footwear, clothes, equipment, and accessories in the whole world. The company is located in the Portland metropolitan area, near Beaverton, Oregon. The company's revenue in the coming year exceeds US$37.4 billion.",
    [adidasLogo]:
      "Adidas is a German multinational corporation that designs and manufactures shoes, clothing and accessories.Adidas' identification mark has been employed as a marketing tool on the company's clothing and shoe designs.",
    [jordanLogo]:
      "Jordan is an American brand of athletic and casual footwear, apparel, and accessories produced by Nike. The brand was launched in 1984, the same year Jordan was drafted by the Chicago Bulls. Jordan Brand produces a wide range of athletic shoes and clothing, including sneakers, t-shirts, sweatshirts, and jackets.",
    [pumaLogo]:
      "Puma is a German multinational corporation that designs and manufactures athletic and casual footwear, apparel and accessories, and is headquartered in Herzogenaurach, Bavaria, Germany.",
    [vansLogo]:
      "Founded in 1966 by James Van Doren, Gordon C Lee, and Paul Van Doren, Vans is a well-known shoe brand. It functions as a subsidiary of VF Corporation.Vans is an American manufacturer of skateboarding shoes and related apparel, based in Santa Ana, California.",
    [newBalanceLogo]:
      "New Balance is an American multinational corporation that specializes in footwear and apparel. The company was founded in 1906 as the New Balance Arch Support Company and is currently based in Boston, Massachusetts.",
    [reebokLogo]:
      "Reebok is an American-inspired global sportswear brand, operating as a subsidiary of German sportsgiant Adidas since 2005.Reebok manufactures and sells apparel and footwear for fitness, running, and CrossFit.",
    [skechersLogo]:
      "Skechers is an American lifestyle and performance footwear company for men, women and children.This brand specialises in both lifestyle and athletic footwear. For its diverse customer base, this well-known company offers about 900 styles and distinguished patterns.",
    [adidasRetro]:
      "Adidas Originals is a sub-brand of the Adidas company that focuses on retro and heritage-inspired clothing, shoes, and accessories. The brand was launched in 1997 and is known for its iconic trefoil logo and 3 stripes design.",
  };

  return (
    <div className="parent-div">
      <div className="rows-container">
        <div className="title-container">
          <h1>Brands we work with</h1>
        </div>
        <div className="row-container">
          <OverlayTrigger
            placement="right"
            delay={{ show: 250, hide: 400 }}
            overlay={
              <Tooltip id="logo-1-tooltip">{logoInfo[nikeLogo]}</Tooltip>
            }
          >
            <img src={nikeLogo} className="logo-image" />
          </OverlayTrigger>
          <OverlayTrigger
            placement="right"
            delay={{ show: 250, hide: 400 }}
            overlay={
              <Tooltip id="logo-1-tooltip">{logoInfo[adidasLogo]}</Tooltip>
            }
          >
            <img src={adidasLogo} className="logo-image" />
          </OverlayTrigger>
          <OverlayTrigger
            placement="right"
            delay={{ show: 250, hide: 400 }}
            overlay={
              <Tooltip id="logo-1-tooltip">{logoInfo[pumaLogo]}</Tooltip>
            }
          >
            <img src={pumaLogo} className="logo-image" />
          </OverlayTrigger>
        </div>
        <div className="row-container">
          <OverlayTrigger
            placement="right"
            delay={{ show: 250, hide: 400 }}
            overlay={
              <Tooltip id="logo-1-tooltip">{logoInfo[newBalanceLogo]}</Tooltip>
            }
          >
            <img src={newBalanceLogo} className="logo-image" />
          </OverlayTrigger>
          <OverlayTrigger
            placement="left"
            delay={{ show: 250, hide: 400 }}
            overlay={
              <Tooltip id="logo-1-tooltip">{logoInfo[jordanLogo]}</Tooltip>
            }
          >
            <img src={jordanLogo} className="logo-image" />
          </OverlayTrigger>

          <OverlayTrigger
            placement="left"
            delay={{ show: 250, hide: 400 }}
            overlay={
              <Tooltip id="logo-1-tooltip">{logoInfo[vansLogo]}</Tooltip>
            }
          >
            <img src={vansLogo} className="logo-image" />
          </OverlayTrigger>
        </div>
        <div className="row-container">
          <OverlayTrigger
            placement="right"
            delay={{ show: 250, hide: 400 }}
            overlay={
              <Tooltip id="logo-1-tooltip">{logoInfo[reebokLogo]}</Tooltip>
            }
          >
            <img src={reebokLogo} className="logo-image" />
          </OverlayTrigger>
          <OverlayTrigger
            placement="right"
            delay={{ show: 250, hide: 400 }}
            overlay={
              <Tooltip id="logo-1-tooltip">{logoInfo[adidasRetro]}</Tooltip>
            }
          >
            <img src={adidasRetro} className="logo-image" />
          </OverlayTrigger>
          <OverlayTrigger
            placement="left"
            delay={{ show: 250, hide: 400 }}
            overlay={
              <Tooltip id="logo-1-tooltip">{logoInfo[skechersLogo]}</Tooltip>
            }
          >
            <img src={skechersLogo} className="logo-image" />
          </OverlayTrigger>
        </div>
      </div>
    </div>
  );
}

export default BrandsArticle;
