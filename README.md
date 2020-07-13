# Currency Exchange

#### Currency Exchange, date 2020.07.03

#### _By Sean Downs_
## Description
This program will be able to exchange USD currency to multiple types of other currency with up-to-date exchange rates from the exchangerate-api

## Specifications
**Behavior 1**: The user will be able to select a currecy to be exchanged to the current USD rate
  * Input: Austrailia
  * Output: USD 1 = AUD 1.4442

**Behavior 2**: The user will be able to change the USD number, displaying what that amount would be in country currency
  * Input: Country: Australia; Amount: 100
  * Output: USD 100 = AUD 144.42

## Known Bugs
* Only 5 countries were able to calculate when I intended to have more inplace.   

## Setup/Installation Requirements
To view live website, open your browser in chrome or firefox, DO NOT USE IE. In the addressbar - visit https://spdowns.github.io/currency-exhange

Build Instructions:
In your browser - navigate to https://github.com/SPdowns/currency-exhange and download zip
## Or
In your coding terminal with git - type `git clone https://github.com/SPdowns/currency-exhange`
In your coding terminal, navigate to the cloned folder currency-exchange root folder
Type into the terminal `npm install`
After all dependencies have finsiehd, type into thwe terminal `npm run build`
To view the page live in the brower, type into the terminal `npm start`

## Technologies Used
* Visual Studio Code (code editor)
* HTML
* CSS
* Bootstrap-4.5.0
* JavaScript
* jQuery-3.5.1
* Webpack 4.39.3
* ExchangeCurrency API
* Git
* Node

## License
This software is licensed under the MIT license. Copyright (c) 2020 **_Sean Downs_**