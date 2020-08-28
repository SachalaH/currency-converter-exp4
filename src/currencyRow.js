import React from "react";

export default function currencyRow(props) {
  const {
    currencyOptions,
    selectedCurrency,
    onChangeCurrency,
    onChangeAmount,
    amount,
  } = props;
  if (amount !== NaN) {
    return (
      <div>
        <input
          type="number"
          className="input"
          value={amount}
          onChange={onChangeAmount}
        />
        <select
          className="select"
          value={selectedCurrency}
          onChange={onChangeCurrency}
        >
          {currencyOptions.map((option) => (
            <option value={option} key={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    );
  }
}
