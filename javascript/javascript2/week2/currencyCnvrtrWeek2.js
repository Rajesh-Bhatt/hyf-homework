// An array of currency exchange rate object:
const allCurrencyRates = [
  {
    base: "USD",
    exRates: {
      USD: 1,
      GBP: 0.88204,
      EUR: 0.92398,
      CAD: 1.36325,
      SEK: 10.6651,
      DKK: 6.85431,
    },
  },
  {
    base: "GBP",
    exRates: {
      GBP: 1,
      USD: 1.23396,
      EUR: 0.92398,
      CAD: 1.36325,
      SEK: 13.8457,
      DKK: 8.88382,
    },
  },
  {
    base: "EUR",
    exRates: {
      EUR: 1,
      USD: 1.23396,
      GBP: 0.88204,
      CAD: 1.36325,
      SEK: 11.4933,
      DKK: 7.46027,
    },
  },
  {
    base: "CAD",
    exRates: {
      CAD: 1,
      USD: 1.23396,
      GBP: 0.88204,
      EUR: 0.92398,
      SEK: 7.81929,
      DKK: 5.03486,
    },
  },
  {
    base: "SEK",
    exRates: {
      SEK: 1,
      USD: 0.09484,
      GBP: 0.07364,
      EUR: 0.08609,
      CAD: 0.01394,
      DKK: 0.64985,
    },
  },
  {
    base: "DKK",
    exRates: {
      DKK: 1,
      USD: 0.14612,
      GBP: 0.11251,
      EUR: 0.13402,
      CAD: 0.19867,
      SEK: 1.57565,
    },
  },
];

// Search function for all currency:
document.getElementById("searchRate").addEventListener("submit", (event) => {
  event.preventDefault();
  const searchFrom = document
    .getElementById("search-from")
    .value.toUpperCase()
    .trim();
  const searchTo = document
    .getElementById("search-to")
    .value.toUpperCase()
    .trim();
  const searchResult = document.getElementById("searchRateResult");

  const rateObject = allCurrencyRates.find((rate) => rate.base === searchFrom);
  if (rateObject && rateObject.exRates[searchTo]) {
    const rate = rateObject.exRates[searchTo];
    searchResult.textContent = `Your search rate is: 1 ${searchFrom} = ${rate} ${searchTo}`;
    searchResult.style.color = "black";
  } else {
    searchResult.textContent = "Your search currency do not exist!";
    searchResult.style.color = "darkred";
  }
});

// New exchange rate creation function:
document
  .getElementById("addNewRateform")
  .addEventListener("submit", (event) => {
    event.preventDefault();
    const baseCurrency = document
      .getElementById("base-currency")
      .value.toUpperCase()
      .trim();
    const targetCurrency = document
      .getElementById("target-currency")
      .value.toUpperCase()
      .trim();
    const rate = parseFloat(document.getElementById("exchange-rate").value);

    let rateObject = allCurrencyRates.find(
      (rate) => rate.base === baseCurrency
    );
    if (!rateObject) {
      rateObject = { base: baseCurrency, exRates: {} };
      allCurrencyRates.push(rateObject);
    }
    rateObject.exRates[targetCurrency] = rate;

    console.log("Inserted new rate is:", allCurrencyRates);
    const addRateResult = document.getElementById("addRateResult");
    addRateResult.textContent = `Inserted new rate: 1 ${baseCurrency} = ${rate} ${targetCurrency}`;
    addRateResult.style.color = "black";
    displayRates(allCurrencyRates);
  });

// Currency conversion function:
document
  .getElementById("convertCurrencyForm")
  .addEventListener("submit", (event) => {
    event.preventDefault();
    const amount = parseFloat(document.getElementById("amount").value);
    const fromCurrency = document
      .getElementById("from-currency")
      .value.toUpperCase()
      .trim();
    const toCurrency = document
      .getElementById("to-currency")
      .value.toUpperCase()
      .trim();
    const rateObject = allCurrencyRates.find(
      (rate) => rate.base === fromCurrency
    );
    if (rateObject && rateObject.exRates[toCurrency]) {
      const convertedAmount = amount * rateObject.exRates[toCurrency];
      const conversionResult = document.getElementById("convertCurrencyResult");
      conversionResult.textContent = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(
        2
      )} ${toCurrency}`;
    } else {
      const conversionResult = document.getElementById("convertCurrencyResult");
      conversionResult.textContent = "Conversion rate not available.";
    }
  });

// Update existing currency rate function:
document
  .getElementById("updateRateForm")
  .addEventListener("submit", (event) => {
    event.preventDefault();
    const baseCurrency = document
      .getElementById("updateBaseCurrency")
      .value.toUpperCase()
      .trim();
    const targetCurrency = document
      .getElementById("updateTargetCurrency")
      .value.toUpperCase()
      .trim();
    const rate = parseFloat(
      document.getElementById("updateExchangeRate").value
    );

    const rateObject = allCurrencyRates.find(
      (rate) => rate.base === baseCurrency
    );
    if (rateObject) {
      rateObject.exRates[targetCurrency] = rate;
      console.log("Updated rate is:", allCurrencyRates);
      const updateConfirmation = document.getElementById("updateRateResult");
      updateConfirmation.textContent = `Updated rate: 1 ${baseCurrency} = ${rate} ${targetCurrency}`;
      updateConfirmation.style.color = "black";
      displayRates(allCurrencyRates);
    } else {
      const updateConfirmation = document.getElementById("updateRateResult");
      updateConfirmation.textContent = `Base currency do not match with any existing base currency.`;
    }
  });

// To show the current rate listing:
function displayRates(ratesArray) {
  const ratesTableBody = document.querySelector("#exRateTable tbody");
  ratesTableBody.innerHTML = "";

  ratesArray.forEach((rateObject) => {
    const baseCurrency = rateObject.base;
    for (const [targetCurrency, rate] of Object.entries(rateObject.exRates)) {
      const rateRow = document.createElement("tr");

      const baseCurrencyCell = document.createElement("td");
      baseCurrencyCell.textContent = baseCurrency;
      rateRow.appendChild(baseCurrencyCell);

      const targetCurrencyCell = document.createElement("td");
      targetCurrencyCell.textContent = targetCurrency;
      rateRow.appendChild(targetCurrencyCell);

      const rateCell = document.createElement("td");
      rateCell.textContent = rate;
      rateRow.appendChild(rateCell);

      ratesTableBody.appendChild(rateRow);
    }
  });
}

displayRates(allCurrencyRates);
