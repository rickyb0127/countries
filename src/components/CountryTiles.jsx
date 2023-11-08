function CountryTiles(props) {
  const {countries, setSelectedCountry} = props;

  const countriesView = countries.map((country) => {
    return (
      <div key={country.id} onClick={() => {setSelectedCountry(country)}} className="flex flex-col bg-white dark:bg-dark-blue dark:text-white cursor-pointer shadow-md mobile:h-[400px] tablet:h-[300px] desktop:h-[300px] mobile:w-full tablet:w-[250px] desktop:w-[250px] rounded-md">
        <div className="flex h-[145px]">
          <img className="h-full mx-auto flex self-baseline rounded-t-md" src={country.flag} />
          <div></div>
        </div>
        <div className="flex flex-col pt-[20px] pl-[20px] gap-[10px]">
          <div className="flex font-extrabold">
            {country.name}
          </div>
          <div className="flex flex-col">
            <div className="flex text-[14px]">
              <div className="flex font-semibold pr-[2px]">Population:</div>
              <div className="flex">{country.population}</div>
            </div>
            <div className="flex text-[14px]">
              <div className="flex font-semibold pr-[2px]">Region:</div>
              <div className="flex">{country.region}</div>
            </div>
            <div className="flex text-[14px]">
              <div className="flex font-semibold pr-[2px]">Capital:</div>
              <div className="flex">{country.capital}</div>
            </div>
          </div>
        </div>
      </div>
    )
  });

  return (
    <div className="mobile:flex tablet:grid desktop:grid auto-grid-tiles flex-wrap gap-[40px] justify-between w-full mobile:max-w-[350px] tablet:max-w-none desktop:max-w-none">
      {countriesView}
    </div>
  )
}

export default CountryTiles;