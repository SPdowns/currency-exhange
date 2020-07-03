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
      console.log(responseParam)
      if (responseParam) {
        $("#output-section").append(responseParam.conversion_rates.clp)
      } else {
        $("#output-section").text('In space, no one can hear your response');
      }
    }
  });
});