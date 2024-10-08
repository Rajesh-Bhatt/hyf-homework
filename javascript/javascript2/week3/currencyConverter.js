// // JS2 Week1 H.W.
// An array of currency exchange rate object:
const allCurrencyRates = [
  {
    base: "USD",
    exRates: {
      GBP: 0.88204,
      EUR: 0.92398,
      CAD: 1.36325,
      SEK: 10.6651,
      DKK: 7.85436,
    },
  },
  {
    base: "GBP",
    exRates: {
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
      USD: 0.14612,
      GBP: 0.11251,
      EUR: 0.13402,
      CAD: 0.19867,
      SEK: 1.57565,
    },
  },
];

// JS2 Week2 H.W.
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
  if (searchFrom === searchTo) {
    // Special case for identical currencies
    searchResult.textContent = `Your search rate is: 1 ${searchFrom} = 1 ${searchTo}`;
  } else {
    const rateObject = allCurrencyRates.find(
      (rate) => rate.base === searchFrom
    );
    if (rateObject && rateObject.exRates[searchTo]) {
      const rate = rateObject.exRates[searchTo];
      searchResult.textContent = `Your search rate is: 1 ${searchFrom} = ${rate} ${searchTo}`;
      searchResult.style.color = "black";
    } else {
      searchResult.textContent = "Your search currency do not exist!";
      searchResult.style.color = "darkred";
    }
  }
});

// JS2 Week1 H.W.
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

// JS2 Week1 H.W.
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

    if (fromCurrency === toCurrency) {
      const conversionResult = document.getElementById("convertCurrencyResult");

      // Special case for identical currencies
      conversionResult.textContent =
        "Please select different currency to convert!";
    } else {
      if (rateObject && rateObject.exRates[toCurrency]) {
        const convertedAmount = amount * rateObject.exRates[toCurrency];
        const conversionResult = document.getElementById(
          "convertCurrencyResult"
        );
        conversionResult.textContent = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(
          2
        )} ${toCurrency}`;
      } else {
        const conversionResult = document.getElementById(
          "convertCurrencyResult"
        );
        conversionResult.textContent = "Conversion rate not available.";
      }
    }
  });

// JS2 Week1 H.W.
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

// JS2 Week2 H.W.
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

//JS2 Week3 H.W.
// Function to show an announcement when the market open or/and close:
function showAnnouncement(message) {
  const announcementDiv = document.getElementById("announcement");
  announcementDiv.innerText = message;
  console.log(`Announcement: ${message}`);
}

// Function to calculate the time until the next 9 AM or 5 PM
function getNextAnnouncementTime() {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();
  const date = now.getDate();

  const openTime = new Date(year, month, date, 9, 0, 0); // 9 AM today
  const closeTime = new Date(year, month, date, 17, 0, 0); // 5 PM today

  let nextAnnouncement;

  if (now < openTime) {
    nextAnnouncement = openTime;
  } else if (now < closeTime) {
    nextAnnouncement = closeTime;
  } else {
    nextAnnouncement = new Date(year, month, date + 1, 9, 0, 0); // 9 AM next day
  }

  return nextAnnouncement - now; // Time time difference in milliseconds
}

// Schedule the next announcement
function scheduleNextAnnouncement() {
  const timeUntilNextAnnouncement = getNextAnnouncementTime();
  setTimeout(() => {
    const now = new Date();
    if (now.getHours() === 9 && now.getMinutes() === 0) {
      showAnnouncement("The market is now open!");
    } else if (now.getHours() === 17 && now.getMinutes() === 0) {
      showAnnouncement("The market is now closed!");
    }
    // Schedule the next announcement
    scheduleNextAnnouncement();
  }, timeUntilNextAnnouncement);
}

// Initial scheduling
scheduleNextAnnouncement();

// Function to watch currency updates and show a banner message:
function watchCurrencyUpdates() {
  setInterval(() => {
    // Find the object where base currency is USD
    const usdRates = allCurrencyRates.find((rate) => rate.base === "USD");
    if (usdRates) {
      // Get the USD to DKK exchange rate
      const usdToDkkRate = usdRates.exRates["DKK"]; // Get DKK rate from USD rates

      // Check if 1 USD equals 7 DKK or more
      if (usdToDkkRate > 6 && usdToDkkRate < 14) {
        showBanner(
          `1 USD is now ${usdToDkkRate} DKK! Convert now for maximum gain!`
        );
      } else if (usdToDkkRate > 13) {
        showBanner(
          `Wow! 1 USD is now ${usdToDkkRate} DKK! Amazing exchange rate! Convert immediately!`
        );
      }
    }
  }, 30000); // Check every 30 seconds (adjust as needed)
}

// Function to show banner with the hottest currency exchange rate
function showBanner(message) {
  const bannerDiv = document.getElementById("banner");
  bannerDiv.innerText = message;
  bannerDiv.style.display = "block"; // Display the banner
  console.log(`Banner: ${message}`);
}

// Initial call to start watching currency updates
watchCurrencyUpdates();
