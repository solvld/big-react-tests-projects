import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { currenciesData } from '../../data.js';
import { setCurrency } from './currencyFilterSlice.js';

export const CurrencyFilter = () => {
  const dispatch = useDispatch();
  const currencyFilter = useSelector(state => state.currencyFilter);
  const onClickHandler = currency => {
    dispatch(setCurrency(currency));
  };

  return (
    <div id="currency-filters-container">
      <h3>Choose a currency</h3>
      {currenciesData.map(createCurrencyButton)}
    </div>
  );

  function createCurrencyButton(currency) {
    return (
      <button
        className={`currency-button ${
          currencyFilter === currency && 'selected'
        }`}
        key={currency}
        onClick={() => onClickHandler(currency)}
      >
        {currency}
      </button>
    );
  }
};
