import PropTypes from "prop-types";
import React from "react";
//import { changeLanguage } from "redux-multilanguage";
import { multilanguage } from "redux-multilanguage";
import {Link} from "react-router-dom";
import { connect } from "react-redux";
const LanguageCurrencyChanger = ({
  // currency,
  // setCurrency,
  strings,
  merchant,
  currentLanguageCode,
  dispatch
}) => {
  /**
  const changeLanguageTrigger = e => {
    const languageCode = e.target.value;
    window.location.reload(false)
    dispatch(changeLanguage(languageCode));
  };
  **/

  // const setCurrencyTrigger = e => {
  //   const currencyName = e.target.value;
  //   setCurrency(currencyName);
  // };

  
    /* to be uncommented when 
    /* <div className="language-currency-wrap">
      <div className="same-language-currency language-style">
        <span>
          {currentLanguageCode === "en"
            ? strings["en"]
            : currentLanguageCode === "fr"
              ? strings["fr"]

              : ""}{" "}
          <i className="fa fa-angle-down" />
        </span>
        <div className="lang-car-dropdown">
          <ul>
            {merchant &&
              merchant.supportedLanguages.map((value, i) => {
                return (
                  <li key={i}>
                    <button value={value.code} onClick={e => changeLanguageTrigger(e)}>
                      {strings[value.code]}
                    </button>
                  </li>
                )
              })
            }

          </ul>
        </div>
          </div>*/
   return (
    <div className="language-currency-wrap">
      <div className="same-language-currency" style = {{ padding : 15 }}>
        <p><Link to="/contact">{strings['Call Us']}</Link> : <a href="tel:{merchant.phone}">{merchant.phone}</a></p>
      </div>
    </div>
  );
};

LanguageCurrencyChanger.propTypes = {
  // setCurrency: PropTypes.func,
  // currency: PropTypes.object,
  currentLanguageCode: PropTypes.string,
  dispatch: PropTypes.func,
  strings: PropTypes.object
};

const mapStateToProps = state => {
  return {
    merchant: state.merchantData.merchant
  };
};

const mapDispatchToProps = dispatch => {
  return {
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(multilanguage(LanguageCurrencyChanger));

