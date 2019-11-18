import React from "react";
import { Link } from "react-router-dom";
import "../sass/countryDetails.scss";

export default function CountryDetails({
  country,
  languages,
  topLevelDomain,
  currencies,
  borders
}) {
  const {
    name,
    population,
    region,
    capital,
    flag,
    subregion,
    nativeName
  } = country;

  return (
    <div className="container">
      <div className="button-container">
        <Link to={"/"}>
          <button className="button">
            <i className="fas fa-arrow-left"></i>
            <span>Back</span>
          </button>
        </Link>
      </div>
      <div className="detail-container">
        <div className="country-flag">
          <img src={flag} alt={flag} className="flag" />
        </div>

        <div className="country-info">
          <h1>{name}</h1>
          <div className="info">
            <h3>Native Name: {nativeName}</h3>
            <h3>Population: {population}</h3>
            <h3>Region: {region}</h3>
            <h3>Sub Region: {subregion}</h3>
            <h3>Capital: {capital}</h3>
          </div>
          <div className="info-2">
            <h3>Top Level Domain: {topLevelDomain.map(t => t).join(",")} </h3>
            <h3>Currencies: {currencies.map(c => c.name).join(",")} </h3>
            <h3>Languages: {languages.map(l => l.name).join(",")} </h3>
          </div>
          <div className="borders">
            <h1>Borders Countries : </h1>
            <div className="country-borders">
              {borders.map(b => (
                <span key={b}>{b}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
