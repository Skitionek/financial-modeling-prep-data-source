/* DOCUMENT INFORMATION
	- Author: Dominik Maszczyk
	- Email: Skitionek@gmail.com
	- Created: 24/04/2019
*/
export const company_profile = { arg: 'AAPL' };
export const search = { arg: 'AA', limit: 10, exchange: 'NASDAQ' };
export const financials_income_statement = [
	{ arg: 'AAPL' },
	{ arg: 'AAPL', period: 'quater' },
	{ arg: 'AAPL', datatype: 'csv' },
	{ arg: ["FB", "GOOG"] }
];
export const financials_balance_sheet_statement = [
	{ arg: 'AAPL' },
	{ arg: 'AAPL', period: 'quater' },
	{ arg: 'AAPL', datatype: 'csv' }
];
export const financials_cash_flow_statement = [
	{ arg: 'AAPL' },
	{ arg: 'AAPL', period: 'quater' },
	{ arg: 'AAPL', datatype: 'csv' }
];
export const financial_ratios = { arg: 'AAPL' };
export const enterprise_value = [
	{ arg: 'AAPL' },
	{ arg: 'AAPL', period: 'quarter' }
];
export const company_key_metrics = [
	{ arg: 'AAPL' },
	{ arg: 'AAPL', period: 'quarter' }
];
export const financial_statement_growth = [
	{ arg: 'AAPL' },
	{ arg: 'AAPL', period: 'quarter' }
];
export const company_rating = { arg: 'AAPL' };

export const company_discounted_cash_flow = { arg: 'AAPL' };

export const company_historical_discounted_cash_flow = [
	{ arg: 'AAPL' },
	{ arg: 'AAPL', period: 'quarter' }
];
export const company_stock_list = {};

export const stock_real_time_price = [
	{},
	{ arg: ["FB", "GOOG"] },
	{ arg: 'AAPL' }
];
export const historical_chart = [
	{ arg: 'AAPL', interval: '1min' },
	// { arg: 'AAPL', interval: '5min' },
	// { arg: 'AAPL', interval: '15min' },
	// { arg: 'AAPL', interval: '30min' },
	// { arg: 'AAPL', interval: '1hour' },
	// { arg: '^GSPC', interval: '1min' },
	{ arg: '^GSPC', interval: '5min' },
	// { arg: '^GSPC', interval: '15min' },
	// { arg: '^GSPC', interval: '30min' },
	// { arg: '^GSPC', interval: '1hour' },
	// { arg: 'ZGUSD', interval: '1min' },
	// { arg: 'ZGUSD', interval: '5min' },
	{ arg: 'ZGUSD', interval: '15min' },
	// { arg: 'ZGUSD', interval: '30min' },
	// { arg: 'ZGUSD', interval: '1hour' },
	// { arg: 'PRNT', interval: '1min' },
	// { arg: 'PRNT', interval: '5min' },
	// { arg: 'PRNT', interval: '15min' },
	{ arg: 'PRNT', interval: '30min' }
	// { arg: 'PRNT', interval: '1hour' },
	// { arg: 'JMCRX', interval: '1min' },
	// { arg: 'JMCRX', interval: '5min' },
	// { arg: 'JMCRX', interval: '15min' },
	// { arg: 'JMCRX', interval: '30min' },
	// { arg: 'JMCRX', interval: '1hour' },
	// { arg: 'EDF.PA', interval: '1min' },
	// { arg: 'EDF.PA', interval: '5min' },
	// { arg: 'EDF.PA', interval: '15min' },
	// { arg: 'EDF.PA', interval: '30min' },
	// { arg: 'EDF.PA', interval: '1hour' }
	// JPYUSD
	// BTCUSD
	// FNV.TO
];
export const historical_price_full = [
	{ arg: 'AAPL' },
	{ arg: 'AAPL', serietype: 'line' },
	{ arg: 'AAPL', from: "2018-03-12", to: "2019-03-12" },
	{ arg: 'AAPL', timeseries: 5 },
	{ arg: ["FB", "GOOG"] },
	{ arg: 'AAPL', group: 'stock_dividend' },
	// { arg: 'AAPL', group: 'stock_split' },
	{ arg: '^GSPC', group: 'index' },
	// { arg: 'PRNT', group: 'stock_dividend' },
	{ arg: 'PRNT', group: 'stock_split' },
	{ arg: 'JMCRX', group: 'mutual_fund' },
	// { arg: 'JMCRX', group: 'stock_split' },
	{ arg: 'EDF.PA', group: 'euronext' },
	// { arg: 'EDF.PA', group: 'stock_dividend' },
	// { arg: 'EDF.PA', group: 'stock_split' },
	{ arg: 'JMCRX', group: 'stock_split' },
	{ arg: 'FNV.TO', group: 'tsx' },
	// { arg: 'FNV.TO', group: 'stock_dividend' },
	// { arg: 'FNV.TO', group: 'stock_split' },
	{ arg: 'BTCUSD', group: 'crypto' },
	{ arg: 'JPYUSD', group: 'forex' }
];

export const majors_indexes = [{}, { arg: '.DJI' }];
export const symbol = [
	{ arg: 'available-indexes' },
	{ arg: 'available-commodities' },
	{ arg: 'available-etfs' },
	{ arg: 'available-mutual-funds' },
	{ arg: 'available-euronext' },
	{ arg: 'available-tsx' },
	{ arg: 'available-cryptocurrencies' },
	{ arg: 'available-forex-currency-pairs' }
];
export const quotes = [
	{ arg: 'commodity' },
	{ arg: 'etf' },
	{ arg: 'mutual_fund' },
	{ arg: 'crypto' },
	{ arg: 'forex' },
	{ arg: 'index' },
	{ arg: 'tsx' }
];
export const quote = [
	// { arg: ['AAPL', 'FB'] },
	// { arg: '^GSPC' },
	// { arg: 'ZGUSD' },
	// { arg: 'CLUSD' },
	{ arg: 'HGUSD' },
	{ arg: ['PRNT', 'DFVS', 'VQT'] }
	// { arg: ['JMCRX', 'JSMTX', 'JUESX'] },
	// { arg: ['EDF.PA', 'KIN.BR', 'SCB.LS'] },
	// { arg: ['FNV.TO', 'XAW.TO', 'DR.TO'] },
	// { arg: 'BTCUSD' },
	// { arg: 'JPYUSD' },
];
export const stock = [
	{ arg: 'actives' },
	{ arg: 'gainers' },
	{ arg: 'losers' },
	{ arg: 'sectors-performance' }
];

export const is_the_market_open = {};

export const cryptocurrencies = {};
export const cryptocurrency = { arg: 'BTC' };
export const forex = [{}, { arg: 'EURUSD' }];