// currencyConverter.js

const exRates = {
  timestamp: Date.now(),
  base: "USD",
  date: new Date().toISOString().split("T")[0],
  exRates: {
    USD: 1.23396,
    GBP: 0.88204,
    EUR: 0.92398,
    CAD: 1.36325,
  },
};

const addNewRateform = document.getElementById("addNewRateform");
const convertCurrencyForm = document.getElementById("convertCurrencyForm");
const updateRateForm = document.getElementById("updateRateForm");
const addRateResult = document.getElementById("addRateResult");
const convertCurrencyResult = document.getElementById("convertCurrencyResult");
const updateRateResult = document.getElementById("updateRateResult");
const searchRateResult = document.getElementById("searchRateResult");

// Search function for currency:
function onRateSearch(event) {
  event.preventDefault();
  const searchFrom = document
    .getElementById("search-from")
    .value.trim()
    .toUpperCase();
  const searchTo = document
    .getElementById("search-to")
    .value.trim()
    .toUpperCase();

  if (exRates.base === searchFrom && exRates.exRates[searchTo]) {
    const searchedRate = exRates.exRates[searchTo];
    searchRateResult.textContent = `Your search rate is: 1${searchFrom} = ${searchedRate} ${searchTo}`;
  } else {
    searchRateResult.textContent = "Your search currency does not exist!!!";
  }
}
document.getElementById("searchRate").onsubmit = onRateSearch;

// New exchange rate creation function:
function onNewRateFormSubmitted(event) {
  event.preventDefault();
  const baseCurrency = document
    .getElementById("base-currency")
    .value.trim()
    .toUpperCase();
  const targetCurrency = document
    .getElementById("target-currency")
    .value.trim()
    .toUpperCase();
  const rate = parseFloat(document.getElementById("exchange-rate").value);

  exRates.base = baseCurrency;
  exRates.exRates[targetCurrency] = rate;

  console.log("Inserted new rate:", exRates);
  addRateResult.textContent = `New rate is: 1 ${baseCurrency} = ${rate} ${targetCurrency}`;
}
document.getElementById("addNewRateform").onsubmit = onNewRateFormSubmitted;

// Currency conversion function:
function onConversionFormSubmitted(event) {
  event.preventDefault();
  const amount = parseFloat(document.getElementById("amount").value);
  const fromCurrency = document
    .getElementById("from-currency")
    .value.trim()
    .toUpperCase();
  const toCurrency = document
    .getElementById("to-currency")
    .value.trim()
    .toUpperCase();

  if (exRates.base === fromCurrency && exRates.exRates[toCurrency]) {
    const convertedAmount = amount * exRates.exRates[toCurrency];
    convertCurrencyResult.textContent = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(
      2
    )} ${toCurrency}`;
  } else {
    convertCurrencyResult.textContent = "Conversion rate does not exist.";
  }
}
document.getElementById("convertCurrencyForm").onsubmit =
  onConversionFormSubmitted;

// Update existing currency rate function:
function onUpdateRateSubmitted(event) {
  event.preventDefault();
  const baseCurrency = document
    .getElementById("updateBaseCurrency")
    .value.trim()
    .toUpperCase();
  const targetCurrency = document
    .getElementById("updateTargetCurrency")
    .value.trim()
    .toUpperCase();
  const rate = parseFloat(document.getElementById("updateExchangeRate").value);

  if (exRates.base === baseCurrency) {
    exRates.exRates[targetCurrency] = rate;
    console.log("Updated rate:", exRates);
    updateRateResult.textContent = `Updated rate: 1 ${baseCurrency} = ${rate} ${targetCurrency}`;
  } else {
    updateRateResult.textContent = `Base currency don't match with the existing base currency: "${exRates.base}"`;
  }
}
document.getElementById("updateRateForm").onsubmit = onUpdateRateSubmitted;

// To show the current rate listing:

document.getElementById("date").textContent = `Rates as of: ${exRates.date}`;

const tableBody = document.querySelector("#exchangeRatesTable tbody");
const rates = exRates.exRates;

for (const [currency, rate] of Object.entries(rates)) {
  const row = document.createElement("tr");
  const currencyCell = document.createElement("td");
  const rateCell = document.createElement("td");

  currencyCell.textContent = currency;
  rateCell.textContent = rate.toFixed(5);

  row.appendChild(currencyCell);
  row.appendChild(rateCell);

  tableBody.appendChild(row);
}
