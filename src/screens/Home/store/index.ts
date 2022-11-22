import { makeAutoObservable } from "mobx";

import { getCountryByName } from "../../../api/apiService";

import { THints } from "./types";
import getCountriesWithoutDuplicate from "./utils/getCountriesWithoutDuplicate";

class Hints {
  hints: THints | [] = [];
  // ? if you get an empty array after 3 attempts, stop trying
  private _countOfAttemptsRequest = 0;

  constructor() {
    makeAutoObservable(this);
  }

  async getHintsBySearch(search: string, options: { limit: number }) {
    const res = await getCountryByName(search);

    const currentLengthHints = this.hints.length;
    this.hints = getCountriesWithoutDuplicate([...this.hints, ...res]).slice(0, options.limit);
    if (currentLengthHints === this.hints.length) {
      this._countOfAttemptsRequest += 1;
      if (this._countOfAttemptsRequest > 3) {
        return;
      }
    }

    if (this.hints.length < options.limit) {
      this.getHintsBySearch(search, options);
    }
  }

  clearHints() {
    this.hints = [];
    this._countOfAttemptsRequest = 0;
  }
}

export default Hints;
