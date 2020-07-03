import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { CurrencyService } from './currency-service.js';
//import { ExchangeFormula } from './exchange-formula.js'

$(document).ready(function () {
  $("form").submit(function() {
    event.preventDefault();
    let countryInput = $("#input-country").val();
    let amountInput = $("#input-amount").val();
    $("#output-section").show();

    (async () => {
      let currencyService = new CurrencyService();
      const response = await currencyService.getExchagneRate();
      getElements(response, countryInput, amountInput);
    })();
    
    function getElements(responseParam, countryInput, amountInput) {
      if (countryInput === "Australia") {
        $("#usd-money").text(amountInput);
        $("#user-country").text(countryInput);
        $("#exchanged-currency").text(responseParam.conversion_rates.AUD * amountInput);
      } else if (countryInput === "England") {
        $("#usd-money").text(amountInput);
        $("#user-country").text(countryInput);
        $("#exchanged-currency").text(responseParam.conversion_rates.GBP * amountInput);
      } else if (countryInput === "South Korea") {
        $("#usd-money").text(amountInput);
        $("#user-country").text(countryInput);
        $("#exchanged-currency").text(responseParam.conversion_rates.KRW * amountInput);
      } else if (countryInput === "Mexico") {
        $("#usd-money").text(amountInput);
        $("#user-country").text(countryInput);
        $("#exchanged-currency").text(responseParam.conversion_rates.MXN * amountInput);
      } else if (countryInput === "Hong Kong") {
        $("#usd-money").text(amountInput);
        $("#user-country").text(countryInput);
        $("#exchanged-currency").text(responseParam.conversion_rates.GBP * amountInput);
      } else {
        $("#output-section").text("That wasn't an expected input");
      }
    }
  });
});