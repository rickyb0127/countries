export const formatNumberToString = (num) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const mapCurrencies = (currenciesObj) => {
  return Object.keys(currenciesObj).map(key => {
    return currenciesObj[key].name;
  });
};

export const getNativeName = (namesObj) => {
  const namesList = Object.keys(namesObj).map(key => {
    return namesObj[key].common;
  });

  return namesList[0];
};

export const mapLanguages = (languagesObj) => {
  return Object.keys(languagesObj).map(key => {
    return languagesObj[key];
  });
};