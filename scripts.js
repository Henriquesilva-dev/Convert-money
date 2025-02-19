const convertButton = document.querySelector(".convert-button")
const currencySelectConvert = document.querySelector(".currency-select-to-convert")
const currencySelect = document.querySelector(".currency-select-converted")


function convertValues() {
    const inputCurrencyValue = Number(document.querySelector(".input-currency").value)
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") //Valor à converter
    const currencyValueConverted = document.querySelector(".currency-value-converted") //Valor convertido 

    const dolarToday = 5.2
    const euroToday = 6.2
    const libraToday = 7.17
    const bitcoinToday = 540685.81

    if (currencySelectConvert.value == "Real") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)
    }

    else if (currencySelectConvert.value == "Dolar") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }

    else if (currencySelectConvert.value == "Euro") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }

    else if (currencySelectConvert.value == "Libra") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / euroToday)
    }

    else if (currencySelectConvert.value == "Bitcoin") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC",
            minimumFractionDigits: 8
        }).format(inputCurrencyValue / euroToday)
}


    if (currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }

    if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }

    if (currencySelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-uk", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
    }

    if (currencySelect.value == "bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC",
            minimumFractionDigits: 8
        }).format(inputCurrencyValue / bitcoinToday)
    }

}

function changeCurrency() {
    const currencyName1 = document.getElementById("currency-name")
    const currencyImg1 = document.querySelector(".currency-img")
    const currencyName = document.getElementById("currency-name-converted");
    const currencyImage = document.querySelector(".currency-img-converted");

    if (currencySelectConvert.value === "Dolar") {
        currencyName1.innerHTML = "Dólar Americano";
        currencyImg1.src = "./assets/dolar.png";
    }
    else if (currencySelectConvert.value === "Euro") {
        currencyName1.innerHTML = "Euro";
        currencyImg1.src = "./assets/euro.png";
    }
    else if (currencySelectConvert.value === "Libra") {
        currencyName1.innerHTML = "Libras";
        currencyImg1.src = "./assets/libra.png";
    }
    else if (currencySelectConvert.value === "Bitcoin") {
        currencyName1.innerHTML = "Bitcoin";
        currencyImg1.src = "./assets/bitcoin.png";
    }
    else if (currencySelectConvert.value == "Real") {
        currencyName1.innerHTML = "Real"
        currencyImg1.src = "./assets/real.png"
    }



    if (currencySelect.value === "dolar") {
        currencyName.innerHTML = "Dólar Americano";
        currencyImage.src = "./assets/dolar.png";
    }
    else if (currencySelect.value === "euro") {
        currencyName.innerHTML = "Euro";
        currencyImage.src = "./assets/euro.png";
    }
    else if (currencySelect.value === "libra") {
        currencyName.innerHTML = "Libras";
        currencyImage.src = "./assets/libra.png";
    }
    else if (currencySelect.value === "bitcoin") {
        currencyName.innerHTML = "Bitcoin";
        currencyImage.src = "./assets/bitcoin.png";
    }
    else if (currencySelect.value == "real") {
        currencyName.innerHTML = "Real"
        currencyImage.src = "./assets/real.png"
    }

    convertValues()
}

currencySelectConvert.addEventListener("change", changeCurrency)
currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)


