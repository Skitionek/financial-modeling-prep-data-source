# financialModelingPrep
![CI](https://github.com/Skitionek/financial-modeling-prep-data-source/workflows/CI/badge.svg)
![Intergation test](https://github.com/Skitionek/financial-modeling-prep-data-source/workflows/Intergation%20test/badge.svg)

This is a simple wrapper around the [financialModelingPrep API](https://www.financialModelingPrep.co/documentation/) hosted on [NPM](https://www.npmjs.com/package/financialModelingPrep). I have no affiliation with financialModelingPrep.

All contributions are welcome! This is an open source project under the MIT license, see [LICENSE.md](LICENSE.md) for additional information.


## Installation
```bash
npm i financialModelingPrep
```

## Usage

All available functions with this SDK have the same parameters as listed in the the [financialModelingPrep API documentation](https://www.financialModelingPrep.co/documentation/), the functions names reflects endpoint path. For example `https://financialmodelingprep.com/api/v3/company/profile/AAPL` translates to `fmp.company_profile('AAPL')`. Futhermore, as just shown variables in path implemented as positional function arguments while search parameters (everything behind `?`), can be passed in optional dictionary. Example - `https://financialmodelingprep.com/api/v3/historical_price_full/AAPL?serietype=line` can be requested by `fmp.historical_price_full('AAPL',{serietype:'line'})`.

All functions return promises with the response data.

<details>
<summary>Most call options:</summary>

```javascript
const FinancialModelingPrep = require('financial-modeling-prep-data-source');

const fmp = new FinancialModelingPrep();

fmp.company_profile(symbol);

fmp.quote(id);

fmp.search(query, { exchange, limit });

fmp.financial_ratios(symbol);

fmp.financials_income_statement(symbol, { period });
fmp.financials_balance_sheet_statement(symbol, { period });
fmp.financials_cash_flow_statement(symbol, { period });
fmp.financial_statement_growth(symbol, { period });

fmp.enterprise_value(symbol, { period });

fmp.company_key_metrics(symbol, { period });
fmp.company_rating(symbol);
fmp.company_discounted_cash_flow(symbol);
fmp.company_historical_discounted_cash_flow(symbol, { period });
fmp.company_stock_list();

fmp.stock_real_time_price(symbol);
fmp.stock_real_time_price();

/*
	historical_chart_intervals = [
		'1min', '5min', '15min', '30min', '1hour'
	];
*/
fmp.historical_chart(id, { interval });

/*
	historical_price_full_serietypes = [
		'line'
	];

	historical_price_full_groups = [
		'index',
		'commodity',
		'etf',
		'tsx',
		'euronext',
		'mutual_fund',
		'etf',
		'stock_dividend',
		'stock_split',
		'crypto',
		'forex'
	];
*/
fmp.historical_price_full(id, { group, serietype, from, to, timeseries });

fmp.majors_indexes(symbol);
fmp.majors_indexes();

fmp.quotes(id);

fmp.symbol_available_indexes();

fmp.quotes_commodity(commodity);

fmp.historical_chart_PRNT({ interval, PRNT });

/*
	stock_groups = [
		'actives', 'gainers', 'losers', 'sectors-performance'
	];
*/
fmp.stock(group);

fmp.is_the_market_open();

fmp.cryptocurrencies();

fmp.cryptocurrency(symbol);

/*
	symbol_groups = [
		'available-indexes',
		'available-commodities',
		'available-etfs',
		'available-mutual-funds',
		'available-euronext',
		'available-tsx',
		'available-cryptocurrencies',
		'available-forex-currency-pairs'
	];
*/
fmp.symbol(group);

fmp.forex(currency_pair);
fmp.forex();
```
</details>

## Contributing

All contributions are welcome! The purpose of this library is to keep function parity with financialModelingPrep API, while keeping maximum simplicity. Before any pull requests are made, please ensure that all test are passing `npm test`.

## Staying up to date with 

[FinancialModelingPrep API](https://www.financialModelingPrep.co/documentation/) used to change without without any notification from financialModelingPrep side. As there is no official support for this library I have no other way to check if there were any changes than running integration tests.
This integration test is about to be run daily and open issue in case of failure. However, I might overlook some details - please do open issue if this library runs out of sync, or even better send a pull request with fix. 