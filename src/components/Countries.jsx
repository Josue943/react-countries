import React, { Component } from "react";
import { getAllCountries, getAllRegions } from "../services/countriesService";
import CountryCard from "./CountryCard";
import "../sass/countries.scss";
import paginate from "./utils/paginate";
import Pagination from "./utils/pagination";
import Searchbox from "./common/SearchBox";
import Select from "./common/Select";

export default class Countries extends Component {
  state = {
    countries: [],
    regions: [],
    pageSize: 20,
    currentPage: 1,
    selectedRegion: null,
    searchQuery: ""
  };

  async componentDidMount() {
    //save countries
    const { data } = await getAllCountries();
    const regions = await getAllRegions();
    this.setState({ countries: data, regions });
  }

  handleRegionSelect = region => {
    this.setState({
      selectedRegion: region,
      searchQuery: "",
      currentPage: 1
    });
  };

  handleSearch = query => {
    this.setState({
      searchQuery: query,
      selectedRegion: "",
      currentPage: 1
    });
  };

  handlePageChange = page => {
    this.setState({
      currentPage: page
    });
  };

  getPagedData = () => {
    const {
      currentPage,
      pageSize,
      countries: allCountries,
      selectedRegion,
      searchQuery
    } = this.state;
    let filtered = allCountries;

    if (searchQuery)
      filtered = allCountries.filter(c =>
        c.name.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
    else if (selectedRegion)
      filtered = allCountries.filter(c => c.region === selectedRegion);

    const countries = paginate(filtered, currentPage, pageSize);

    return { totalCount: filtered.length, data: countries };
  };

  render() {
    const { currentPage, pageSize, searchQuery, regions } = this.state;
    const { totalCount, data } = this.getPagedData();
    return (
      <div className="container">
        <div className="search">
          <Searchbox value={searchQuery} onChance={this.handleSearch} />
          <Select onChanceRegion={this.handleRegionSelect} options={regions} />
        </div>

        <div className="cards">
          {data.map(country => {
            return <CountryCard key={country.name} country={country} />;
          })}
        </div>

        <div className="pagination">
          <Pagination
            itemsCount={totalCount}
            pageSize={pageSize}
            OnPageChange={this.handlePageChange}
            currentPage={currentPage}
          />
        </div>
      </div>
    );
  }
}
