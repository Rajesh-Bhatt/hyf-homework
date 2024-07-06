// currency-converter-script.js

document.addEventListener("DOMContentLoaded", () => {
  const exRates = {
    timestamp: Date.now(),
    base: "USD",
    date: new Date().toISOString().split("T")[0],
    exRates: {
      USD: 1.23396,
      GBP: 0.882047,
      EUR: 0.923987,
      CAD: 1.36325,
    },
  };

  const addNewRateform = document.getElementById("addNewRateform");
  const convertCurrencyForm = document.getElementById("convertCurrencyForm");
  const updateRateForm = document.getElementById("updateRateForm");
  const addRateResult = document.getElementById("addRateResult");
  const convertCurrencyResult = document.getElementById(
    "convertCurrencyResult"
  );
  const updateRateResult = document.getElementById("updateRateResult");

  addNewRateform.addEventListener("submit", (event) => {
    event.preventDefault();
    const baseCurrency = document
      .getElementById("base-currency")
      .value.toUpperCase();
    const targetCurrency = document
      .getElementById("target-currency")
      .value.toUpperCase();
    const rate = parseFloat(document.getElementById("exchange-rate").value);

    exRates.base = baseCurrency;
    exRates.exRates[targetCurrency] = rate;

    console.log("Inserted new rate:", exRates);
    addRateResult.textContent = `New rate is: 1 ${baseCurrency} = ${rate} ${targetCurrency}`;
  });

  convertCurrencyForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const amount = parseFloat(document.getElementById("amount").value);
    const fromCurrency = document
      .getElementById("from-currency")
      .value.toUpperCase();
    const toCurrency = document
      .getElementById("to-currency")
      .value.toUpperCase();

    if (exRates.base === fromCurrency && exRates.exRates[toCurrency]) {
      const convertedAmount = amount * exRates.exRates[toCurrency];
      convertCurrencyResult.textContent = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(
        2
      )} ${toCurrency}`;
    } else {
      convertCurrencyResult.textContent = "Conversion rate does not exist.";
    }
  });

  updateRateForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const baseCurrency = document
      .getElementById("updateBaseCurrency")
      .value.toUpperCase();
    const targetCurrency = document
      .getElementById("updateTargetCurrency")
      .value.toUpperCase();
    const rate = parseFloat(
      document.getElementById("updateExchangeRate").value
    );

    if (exRates.base === baseCurrency) {
      exRates.exRates[targetCurrency] = rate;
      console.log("Updated rate:", exRates);
      updateRateResult.textContent = `Updated rate: 1 ${baseCurrency} = ${rate} ${targetCurrency}`;
    } else {
      updateRateResult.textContent = `Base currency do not match with the existing base currency: "${exRates.base}"`;
    }
  });
});
