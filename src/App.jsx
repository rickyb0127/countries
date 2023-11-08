import { useEffect, useState } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import NavBar from './components/NavBar';
import SearchField from './components/SearchField';
import FilterList from './components/FilterList';
import CountryTiles from './components/CountryTiles';
import CountryDetail from './components/CountryDetail';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { formatNumberToString, mapCurrencies, mapLanguages, getNativeName } from "./assets/helpers";

function App() {
  const [isAppReady, setIsAppReady] = useState(false);
  const [regionFilter, setSelectedRegion] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState(null);
  const [regions, setRegions] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    async function fetchCountries() {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const json = await response.json();

        const countriesList = json.map((country, index) => {
          return {
            id: index + 1,
            name: country.name.common,
            flag: country.flags.svg,
            population: formatNumberToString(country.population),
            region: country.region,
            capital: country.capital,
            currencies: country.currencies ? mapCurrencies(country.currencies) : null,
            nativeName: country.name.nativeName? getNativeName(country.name.nativeName) : null,
            subRegion: country.subregion,
            topLevelDomain: country.tld,
            languages: country.languages ? mapLanguages(country.languages) : null,
            borderCountries: country.borders ? country.borders : null
          }
        });

        let regionsList = countriesList.reduce((currentCountries, country) => {
          if(!currentCountries.some(_country => _country.value === country.region)) {
            currentCountries.push({
              id: currentCountries.length + 1,
              text: country.region,
              value: country.region
            });
          }

          return currentCountries;
        },[]);

        regionsList[0] = {
          id: 0,
          text: "Clear Filter",
          value: null
        };

        setCountries(countriesList);
        setRegions(regionsList);
        setIsAppReady(true);
      } catch(err) {
        console.log(err);
      }
    };

    fetchCountries();
  },[]);

  useEffect(() => {
    if(regionFilter) {
      let countriesList = [...countries];
      if(regionFilter.value) {
        countriesList = countriesList.filter((country) => country.region === regionFilter.value);
      }

      if(searchText) {
        countriesList = countriesList.filter(country => country.name.toLowerCase().includes(searchText.toLowerCase()));
        if(regionFilter.value) {
          countriesList = countriesList.filter((country) => country.region === regionFilter.value);
        }
      }

      setFilteredCountries(countriesList);
    }
  },[regionFilter]);

  useEffect(() => {
    if(searchText) {
      let countriesList = [...countries];
      countriesList = countriesList.filter(country => country.name.toLowerCase().includes(searchText.toLowerCase()));

      if(regionFilter && regionFilter.value) {
        countriesList = countriesList.filter((country) => country.region === regionFilter.value);
        countriesList = countriesList.filter(country => country.name.toLowerCase().includes(searchText.toLowerCase()));
      }

      setFilteredCountries(countriesList);
    }
  },[searchText]);

  return (
    <>
      {isAppReady ? 
        <>
          <NavBar />
          <div className="flex flex-col mobile:px-[20px] tablet:px-[50px] desktop:px-[100px] max-w-[2000px] mx-auto pt-[40px] bg-very-light-gray dark:bg-very-dark-blue">
            <div className="flex mobile:flex-col tablet:flex-row desktop:flex-row mobile:gap-[40px] justify-between">
              {selectedCountry ?
                <div>
                  <button className="h-[50px] w-[125px] items-center dark:bg-dark-blue bg-white dark:text-white rounded shadow-md" onClick={() => {setSelectedCountry(null)}}>
                    <FontAwesomeIcon className="pr-[50px]" icon="fa-solid fa-arrow-left" />
                    Back
                  </button>
                </div> :
                <>
                  <SearchField setSearchText={setSearchText} />
                  <FilterList regionFilter={regionFilter} setSelectedRegion={setSelectedRegion} regions={regions} />
                </>
              }
            </div>
            <div className="flex mobile:justify-center tablet:justify-normal desktop:justify-normal pt-[50px]">
              {selectedCountry ?
                <CountryDetail selectedCountry={selectedCountry} /> :
                <CountryTiles countries={filteredCountries ? filteredCountries : countries} setSelectedCountry={setSelectedCountry} />
              }
            </div>
          </div>
        </> :
        <></>
      }
    </>
  )
}

export default App;
library.add(fab, fas, far);