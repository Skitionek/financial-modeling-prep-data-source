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
export const financial_ratios = { arg: 'AAPL' }
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
	// { arg: '%5EGSPC', interval: '1min' },
	{ arg: '%5EGSPC', interval: '5min' },
	// { arg: '%5EGSPC', interval: '15min' },
	// { arg: '%5EGSPC', interval: '30min' },
	// { arg: '%5EGSPC', interval: '1hour' },
	// { arg: 'ZGUSD', interval: '1min' },
	// { arg: 'ZGUSD', interval: '5min' },
	{ arg: 'ZGUSD', interval: '15min' },
	// { arg: 'ZGUSD', interval: '30min' },
	// { arg: 'ZGUSD', interval: '1hour' },
	// { arg: 'PRNT', interval: '1min' },
	// { arg: 'PRNT', interval: '5min' },
	// { arg: 'PRNT', interval: '15min' },
	{ arg: 'PRNT', interval: '30min' },
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
	//JPYUSD
	//BTCUSD
	//FNV.TO
];
export const historical_price_full = [
	{ arg: 'AAPL' },
	{ arg: 'AAPL', serietype: 'line' },
	{ arg: 'AAPL', from: "2018-03-12", to: "2019-03-12" },
	{ arg: 'AAPL', timeseries: 5 },
	{ arg: ["FB", "GOOG"] },
	{ arg: 'AAPL', group: 'stock_dividend' },
	// { arg: 'AAPL', group: 'stock_split' },
	{ arg: '%5EGSPC', group: 'index' },
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
	{ arg: 'available-forex-currency-pairs' },
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
	// { arg: '%5EGSPC' },
	// { arg: 'ZGUSD' },
	// { arg: 'CLUSD' },
	{ arg: 'HGUSD' },
	{ arg: ['PRNT', 'DFVS', 'VQT'] },
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


// 	`markdown
// ## Company Profile
// Companies profile (Price, Beta, Volume Average, Market Capitalisation, Last Dividend, 52 week range, stock price change, stock price change in percentage, Company Name, Exchange, Description, Industry, Sector, CEO, Website and image). Hourly JSON
// https://financialmodelingprep.com/api/v3/company/profile/AAPL
// ## [Company Rating](/developer/docs/companies-rating-free-api)
// Companies rating. Daily JSON
// [https://financialmodelingprep.com/api/v3/company/rating/AAPL](/api/v3/company/rating/AAPL)
// ## [Company Discounted cash flow value](/developer/docs/companies-dcf-reports-free-api)
// ### [DCF](/developer/docs/companies-dcf-reports-free-api#DCF)
// Companies Discounted cash flow value (intrinsic value). Realtime JSON
// [https://financialmodelingprep.com/api/v3/company/discounted-cash-flow/AAPL](/api/v3/company/discounted-cash-flow/AAPL)
// ### [Historical DCF](/developer/docs/companies-dcf-reports-free-api#Historical-DCF)
// Companies Historical Discounted cash flow value. Annual JSON
// [https://financialmodelingprep.com/api/v3/company/historical-discounted-cash-flow/AAPL](/api/v3/company/historical-discounted-cash-flow/AAPL)
// Companies Historical Discounted cash flow value. Quarter JSON
// [https://financialmodelingprep.com/api/v3/company/historical-discounted-cash-flow/AAPL?period=quarter](/api/v3/company/historical-discounted-cash-flow/AAPL?period=quarter)
// ## [Symbols List](/developer/docs/stock-market-quote-free-api)
// All Companies ticker symbols available in Financial Modeling Prep. High Usage JSON
// [https://financialmodelingprep.com/api/v3/company/stock/list](/api/v3/company/stock/list)
// `;
// const symbol = 'AAPL';
// const quater = { period: 'quater' };
// export const company_profile =
// 	{ symbol };
// export const company_rating =
// 	{ symbol };
// export const company_discounted_cash_flow =
// 	{ symbol };
// export const company_historical_discounted_cash_flow = [
// 	{ symbol, ...quater },
// 	{ symbol }
// ];
//
// `markdown
// ## [Company Financial Statements](/developer/docs/financial-statement-free-api)
// ### [Income Statement](/developer/docs/financial-statement-free-api#Income-Statement)
// Annual income statements. Annual JSON
// [https://financialmodelingprep.com/api/v3/financials/income-statement/AAPL](/api/v3/financials/income-statement/AAPL)
// Quarterly income statements. Quarter JSON
// [https://financialmodelingprep.com/api/v3/financials/income-statement/AAPL?period=quarter](/api/v3/financials/income-statement/AAPL?period=quarter)
// Downloadable Annual/Quarter CSV file:
// [https://financialmodelingprep.com/api/v3/financials/income-statement/AAPL?datatype=csv](/api/v3/financials/income-statement/AAPL?datatype=csv)
// ### [Batch Request Company Financial Statements](/developer/docs/financial-statement-free-api#Batch-Request-Company-Financial-Statements)
// Multiple financial statements. Annual/Quarter JSON
// [https://financialmodelingprep.com/api/v3/financials/income-statement/AAPL,FB,GOOG](/api/v3/financials/income-statement/AAPL,FB,GOOG)
// ### [Balance Sheet Statement](/developer/docs/financial-statement-free-api#Balance-Sheet-Statement)
// Annual balance sheet statements. Annual JSON
// [https://financialmodelingprep.com/api/v3/financials/balance-sheet-statement/AAPL](/api/v3/financials/balance-sheet-statement/AAPL)
// Quarterly balance sheet statements. Quarter JSON
// [https://financialmodelingprep.com/api/v3/financials/balance-sheet-statement/AAPL?period=quarter](/api/v3/financials/balance-sheet-statement/AAPL?period=quarter)
// Downloadable Annual/Quarter CSV file:
// [https://financialmodelingprep.com/api/v3/financials/balance-sheet-statement/AAPL?datatype=csv](/api/v3/financials/balance-sheet-statement/AAPL?datatype=csv)
// ### [Cash Flow Statement](/developer/docs/financial-statement-free-api#Cash-Flow-Statement)
// Annual cash flow statements. Annual JSON
// [https://financialmodelingprep.com/api/v3/financials/cash-flow-statement/AAPL](/api/v3/financials/cash-flow-statement/AAPL)
// Quarterly cash flow statements. Quarter JSON
// [https://financialmodelingprep.com/api/v3/financials/cash-flow-statement/AAPL?period=quarter](/api/v3/financials/cash-flow-statement/AAPL?period=quarter)
// Downloadable Annual Quarter CSV file:
// [https://financialmodelingprep.com/api/v3/financials/cash-flow-statement/AAPL?datatype=csv](/api/v3/financials/cash-flow-statement/AAPL?datatype=csv)
// `;
// export const financials_income_statement = [
// 	{ symbol },
// 	{ symbol, ...quater }
// ];
// export const financials_balance_sheet_statement = [
// 	{ symbol },
// 	{ symbol, ...quater }
// ];
// export const financials_cash_flow_statement = [
// 	{ symbol },
// 	{ symbol, ...quater }
// ];
//
// `markdown
// ## [Company Financial Ratios](/developer/docs/financial-ratio-free-api)
// Company financial ratios (liquidity Measurement Ratios, Profitability Indicator Ratios, Debt Ratios, Operating Performance Ratios, Cash Flow Indicator Ratios and Investment Valuation Ratios). Annual JSON
// [https://financialmodelingprep.com/api/v3/financial-ratios/AAPL](/api/v3/financial-ratios/AAPL)
// `;
// export const financial_ratios = { symbol };
//
// `markdown
// ## [Company Financial Growth](/developer/docs/company-financial-statement-growth-api)
// Company annual financial statement growth. Annual JSON
// [https://financialmodelingprep.com/api/v3/financial-statement-growth/AAPL](/api/v3/financial-statement-growth/AAPL)
// Company quarterly financial statement growth. Quarter JSON
// [https://financialmodelingprep.com/api/v3/financial-statement-growth/AAPL?period=quarter](/api/v3/financial-statement-growth/AAPL?period=quarter)
// `;
//
// export const financial_statement_growth = [
// 	{ symbol },
// 	{ symbol, ...quater }
// ];
//
// `markdown
// ## [Company Enterprise Value](/developer/docs/company-enterprise-value-api)
// Company annual enterprise value. Annual JSON
// [https://financialmodelingprep.com/api/v3/enterprise-value/AAPL](/api/v3/enterprise-value/AAPL)
// Company quarterly enterprise value. Quarter JSON
// [https://financialmodelingprep.com/api/v3/enterprise-value/AAPL?period=quarter](/api/v3/enterprise-value/AAPL?period=quarter)
//
// ## [Company Key Metrics](/developer/docs/company-key-metrics-api)
// Company annual key metrics. Annual JSON
// [https://financialmodelingprep.com/api/v3/company-key-metrics/AAPL](/api/v3/company-key-metrics/AAPL)
// Company quarterly company key metrics. Quarter JSON
// [https://financialmodelingprep.com/api/v3/company-key-metrics/AAPL?period=quarter](/api/v3/company-key-metrics/AAPL?period=quarter)
//
// ## [Stock Price](/developer/docs/realtime-stock-quote-api)
// ### [Stock Realtime Price](/developer/docs/realtime-stock-quote-api#Stock-Realtime-Price)
// Realtime stock price. Realtime JSON
// [https://financialmodelingprep.com/api/v3/stock/real-time-price/AAPL](/api/v3/stock/real-time-price/AAPL)
// ### [Stock Price list](/developer/docs/realtime-stock-quote-api#Stock-Price-list)
// All realtime stock price. Realtime JSON
// [https://financialmodelingprep.com/api/v3/stock/real-time-price](/api/v3/stock/real-time-price)
//
// ## [Stock Historical Price](/developer/docs/historical-stock-data-free-api)
// ### [Historical price](/developer/docs/historical-stock-data-free-api#Historical-price)
// Stock historical prices. Daily JSON
// [https://financialmodelingprep.com/api/v3/historical-price-full/AAPL?serietype=line](/api/v3/historical-price-full/AAPL?serietype=line)
// ### [Historical price with change and volume](/developer/docs/historical-stock-data-free-api#Historical-price-with-change-and-volume)
// Stock historical prices with change and volume. Daily JSON OHLCV
// [https://financialmodelingprep.com/api/v3/historical-price-full/AAPL](/api/v3/historical-price-full/AAPL)
// ### [Historical price with change and volume interval](/developer/docs/historical-stock-data-free-api#Historical-price-with-change-and-volume-interval)
// Time series stock historical prices for a certain interval Daily JSON Range
// [https://financialmodelingprep.com/api/v3/historical-price-full/AAPL?from=2018-03-12&to=2019-03-12](/api/v3/historical-price-full/AAPL?from=2018-03-12to=2019-03-12)
// ### [Historical price with change and volume Time series](/developer/docs/historical-stock-data-free-api#Historical-price-with-change-and-volume-Time-series)
// Time series stock historical prices with change and volume for the last x days. Daily JSON Timeseries
// [https://financialmodelingprep.com/api/v3/historical-price-full/AAPL?timeseries=5](/api/v3/historical-price-full/AAPL?timeseries=5)
// ### [Batch Request Stock Historical price](/developer/docs/historical-stock-data-free-api#Batch-Request-Stock-Historical-price)
// Stock historical prices with change and volume (limited to 3). Daily JSON
// [https://financialmodelingprep.com/api/v3/historical-price-full/AAPL,GOOG,FB](/api/v3/historical-price-full/AAPL,GOOG,FB)
//
//
// ## [Batch Request Stock Companies Price](/developer/docs/companies-batch-request-free-api)
// Multiple companies Prices. High Usage JSON
// [https://financialmodelingprep.com/api/v3/stock/real-time-price/AAPL,FB,GOOG](/api/v3/stock/real-time-price/AAPL,FB,GOOG)
//
// ## [Most of the majors indexes (Dow Jones, Nasdaq, S&P 500)](/developer/docs/indexes-in-stock-market-free-api)
// ### [Majors Indexes List](/developer/docs/indexes-in-stock-market-free-api#Majors-Indexes-List)
// Majors Indexes (Dow Jones, Nasdaq, S&P 500). Realtime JSON
// [https://financialmodelingprep.com/api/v3/majors-indexes](/api/v3/majors-indexes)
// ### [Single Stock Market Index such as Dow Jones](/developer/docs/indexes-in-stock-market-free-api#Single-Stock-Market-Index-such-as-Dow-Jones)
// Stock market index (Dow Jones). Realtime JSON
// [https://financialmodelingprep.com/api/v3/majors-indexes/.DJI](/api/v3/majors-indexes/.DJI)
//
// ## [Most Active Stock Companies](/developer/docs/most-actives-stock-market-data-free-api)
// Most Active Stock Companies. Daily
// [https://financialmodelingprep.com/api/v3/stock/actives](/api/v3/stock/actives)
//
// ## [Most Gainer Stock Companies](/developer/docs/most-gainers-stock-market-data-free-api)
// Most Gainer Stock Companies. Daily
// [https://financialmodelingprep.com/api/v3/stock/gainers](/api/v3/stock/gainers)
//
// ## [Most Loser Stock Companies](/developer/docs/most-losers-stock-market-data-free-api)
// Most Losers Stock Companies. Daily
// [https://financialmodelingprep.com/api/v3/stock/losers](/api/v3/stock/losers)
// `;
//
// `markdown
//
// ## [NYSE Holidays and Trading Hours](/developer/docs/is-the-market-open)
// NYSE: Holidays and Trading Hours. JSON
// [https://financialmodelingprep.com/api/v3/is-the-market-open](/api/v3/is-the-market-open)
//
// ## [Stock Market Sectors Performance](/developer/docs/stock-market-sector-performance-free-api)
// Stock Market Sectors Performance. Hourly JSON
// [https://financialmodelingprep.com/api/v3/stock/sectors-performance](/api/v3/stock/sectors-performance)
// `;
//
//
// `markdown
// ## [Cryptocurrencies](/developer/docs/crypto-currency-free-api)
// ### [Digital and Cryptocurrencies](/developer/docs/crypto-currency-free-api#Digital-and-Cryptocurrencies)
// Wide range of data feed for digital and Cryptocurrencies. Realtime
// [https://financialmodelingprep.com/api/v3/cryptocurrencies](/api/v3/cryptocurrencies)
// ### [Single Cryptocurrency such as Bitcoin](/developer/docs/crypto-currency-free-api#Single-Cryptocurrency-such-as-Bitcoin)
// This API provide a wide range of data feed for digital and crypto currency such as Bitcoin. Realtime
// [https://financialmodelingprep.com/api/v3/cryptocurrency/BTC](/api/v3/cryptocurrency/BTC)
// `;
//
//
// `markdown
// ## [Forex (FX)](/developer/docs/currency-exchange-rate-free-api)
// ### [Forex Currency Exchange Rate (FX)](/developer/docs/currency-exchange-rate-free-api#Forex-Currency-Exchange-Rate-(FX))
// Currency exchange rates (FX). Realtime JSON
// [https://financialmodelingprep.com/api/v3/forex](/api/v3/forex)
// ### [Single Currency such as Euro-dollars (EUR/USD)](/developer/docs/currency-exchange-rate-free-api#Single-Currency-such-as-Euro-dollars-(EUR/USD))
// Currency exchange rate such as Euro-dollars (EUR/USD). Realtime JSON
// [https://financialmodelingprep.com/api/forex/v3/EURUSD](/api/v3/forex/EURUSD)
// `;