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

    (async () => {
      let currencyService = new CurrencyService();
      const response = await currencyService.getExchagneRate();
      getElements(response, countryInput, amountInput);
    })();
    
    function getElements(responseParam, countryInput, amountInput) {
      if (countryInput === "AUD") {
        $("#output-section").text(responseParam.conversion_rates.AUD * amountInput);
      } else if (countryInput === "GBP") {
        $("#output-section").text(responseParam.conversion_rates.GBP * amountInput);
      } else if (countryInput === "KRW") {
        $("#output-section").text(responseParam.conversion_rates.KRW * amountInput);
      } else if (countryInput === "MXN") {
        $("#output-section").text(responseParam.conversion_rates.MXN * amountInput);
      } else if (countryInput === "HKD") {
        $("#output-section").text(responseParam.conversion_rates.GBP * amountInput);
      } else {
        $("#output-section").text("That wasn't an expected input");
      }
    }
  });
});