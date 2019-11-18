import React from "react";
import { Link } from "react-router-dom";
import "../sass/countryCard.scss";

export default function CountryCard({ country }) {
  const { name, flag, region, capital, population } = country;
  return (
    <article className="card">
      <div className="img-container">
        <Link to={`/country/${name}`}>
          <img className="flag" src={flag} alt={name} />
        </Link>
      </div>
      <div className="country-main-info">
        <h3 className="name">{name}</h3>
        <h5>Population: {population.toLocaleString("en")}</h5>
        <h5>Region: {region}</h5>
        <h5>Capital: {capital}</h5>
      </div>
    </article>
  );
}
