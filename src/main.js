import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { CurrencyService } from './currency-service.js'

$(document).ready(function () {
  $("form").submit(function() {
    event.preventDefault();
    (async () => {
      let currencyService = new CurrencyService();
      const response = await currencyService.getExchagneRate();
      getElements(response)
    })();
    function getElements(responseParam) {
      console.log(responseParam.conversion_rates.AUD)
      if (responseParam) {
        $("#output-section").text(`look ${responseParam.conversion_rates.($(#country-select))}`)
      } else {
        $("#output-section").text('In space, no one can hear your response');
      }
    }
  });
});