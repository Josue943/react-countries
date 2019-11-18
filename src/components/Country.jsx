import React, { Component } from "react";
import { getCountry } from "../services/countriesService";
import CountryDetails from "./CountryDetails";

export default class Country extends Component {
  state = {
    country: [],
    languages: [],
    borders: [],
    currencies: [],
    topLevelDomain: []
  };

  async componentDidMount() {
    await this.getData();
  }

  async getData() {
    const country = this.props.match.params.name;
    try {
      const { data } = await getCountry(country);
      this.setState({
        country: data[0],
        languages: data[0].languages,
        borders: data[0].borders,
        currencies: data[0].currencies,
        topLevelDomain: data[0].topLevelDomain
      });
    } catch (ex) {
      if (ex.response && ex.response.status === 404)
        //si la respuesta es que no existe
        this.props.history.replace("/not-found");
    }
  }

  render() {
    const {
      country,
      languages,
      topLevelDomain,
      currencies,
      borders
    } = this.state;
    return (
      <CountryDetails
        country={country}
        languages={languages}
        borders={borders}
        currencies={currencies}
        topLevelDomain={topLevelDomain}
      />
    );
  }
}
