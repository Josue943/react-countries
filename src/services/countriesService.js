import http from './httpService'

const apiEndpoint  = 'https://restcountries.eu/rest/v2/'

export function getAllCountries(){
    return http.get(apiEndpoint+'all')
}

export function getAllRegions(){
    const regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']
    return regions
}

export function getCountry(country){
    return http.get(`${apiEndpoint}name/${country}?fullText=true`)
}
