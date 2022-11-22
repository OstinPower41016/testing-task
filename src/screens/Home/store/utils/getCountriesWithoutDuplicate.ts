import { THints } from "../types";

// eslint-disable-next-line import/no-anonymous-default-export
export default (target: THints) => {
  const countriesList = new Set();
  const countries: THints = [];

  target.forEach((country) => {
    if (!countriesList.has(country.fullName)) {
      countries.push(country);
    }
    countriesList.add(country.fullName);
  });

  return countries;
};
