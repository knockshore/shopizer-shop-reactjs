import PropTypes from "prop-types";
import React from "react";
import { Link } from 'react-router-dom';
// import featureIconData from "../../data/feature-icons/feature-icon-four.json";
// import FeatureIconSingle from "../../components/feature-icon/FeatureIconSingle.js";

const FeatureIcon = ({
  spaceTopClass,
  spaceBottomClass,
  containerClass,
  gutterClass,
  responsiveClass,
  bgImg
}) => {
  return (
    <div
      className={`support-area hm9-section-padding ${
        spaceTopClass ? spaceTopClass : ""
        } ${spaceBottomClass ? spaceBottomClass : ""} ${
        responsiveClass ? responsiveClass : ""
        }`}
      style={
        bgImg
          ? { backgroundImage: `url(${process.env.PUBLIC_URL + bgImg})` }
          : {}
      }
    >
    
  <div className="row" style={{margin: "0px"}}>
          <div className="col-lg-6 col-md-6 col-sm-12" style={{ padding :'0px' }}>
             <div className="single-image">
                <Link to="/category/bois">
                  <img src="/assets/img/bg/super.jpg" className="image" alt=""/>
                  <div className="overlay">
                    <h2>Bois</h2>
                    <small>Visitez nos foyer de bois Pacific Energy, Jotul, Continental et Archguard</small>
                  </div>
                </Link>
            </div> 
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12" style={{ padding :'0px' }}>
             <div className="single-image">
             <Link to="/category/gaz">
                <img src="/assets/img/bg/GF-370-Background.white-copie-1.jpg" className="image" alt=""/>
                <div className="overlay">
                  <h2>Gaz</h2>
                  <small>Visitez nos foyer au gaz Savannah, Pacific Energy, Continental et autres</small>
                </div>
              </Link>
            </div> 
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12" style={{ padding :'0px' }}>
             <div className="single-image">
             <Link to="/category/granule">
                <img src="/assets/img/bg/Piazzetta.jpg" className="image" alt=""/>
                <div className="overlay">
                  <h2>Granules</h2>
                  <small>Visitez nos foyer au granules Piazzetta et Enviro</small>
                </div>
              </Link>
            </div> 
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12" style={{ padding :'0px' }}>
             <div className="single-image">
             <Link to="/category/electrique">
                <img src="/assets/img/bg/BI-72-DEEP-FI-Room.jpg" className="image" alt=""/>
                <div className="overlay">
                  <h2>Électrique</h2>
                  <small>Visitez nos foyer électrique Amantii et Sampli Fire</small>
                </div>
             </Link>
            </div> 
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12" style={{ padding :'0px' }}>
             <div className="single-image">
             <Link to="/friendly-category/bbq">
                <img src="/assets/img/bg/SaffireRouge.jpg" className="image" alt=""/>
                <div className="overlay">
                  <h2>BBQ</h2>
                  <small>Visitez nos BBQ Saffire et Jackson Grills</small>
                </div>
              </Link>
            </div> 
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12" style={{ padding :'0px' }}>
             <div className="single-image">
             <Link to="/category/fournaises">
                <img src="/assets/img/bg/Jotul-03-1024x717.jpg" className="image" alt=""/>
                <div className="overlay">
                  <h2>Fournaises</h2>
                  <small>Visitez nos différentes fournaises</small>
                </div>
              </Link>
            </div> 
          </div>
      </div>
    </div>
  );
};

FeatureIcon.propTypes = {
  bgImg: PropTypes.string,
  containerClass: PropTypes.string,
  gutterClass: PropTypes.string,
  responsiveClass: PropTypes.string,
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string
};

export default FeatureIcon;
