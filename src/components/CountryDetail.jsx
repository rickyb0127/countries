import { useEffect, useState } from "react";

function CountryDetail(props) {
  const {selectedCountry} = props;

  const [borderCountriesList, setBorderCountriesList] = useState(null); 

  useEffect(() => {
    if(selectedCountry.borderCountries) {
      async function getBorderCountries(countryCodes) {
        try {
          const response = await fetch(`https://restcountries.com/v3.1/alpha?codes=${countryCodes}`);
          const json = await response.json();
          const countryNames = json.map((country) => country.name.common);

          setBorderCountriesList(countryNames);
        } catch(err) {
          console.log(err);
        }
      };
      
      getBorderCountries(selectedCountry.borderCountries);
    }
  },[]);

  return (
    <div className="flex mobile:flex-col tablet:flex-col desktop:flex-row mobile:px-[20px] tablet:px-0 desktop:px-0 dark:text-white w-full items-start">
      <div className="flex max-w-[480px]">
        <img className="h-full" src={selectedCountry.flag} />
      </div>
      <div className="flex flex-col w-full mobile:pt-[40px] tablet:pt-[40px] desktop:pt-0 mobile:pl-0 tablet:pl-0 desktop:pl-[100px] gap-[30px]">
        <div className="flex text-[20px] font-bold">{selectedCountry.name}</div>
        <div className="flex mobile:flex-col tablet:flex-col desktop:flex-row gap-[20px]">
          <div className="flex flex-col mobile:w-[100%] tablet:w-[100%] desktop:w-[50%] gap-[5px]">
            <div className="flex">
              <div className="flex font-semibold pr-[5px]">Native Name:</div>
              <div className="flex">{selectedCountry.nativeName}</div>
            </div>
            <div className="flex">
              <div className="flex font-semibold pr-[5px]">Population:</div>
              <div className="flex">{selectedCountry.population}</div>
            </div>
            <div className="flex">
              <div className="flex font-semibold pr-[5px]">Region:</div>
              <div className="flex">{selectedCountry.region}</div>
            </div>
            <div className="flex">
              <div className="flex font-semibold pr-[5px]">Sub Region:</div>
              <div className="flex">{selectedCountry.subRegion}</div>
            </div>
            <div className="flex">
              <div className="flex font-semibold pr-[5px]">Capital:</div>
              <div className="flex">{selectedCountry.capital}</div>
            </div>
          </div>
          <div className="flex flex-col mobile:w-[100%] tablet:w-[100%] desktop:w-[50%] gap-[5px]">
            <div className="flex">
              <div className="flex font-semibold pr-[5px]">Top Level Domain:</div>
              <div>{selectedCountry.topLevelDomain.map((tld, index) => {
                return (
                  <span key={index}>{tld}{index < selectedCountry.topLevelDomain.length - 1 ? ', ' : ''}</span>
                )
              })}</div>
            </div>
            <div className="flex">
              <div className="flex font-semibold pr-[5px]">Currencies:</div>
              <div>{selectedCountry.currencies.map((currency, index) => {
                return (
                  <span key={index}>{currency}{index < selectedCountry.currencies.length - 1 ? ', ' : ''}</span>
                )
              })}</div>
            </div>
            <div className="flex">
              <div className="flex font-semibold pr-[5px]">Languages:</div>
              <div>{selectedCountry.languages.map((language, index) => {
                return (
                  <span key={index}>{language}{index < selectedCountry.languages.length - 1 ? ', ' : ''}</span>
                )
              })}</div>
            </div>
          </div>
        </div>
        <div className="flex mobile:flex-col tablet:flex-col desktop:flex-row items-baseline">
          <div className="flex font-semibold w-[180px] pr-[30px]">Border Countries:</div>
          <div className="flex gap-[10px] flex-wrap text-center">{borderCountriesList?.map((border, index) => {
            return (
              <span className="flex dark:bg-dark-blue px-[10px] py-[5px] shadow rounded" key={index}>{border}</span>
            )
          })}</div>
        </div>
      </div>
    </div>
  )
}

export default CountryDetail;