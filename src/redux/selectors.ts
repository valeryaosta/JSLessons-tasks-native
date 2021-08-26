import {IGlobalState} from "./state";

export const selectAllCurrencyState = (state: IGlobalState) => state.currency;

//export const selectAllCurrentCurrency = (state: IGlobalState) => state.currency.currentCurrency;