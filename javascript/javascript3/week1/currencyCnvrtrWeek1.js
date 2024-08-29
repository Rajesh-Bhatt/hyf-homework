// JS3 Week1 H.W.
// An empty array of currency exchange rate:

let allCurrencyRates = [];

// Fetches the latest currency rates from a remote JSON file and updates the currency grid:
async function fetchCurrencyRates() {
  const url =
    "https://raw.githubusercontent.com/Rajesh-Bhatt/Rajesh-Bhatt.github.io/main/data/all-currency-rates.json";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    allCurrencyRates = await response.json();

    renderCurrencyGrid();
  } catch (error) {
    console.error("There has been a problem with your fetch operation:", error);
    displayFetchError(error);
  }
}
document.addEventListener("DOMContentLoaded", fetchCurrencyRates);

// Function to display fetch error if network or resource issue is there:
function displayFetchError(error) {
  const errorMessageElement = document.createElement("div");
  errorMessageElement.textContent = `Error fetching currency rates: ${error.message}`;
  document.body.appendChild(errorMessageElement);
}

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
    renderCurrencyGrid();
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
      renderCurrencyGrid();
    } else {
      const updateConfirmation = document.getElementById("updateRateResult");
      updateConfirmation.textContent = `Base currency do not match with any existing base currency.`;
    }
  });

// JS2 Week2 H.W.
// To show the current rate listing:
function renderCurrencyGrid() {
  const ratesTableBody = document.querySelector("#exRateTable tbody");
  if (!ratesTableBody) {
    console.error("Table body not found");
    return;
  }

  ratesTableBody.innerHTML = ""; //Clear existing rows

  allCurrencyRates.forEach((rateObject) => {
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

//JS2 Week3 H.W.
// Function to show an announcement when the market open or/and close:
function getTimeRemaining(endTime) {
  const now = new Date();
  const timeUntilEvent = endTime - now;
  const hours = Math.floor(timeUntilEvent / (1000 * 60 * 60));
  const minutes = Math.floor((timeUntilEvent % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeUntilEvent % (1000 * 60)) / 1000);
  return { timeUntilEvent, hours, minutes, seconds };
}

function updateCountdownAndStatus(timeUntilEvent, status) {
  const countDown = document.getElementById("countdown");
  const formattedMinutes = String(timeUntilEvent.minutes).padStart(2, "0");
  const formattedSeconds = String(timeUntilEvent.seconds).padStart(2, "0");
  countDown.innerText = `Market is ${status} until next ${timeUntilEvent.hours}h : ${formattedMinutes}m : ${formattedSeconds}s`;
  countDown.style.color = status === "open" ? "darkgreen" : "darkred";
}

function getMarketTimes() {
  const now = new Date();
  const marketOpen = new Date(now);
  const marketClose = new Date(now);

  marketOpen.setHours(9, 0, 0, 0);
  marketClose.setHours(17, 0, 0, 0);

  if (now >= marketClose) {
    marketOpen.setDate(marketOpen.getDate() + 1);
    marketClose.setDate(marketClose.getDate() + 1);
  }

  return { marketOpen, marketClose };
}

function initializeAnnouncements() {
  setInterval(() => {
    const now = new Date();
    const { marketOpen, marketClose } = getMarketTimes();

    if (now >= marketOpen && now < marketClose) {
      const timeRemaining = getTimeRemaining(marketClose);
      updateCountdownAndStatus(timeRemaining, "open");
    } else {
      const timeRemaining = getTimeRemaining(marketOpen);
      updateCountdownAndStatus(timeRemaining, "closed");
    }
  }, 1000);
}

initializeAnnouncements();

/*function showAnnouncement(message) {
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

  return nextAnnouncement - now; // Time difference in milliseconds
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
*/

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
      } else {
        hideBanner();
        console.log("Banner hidden for rate less than 7");
      }
    }
  }, 5000); // Check every 30 seconds (adjust as needed)
}

// Function to show banner with the hottest currency exchange rate
function showBanner(message) {
  const bannerDiv = document.getElementById("banner");
  bannerDiv.innerText = message;
  bannerDiv.style.display = "block"; // Display the banner
  console.log(`Banner: ${message}`);
}

// Function to hide banner with the hottest currency exchange rate
function hideBanner() {
  const bannerDiv = document.getElementById("banner");
  if (banner) {
    bannerDiv.style.display = "none"; // Hides the banner
  }
}

// Initial call to start watching currency updates
watchCurrencyUpdates();
