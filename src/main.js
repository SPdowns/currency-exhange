import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { CurrencyService } from './currency-service.js';

$(document).ready(function () {
  $("form").submit(function() {
    event.preventDefault();
    let countryInput = $("#input-country").val();
    let countryFullName = $("select option:selected").text();
    let amountInput = $("#input-amount").val();
    $("#output-section").show();

    (async () => {
      let currencyService = new CurrencyService();
      const response = await currencyService.getExchangeRate();
      getElements(response, countryInput, amountInput, countryFullName);
    })();
    
    function getElements(responseParam, countryInput, amountInput, countryFullName) {
      if (responseParam === false) {
        $("#output-section").text("That wasn't an expected input");
      } else {
        $("#usd-money").text(amountInput);
        $("#user-country").text(countryFullName);
        $("#exchanged-currency").text(responseParam.conversion_rates[`${countryInput}`] * amountInput)
      }
    }
  });
});