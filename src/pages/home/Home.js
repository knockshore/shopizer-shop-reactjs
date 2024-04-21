import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import Layout from "../../layouts/Layout";
import HeroSlider from "../../wrappers/hero-slider/HeroSlider";
import TabProduct from "../../wrappers/product/TabProduct";
import FeatureIcon from "../../wrappers/feature-icon/FeatureIcon";
import Promo from "../../wrappers/promos/Promos";
import { multilanguage } from "redux-multilanguage";
import { connect } from "react-redux";

const Home = ({ merchant, strings }) => {
  return (
    <Fragment>
      <MetaTags>
        <title>{merchant.name}</title>
        { <meta
          name="description"
          content="Vente et installation de poêles et foyers au gaz et granules"
        /> }
      </MetaTags>
      <Layout
        headerContainerClass="container-fluid"
        headerPaddingClass="header-padding-2"
        headerTop="visible"
      >
        {/* hero slider */}
        <HeroSlider string={strings} />
        {/* feature icon */}
        <FeatureIcon
        bgImg="/assets/img/bg/shape.png"
        containerClass="container-fluid"
        gutterClass="padding-10-row-col"
        spaceTopClass="pt-20"
        spaceBottomClass="pb-20"
      />
        { /*promos */}
        <Promo
          bgImg=""
          containerClass="container-fluid"
          gutterClass="padding-10-row-col"
          /*spaceTopClass="pt-50"*/
          spaceBottomClass="pb-40"
        />

        <div className="container pt-20 pb-50" >
          <p className="content-size">
          Bienvenue chez <b>Perfecto Gaz</b>, votre partenaire de confiance pour tous vos besoins en chauffage au gaz propane. 
          </p>
          <p className="content-size">
          Depuis 2001, nous nous engageons à fournir des solutions de chauffage fiables, efficaces et respectueuses de l'environnement pour les foyers et les entreprises.
          Que vous envisagiez de remplacer votre système de chauffage existant ou d'installer un nouveau système, notre équipe expérimentée est là pour vous guider à chaque étape du processus. Nous offrons une gamme complète d'appareils de chauffage au gaz propane, soigneusement sélectionnés parmi les meilleures marques de l'industrie, pour répondre à vos besoins spécifiques en matière de confort et d'efficacité énergétique.
          </p><p className="content-size">
          Notre service d'installation est effectué par des techniciens qualifiés et certifiés, garantissant une installation précise et conforme aux normes de sécurité les plus strictes. De plus, nous proposons des services d'entretien régulier pour assurer le bon fonctionnement et la longévité de votre système de chauffage.
          </p><p className="content-size">
          Chez <b>Perfecto Gaz</b>, nous sommes fiers de fournir à nos clients une expérience personnalisée et un service clientèle exceptionnel. Notre objectif est de vous offrir la tranquillité d'esprit en sachant que votre système de chauffage est entre de bonnes mains.
          &nbsp;<a href="/contact">Contactez-nous</a> dès aujourd'hui pour en savoir plus sur nos produits et services de chauffage au gaz propane. Faites le choix de la qualité, de la fiabilité et du confort avec Perfecto Gaz.

        </p>
        </div>

        {/* tab product */}
        <TabProduct
          category="fashion"
          spaceBottomClass="pb-40"
          spaceTopClass="pt-40"
        />

        {/* newsletter */}
        {/**
        <Newsletter
          spaceTopClass="pt-100"
          spaceBottomClass="pb-100"
          subscribeBtnClass="dark-red-subscribe"
        />
        **/}
      </Layout>
    </Fragment>
  );
};


const mapStateToProps = state => {
  return {
    merchant: state.merchantData.merchant
  };
};


export default connect(mapStateToProps, null)(multilanguage(Home));
// export default HomeFashionSeven;
