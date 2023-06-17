function convertCurrency() {
    // Get input values
    var cadAmount = parseFloat(document.getElementById("cad").value);
    var usdAmount = parseFloat(document.getElementById("usd").value);

    // Check for valid input
    if (isNaN(cadAmount) && isNaN(usdAmount)) {
        alert("Please enter a valid amount in CAD or USD.");
        return;
    }

    // Conversion rates
    var cadToUsdRate = 0.8; // Conversion rate: 1 CAD = 0.8 USD
    var usdToCadRate = 1.25; // Conversion rate: 1 USD = 1.25 CAD

    // Perform conversions
    var convertedUsd = (cadAmount * cadToUsdRate).toFixed(3);
    var convertedCad = (usdAmount * usdToCadRate).toFixed(3);

    // Display the results
    document.getElementById("usd").value = convertedUsd;
    document.getElementById("cad").value = convertedCad;
}
