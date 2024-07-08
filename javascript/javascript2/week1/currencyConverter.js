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
