import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { CurrencyService } from './currency-service.js'
import 

$(document).ready(function () {
  $("form").submit(function() {
    event.preventDefault();
    let countryInput = $("#input-country").val()
    let amountInput = $("#input-amount").val()
    (async () => {
      let currencyService = new CurrencyService();
      const response = await currencyService.getExchagneRate();
      getElements(response)
    })();
    function getElements(responseParam) {
      if (countryInput === "AUD") {

        $("#output-section").text
      }