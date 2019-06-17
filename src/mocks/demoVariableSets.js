/* DOCUMENT INFORMATION
	- Author: Dominik Maszczyk
	- Email: Skitionek@gmail.com
	- Created: 24/04/2019
*/
// https://www.financialModelingPrep.co/query?function=TIME_SERIES_INTRADAY&symbol=MSFT&interval=5min&apikey=demo
// https://www.financialModelingPrep.co/query?function=TIME_SERIES_INTRADAY&symbol=MSFT&interval=5min&outputsize=full&apikey=demo
// https://www.financialModelingPrep.co/query?function=TIME_SERIES_DAILY&symbol=MSFT&apikey=demo
// https://www.financialModelingPrep.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=MSFT&apikey=demo
// https://www.financialModelingPrep.co/query?function=TIME_SERIES_DAILY&symbol=MSFT&outputsize=full&apikey=demo
// https://www.financialModelingPrep.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=MSFT&outputsize=full&apikey=demo
// https://www.financialModelingPrep.co/query?function=TIME_SERIES_WEEKLY&symbol=MSFT&apikey=demo
// https://www.financialModelingPrep.co/query?function=TIME_SERIES_WEEKLY_ADJUSTED&symbol=MSFT&apikey=demo
// https://www.financialModelingPrep.co/query?function=TIME_SERIES_MONTHLY&symbol=MSFT&apikey=demo
// https://www.financialModelingPrep.co/query?function=TIME_SERIES_MONTHLY_ADJUSTED&symbol=MSFT&apikey=demo
// https://www.financialModelingPrep.co/query?function=GLOBAL_QUOTE&symbol=MSFT&apikey=demo
// https://www.financialModelingPrep.co/query?function=GLOBAL_QUOTE&symbol=300135.SZ&apikey=demo
// https://www.financialModelingPrep.co/query?function=SYMBOL_SEARCH&keywords=BA&apikey=demo
// https://www.financialModelingPrep.co/query?function=SYMBOL_SEARCH&keywords=Micro&apikey=demo
// https://www.financialModelingPrep.co/query?function=SYMBOL_SEARCH&keywords=sony&apikey=demo
// https://www.financialModelingPrep.co/query?function=SYMBOL_SEARCH&keywords=xiaomi&apikey=demo
const intraday = [{ symbol: "MSFT", interval: "5min" },
	{ symbol: "MSFT", interval: "5min", outputsize: "full" }];
const daily = [{ symbol: "MSFT" },
	{ symbol: "MSFT", outputsize: "full" }];
const weekly = { symbol: "MSFT" };
const monthly = { symbol: "MSFT" };
const timeSeries = [...daily.map(d => ({ ...d, interval: 'daily' })),
	{ ...weekly, interval: 'weekly' },
	{ ...monthly, interval: 'monthly' }];
export const data = {
	intraday,
	daily,
	daily_adjusted: daily,
	weekly,
	weekly_adjusted: weekly,
	monthly,
	monthly_adjusted: monthly,
	quote: [{ symbol: "MSFT" },
		{
			symbol: "300135.SZ"
		}],
	search: [{ keywords: "BA" },
		{ keywords: "Micro" },
		{ keywords: "sony" },
		{ keywords: "xiaomi" }
	],
	exchangeTimeSeries: [...intraday,
		...timeSeries
	],
	exchangeTimeSeries_adjusted: timeSeries
};
// https://www.financialModelingPrep.co/query?function=FX_INTRADAY&from_symbol=EUR&to_symbol=USD&interval=5min&apikey=demo
// https://www.financialModelingPrep.co/query?function=FX_INTRADAY&from_symbol=EUR&to_symbol=USD&interval=5min&outputsize=full&apikey=demo
// https://www.financialModelingPrep.co/query?function=FX_DAILY&from_symbol=EUR&to_symbol=USD&apikey=demo
// https://www.financialModelingPrep.co/query?function=FX_DAILY&from_symbol=EUR&to_symbol=USD&outputsize=full&apikey=demo
// https://www.financialModelingPrep.co/query?function=FX_WEEKLY&from_symbol=EUR&to_symbol=USD&apikey=demo
// https://www.financialModelingPrep.co/query?function=FX_MONTHLY&from_symbol=EUR&to_symbol=USD&apikey=demo
export const ForeignExchangeSymbols = {
	from_symbol: "EUR",
	to_symbol: "USD"
};
export const forex = {
	exchangeRates: [{ from_currency: "BTC", to_currency: "CNY" },
		{ from_currency: "USD", to_currency: "JPY" }
	],
	intraday: [{ ...ForeignExchangeSymbols, interval: "5min" },
		{ ...ForeignExchangeSymbols, interval: "5min", outputsize: "full" }
	],
	daily: [ForeignExchangeSymbols,
		{ ...ForeignExchangeSymbols, outputsize: "full" }
	],
	weekly: ForeignExchangeSymbols,
	monthly: ForeignExchangeSymbols,
	exchangeTimeSeries: [{ ...ForeignExchangeSymbols, interval: "5min" },
		{ ...ForeignExchangeSymbols, interval: "5min", outputsize: "full" },
		{ ...ForeignExchangeSymbols, interval: "daily" },
		{ ...ForeignExchangeSymbols, interval: "daily", outputsize: "full" },
		{ ...ForeignExchangeSymbols, interval: "weekly" },
		{ ...ForeignExchangeSymbols, interval: "monthly" }
	]
};
// https://www.financialModelingPrep.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=BTC&to_currency=CNY&apikey=demo
// https://www.financialModelingPrep.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=USD&to_currency=JPY&apikey=demo
// https://www.financialModelingPrep.co/query?function=DIGITAL_CURRENCY_DAILY&symbol=BTC&market=CNY&apikey=demo
// https://www.financialModelingPrep.co/query?function=DIGITAL_CURRENCY_WEEKLY&symbol=BTC&market=CNY&apikey=demo
// https://www.financialModelingPrep.co/query?function=DIGITAL_CURRENCY_MONTHLY&symbol=BTC&market=CNY&apikey=demo
export const CurrencyExchangeSymbols = {
	symbol: "BTC",
	market: "CNY"
};
export const crypto = {
	exchangeRates: forex.exchangeRates,
	daily: CurrencyExchangeSymbols,
	weekly: CurrencyExchangeSymbols,
	monthly: CurrencyExchangeSymbols,
	exchangeTimeSeries: [{ ...CurrencyExchangeSymbols, interval: "daily" },
		{ ...CurrencyExchangeSymbols, interval: "daily", outputsize: "full" },
		{ ...CurrencyExchangeSymbols, interval: "weekly" },
		{ ...CurrencyExchangeSymbols, interval: "monthly" }
	]
};
// https://www.financialModelingPrep.co/query?function=SMA&symbol=MSFT&interval=weekly&time_period=10&series_type=open&apikey=demo
// https://www.financialModelingPrep.co/query?function=SMA&symbol=USDEUR&interval=weekly&time_period=10&series_type=open&apikey=demo
// https://www.financialModelingPrep.co/query?function=EMA&symbol=MSFT&interval=weekly&time_period=10&series_type=open&apikey=demo
// https://www.financialModelingPrep.co/query?function=EMA&symbol=USDEUR&interval=weekly&time_period=10&series_type=open&apikey=demo
// https://www.financialModelingPrep.co/query?function=WMA&symbol=MSFT&interval=weekly&time_period=10&series_type=open&apikey=demo
// https://www.financialModelingPrep.co/query?function=DEMA&symbol=MSFT&interval=weekly&time_period=10&series_type=open&apikey=demo
// TEMA
// https://www.financialModelingPrep.co/query?function=TEMA&symbol=MSFT&interval=weekly&time_period=10&series_type=open&apikey=demo
// TRIMA
// https://www.financialModelingPrep.co/query?function=TRIMA&symbol=MSFT&interval=weekly&time_period=10&series_type=open&apikey=demo
// https://www.financialModelingPrep.co/query?function=KAMA&symbol=MSFT&interval=weekly&time_period=10&series_type=open&apikey=demo
// https://www.financialModelingPrep.co/query?function=MAMA&symbol=MSFT&interval=daily&series_type=close&fastlimit=0.02&apikey=demo
// https://www.financialModelingPrep.co/query?function=VWAP&symbol=MSFT&interval=15min&apikey=demo
// T3
// https://www.financialModelingPrep.co/query?function=T3&symbol=MSFT&interval=weekly&time_period=10&series_type=open&apikey=demo
// https://www.financialModelingPrep.co/query?function=MACD&symbol=MSFT&interval=daily&series_type=open&apikey=demo
// https://www.financialModelingPrep.co/query?function=MACD&symbol=USDEUR&interval=weekly&series_type=open&apikey=demo
// https://www.financialModelingPrep.co/query?function=MACDEXT&symbol=MSFT&interval=daily&series_type=open&apikey=demo
// https://www.financialModelingPrep.co/query?function=STOCH&symbol=MSFT&interval=daily&apikey=demo
// https://www.financialModelingPrep.co/query?function=STOCH&symbol=USDEUR&interval=weekly&apikey=demo
// https://www.financialModelingPrep.co/query?function=STOCHF&symbol=MSFT&interval=daily&apikey=demo
// https://www.financialModelingPrep.co/query?function=RSI&symbol=MSFT&interval=weekly&time_period=10&series_type=open&apikey=demo
// https://www.financialModelingPrep.co/query?function=RSI&symbol=USDEUR&interval=weekly&time_period=10&series_type=open&apikey=demo
// https://www.financialModelingPrep.co/query?function=STOCHRSI&symbol=MSFT&interval=daily&time_period=10&series_type=close&fastkperiod=6&fastdmatype=1&apikey=demo
// https://www.financialModelingPrep.co/query?function=WILLR&symbol=MSFT&interval=daily&time_period=10&apikey=demo
// https://www.financialModelingPrep.co/query?function=ADX&symbol=MSFT&interval=daily&time_period=10&apikey=demo
// https://www.financialModelingPrep.co/query?function=ADX&symbol=USDEUR&interval=weekly&time_period=10&apikey=demo
// https://www.financialModelingPrep.co/query?function=ADXR&symbol=MSFT&interval=daily&time_period=10&apikey=demo
// https://www.financialModelingPrep.co/query?function=APO&symbol=MSFT&interval=daily&series_type=close&fastperiod=10&matype=1&apikey=demo
// PPO
// https://www.financialModelingPrep.co/query?function=PPO&symbol=MSFT&interval=daily&series_type=close&fastperiod=10&matype=1&apikey=demo
// https://www.financialModelingPrep.co/query?function=MOM&symbol=MSFT&interval=daily&time_period=10&series_type=close&apikey=demo
// https://www.financialModelingPrep.co/query?function=BOP&symbol=MSFT&interval=daily&apikey=demo
// https://www.financialModelingPrep.co/query?function=CCI&symbol=MSFT&interval=daily&time_period=10&apikey=demo
// https://www.financialModelingPrep.co/query?function=CCI&symbol=USDEUR&interval=weekly&time_period=10&apikey=demo
// https://www.financialModelingPrep.co/query?function=CMO&symbol=MSFT&interval=weekly&time_period=10&series_type=close&apikey=demo
// https://www.financialModelingPrep.co/query?function=ROC&symbol=MSFT&interval=weekly&time_period=10&series_type=close&apikey=demo
// https://www.financialModelingPrep.co/query?function=ROCR&symbol=MSFT&interval=daily&time_period=10&series_type=close&apikey=demo
// https://www.financialModelingPrep.co/query?function=AROON&symbol=MSFT&interval=daily&time_period=14&apikey=demo
// https://www.financialModelingPrep.co/query?function=AROON&symbol=USDEUR&interval=weekly&time_period=14&apikey=demo
// https://www.financialModelingPrep.co/query?function=AROONOSC&symbol=MSFT&interval=daily&time_period=10&apikey=demo
// https://www.financialModelingPrep.co/query?function=MFI&symbol=MSFT&interval=weekly&time_period=10&apikey=demo
// TRIX
// https://www.financialModelingPrep.co/query?function=TRIX&symbol=MSFT&interval=daily&time_period=10&series_type=close&apikey=demo
// https://www.financialModelingPrep.co/query?function=ULTOSC&symbol=MSFT&interval=daily&timeperiod1=8&apikey=demo
// https://www.financialModelingPrep.co/query?function=DX&symbol=MSFT&interval=daily&time_period=10&apikey=demo
// https://www.financialModelingPrep.co/query?function=MINUS_DI&symbol=MSFT&interval=weekly&time_period=10&apikey=demo
// PLUS_DI
// https://www.financialModelingPrep.co/query?function=PLUS_DI&symbol=MSFT&interval=daily&time_period=10&apikey=demo
// https://www.financialModelingPrep.co/query?function=MINUS_DM&symbol=MSFT&interval=daily&time_period=10&apikey=demo
// PLUS_DM
// https://www.financialModelingPrep.co/query?function=PLUS_DM&symbol=MSFT&interval=daily&time_period=10&apikey=demo
// https://www.financialModelingPrep.co/query?function=BBANDS&symbol=MSFT&interval=weekly&time_period=5&series_type=close&nbdevup=3&nbdevdn=3&apikey=demo
// https://www.financialModelingPrep.co/query?function=BBANDS&symbol=USDEUR&interval=weekly&time_period=5&series_type=close&nbdevup=3&nbdevdn=3&apikey=demo
// https://www.financialModelingPrep.co/query?function=MIDPOINT&symbol=MSFT&interval=daily&time_period=10&series_type=close&apikey=demo
// https://www.financialModelingPrep.co/query?function=MIDPRICE&symbol=MSFT&interval=daily&time_period=10&apikey=demo
// https://www.financialModelingPrep.co/query?function=SAR&symbol=MSFT&interval=weekly&acceleration=0.05&maximum=0.25&apikey=demo
// TRANGE
// https://www.financialModelingPrep.co/query?function=TRANGE&symbol=MSFT&interval=daily&apikey=demo
// https://www.financialModelingPrep.co/query?function=ATR&symbol=MSFT&interval=daily&time_period=14&apikey=demo
// https://www.financialModelingPrep.co/query?function=NATR&symbol=MSFT&interval=weekly&time_period=14&apikey=demo
// https://www.financialModelingPrep.co/query?function=AD&symbol=MSFT&interval=daily&apikey=demo
// https://www.financialModelingPrep.co/query?function=ADOSC&symbol=MSFT&interval=daily&fastperiod=5&apikey=demo
// https://www.financialModelingPrep.co/query?function=OBV&symbol=MSFT&interval=weekly&apikey=demo
// HT_TRENDLINE
// https://www.financialModelingPrep.co/query?function=HT_TRENDLINE&symbol=MSFT&interval=daily&series_type=close&apikey=demo
// HT_SINE
// https://www.financialModelingPrep.co/query?function=HT_SINE&symbol=MSFT&interval=daily&series_type=close&apikey=demo
// HT_TRENDMODE
// https://www.financialModelingPrep.co/query?function=HT_TRENDMODE&symbol=MSFT&interval=weekly&series_type=close&apikey=demo
// HT_DCPERIOD
// https://www.financialModelingPrep.co/query?function=HT_DCPERIOD&symbol=MSFT&interval=daily&series_type=close&apikey=demo
// HT_DCPHASE
// https://www.financialModelingPrep.co/query?function=HT_DCPHASE&symbol=MSFT&interval=daily&series_type=close&apikey=demo
// HT_PHASOR
// https://www.financialModelingPrep.co/query?function=HT_PHASOR&symbol=MSFT&interval=weekly&series_type=close&apikey=demo
export const technical = {
	sma: { symbol: 'MSFT', interval: 'weekly', time_period: 10, series_type: 'open' },
	ema: { symbol: 'MSFT', interval: 'weekly', time_period: 10, series_type: 'open' },
	wma: { symbol: 'MSFT', interval: 'weekly', time_period: 10, series_type: 'open' },
	dema: { symbol: 'MSFT', interval: 'weekly', time_period: 10, series_type: 'open' },
	tema: { symbol: 'MSFT', interval: 'weekly', time_period: 10, series_type: 'open' },
	trima: { symbol: 'MSFT', interval: 'weekly', time_period: 10, series_type: 'open' },
	kama: { symbol: 'MSFT', interval: 'weekly', time_period: 10, series_type: 'open' },
	mama: { symbol: 'MSFT', interval: 'daily', series_type: 'close', fastlimit: 0.02 },
	vwap: { symbol: 'MSFT', interval: '15min' },
	t3: { symbol: 'MSFT', interval: 'weekly', time_period: 10, series_type: 'open' },
	macd: { symbol: 'MSFT', interval: 'daily', series_type: 'open' },
	macdext: { symbol: 'MSFT', interval: 'daily', series_type: 'open' },
	stoch: { symbol: 'MSFT', interval: 'daily' },
	stochf: { symbol: 'MSFT', interval: 'daily' },
	rsi: { symbol: 'MSFT', interval: 'weekly', time_period: 10, series_type: 'open' },
	stochrsi: {
		symbol: 'MSFT',
		interval: 'daily',
		time_period: 10,
		series_type: 'close',
		fastkperiod: 6,
		fastdmatype: 1
	},
	willr: { symbol: 'MSFT', interval: 'daily', time_period: 10 },
	adx: { symbol: 'MSFT', interval: 'daily', time_period: 10 },
	adxr: { symbol: 'MSFT', interval: 'daily', time_period: 10 },
	apo: { symbol: 'MSFT', interval: 'daily', series_type: 'close', fastperiod: 10, matype: 1 },
	ppo: { symbol: 'MSFT', interval: 'daily', series_type: 'close', fastperiod: 10, matype: 1 },
	mom: { symbol: 'MSFT', interval: 'daily', time_period: 10, series_type: 'close' },
	bop: { symbol: 'MSFT', interval: 'daily' },
	cci: { symbol: 'MSFT', interval: 'daily', time_period: 10 },
	cmo: { symbol: 'MSFT', interval: 'weekly', time_period: 10, series_type: 'close' },
	roc: { symbol: 'MSFT', interval: 'weekly', time_period: 10, series_type: 'close' },
	rocr: { symbol: 'MSFT', interval: 'daily', time_period: 10, series_type: 'close' },
	aroon: { symbol: 'MSFT', interval: 'daily', time_period: 14 },
	aroonosc: { symbol: 'MSFT', interval: 'daily', time_period: 10 },
	mfi: { symbol: 'MSFT', interval: 'weekly', time_period: 10 },
	trix: { symbol: 'MSFT', interval: 'daily', time_period: 10, series_type: 'close' },
	ultosc: { symbol: 'MSFT', interval: 'daily', timeperiod: 8 },
	dx: { symbol: 'MSFT', interval: 'daily', time_period: 10 },
	minus_di: { symbol: 'MSFT', interval: 'weekly', time_period: 10 },
	plus_di: { symbol: 'MSFT', interval: 'daily', time_period: 10 },
	minus_dm: { symbol: 'MSFT', interval: 'daily', time_period: 10 },
	plus_dm: { symbol: 'MSFT', interval: 'daily', time_period: 10 },
	bbands: { symbol: 'MSFT', interval: 'weekly', time_period: 5, series_type: 'close', nbdevup: 3, nbdevdn: 3 },
	midpoint: { symbol: 'MSFT', interval: 'daily', time_period: 10, series_type: 'close' },
	midprice: { symbol: 'MSFT', interval: 'daily', time_period: 10 },
	sar: { symbol: 'MSFT', interval: 'weekly', acceleration: 0.05, maximum: 0.25 },
	trange: { symbol: 'MSFT', interval: 'daily' },
	atr: { symbol: 'MSFT', interval: 'daily', time_period: 14 },
	natr: { symbol: 'MSFT', interval: 'weekly', time_period: 14 },
	ad: { symbol: 'MSFT', interval: 'daily' },
	adosc: { symbol: 'MSFT', interval: 'daily', fastperiod: 5 },
	obv: { symbol: 'MSFT', interval: 'weekly' },
	ht_trendline: { symbol: 'MSFT', interval: 'daily', series_type: 'close' },
	ht_sine: { symbol: 'MSFT', interval: 'daily', series_type: 'close' },
	ht_trendmode: { symbol: 'MSFT', interval: 'weekly', series_type: 'close' },
	ht_dcperiod: { symbol: 'MSFT', interval: 'daily', series_type: 'close' },
	ht_dcphase: { symbol: 'MSFT', interval: 'daily', series_type: 'close' },
	ht_phasor: { symbol: 'MSFT', interval: 'weekly', series_type: 'close' }
};
export const performance = {
	sector: {}
};

```markdown
## Company Profile
Companies profile (Price, Beta, Volume Average, Market Capitalisation, Last Dividend, 52 week range, stock price change, stock price change in percentage, Company Name, Exchange, Description, Industry, Sector, CEO, Website and image). Hourly JSON
https://financialmodelingprep.com/api/v3/company/profile/AAPL
## [Company Rating](/developer/docs/companies-rating-free-api)
Companies rating. Daily JSON
[https://financialmodelingprep.com/api/v3/company/rating/AAPL](/api/v3/company/rating/AAPL)
## [Company Discounted cash flow value](/developer/docs/companies-dcf-reports-free-api)
### [DCF](/developer/docs/companies-dcf-reports-free-api#DCF)
Companies Discounted cash flow value (intrinsic value). Realtime JSON
[https://financialmodelingprep.com/api/v3/company/discounted-cash-flow/AAPL](/api/v3/company/discounted-cash-flow/AAPL)
### [Historical DCF](/developer/docs/companies-dcf-reports-free-api#Historical-DCF)
Companies Historical Discounted cash flow value. Annual JSON
[https://financialmodelingprep.com/api/v3/company/historical-discounted-cash-flow/AAPL](/api/v3/company/historical-discounted-cash-flow/AAPL)
Companies Historical Discounted cash flow value. Quarter JSON
[https://financialmodelingprep.com/api/v3/company/historical-discounted-cash-flow/AAPL?period=quarter](/api/v3/company/historical-discounted-cash-flow/AAPL?period=quarter)
## [Symbols List](/developer/docs/stock-market-quote-free-api)
All Companies ticker symbols available in Financial Modeling Prep. High Usage JSON
[https://financialmodelingprep.com/api/v3/company/stock/list](/api/v3/company/stock/list)
```;
const symbol = 'AAPL';
const quater = { period: 'quater' };
export const company = {
	profile:
		{ symbol },
	rating:
		{ symbol },
	discounted_cash_flow:
		{ symbol },
	historical_discounted_cash_flow: [
		{ symbol, ...quater },
		{ symbol }
	]

};

```markdown
## [Company Financial Statements](/developer/docs/financial-statement-free-api)
### [Income Statement](/developer/docs/financial-statement-free-api#Income-Statement)
Annual income statements. Annual JSON
[https://financialmodelingprep.com/api/v3/financials/income-statement/AAPL](/api/v3/financials/income-statement/AAPL)
Quarterly income statements. Quarter JSON
[https://financialmodelingprep.com/api/v3/financials/income-statement/AAPL?period=quarter](/api/v3/financials/income-statement/AAPL?period=quarter)
Downloadable Annual/Quarter CSV file:
[https://financialmodelingprep.com/api/v3/financials/income-statement/AAPL?datatype=csv](/api/v3/financials/income-statement/AAPL?datatype=csv)
### [Batch Request Company Financial Statements](/developer/docs/financial-statement-free-api#Batch-Request-Company-Financial-Statements)
Multiple financial statements. Annual/Quarter JSON
[https://financialmodelingprep.com/api/v3/financials/income-statement/AAPL,FB,GOOG](/api/v3/financials/income-statement/AAPL,FB,GOOG)
### [Balance Sheet Statement](/developer/docs/financial-statement-free-api#Balance-Sheet-Statement)
Annual balance sheet statements. Annual JSON
[https://financialmodelingprep.com/api/v3/financials/balance-sheet-statement/AAPL](/api/v3/financials/balance-sheet-statement/AAPL)
Quarterly balance sheet statements. Quarter JSON
[https://financialmodelingprep.com/api/v3/financials/balance-sheet-statement/AAPL?period=quarter](/api/v3/financials/balance-sheet-statement/AAPL?period=quarter)
Downloadable Annual/Quarter CSV file:
[https://financialmodelingprep.com/api/v3/financials/balance-sheet-statement/AAPL?datatype=csv](/api/v3/financials/balance-sheet-statement/AAPL?datatype=csv)
### [Cash Flow Statement](/developer/docs/financial-statement-free-api#Cash-Flow-Statement)
Annual cash flow statements. Annual JSON
[https://financialmodelingprep.com/api/v3/financials/cash-flow-statement/AAPL](/api/v3/financials/cash-flow-statement/AAPL)
Quarterly cash flow statements. Quarter JSON
[https://financialmodelingprep.com/api/v3/financials/cash-flow-statement/AAPL?period=quarter](/api/v3/financials/cash-flow-statement/AAPL?period=quarter)
Downloadable Annual Quarter CSV file:
[https://financialmodelingprep.com/api/v3/financials/cash-flow-statement/AAPL?datatype=csv](/api/v3/financials/cash-flow-statement/AAPL?datatype=csv)
```;
const financials = {
	income_statement: [
		{ symbol },
		{ symbol, ...quater }
	],
	balance_sheet_statement: [
		{ symbol },
		{ symbol, ...quater }
	],
	cash_flow_statement: [
		{ symbol },
		{ symbol, ...quater }
	]
};

```markdown
## [Company Financial Ratios](/developer/docs/financial-ratio-free-api)
Company financial ratios (liquidity Measurement Ratios, Profitability Indicator Ratios, Debt Ratios, Operating Performance Ratios, Cash Flow Indicator Ratios and Investment Valuation Ratios). Annual JSON
[https://financialmodelingprep.com/api/v3/financial-ratios/AAPL](/api/v3/financial-ratios/AAPL)
```;
const financial_ratios = { symbol };

```markdown
## [Company Financial Growth](/developer/docs/company-financial-statement-growth-api)
Company annual financial statement growth. Annual JSON
[https://financialmodelingprep.com/api/v3/financial-statement-growth/AAPL](/api/v3/financial-statement-growth/AAPL)
Company quarterly financial statement growth. Quarter JSON
[https://financialmodelingprep.com/api/v3/financial-statement-growth/AAPL?period=quarter](/api/v3/financial-statement-growth/AAPL?period=quarter)
```;

const financial_statement_growth = [
	{ symbol },
	{ symbol, ...quater }
];

```markdown
## [Company Enterprise Value](/developer/docs/company-enterprise-value-api)
Company annual enterprise value. Annual JSON
[https://financialmodelingprep.com/api/v3/enterprise-value/AAPL](/api/v3/enterprise-value/AAPL)
Company quarterly enterprise value. Quarter JSON
[https://financialmodelingprep.com/api/v3/enterprise-value/AAPL?period=quarter](/api/v3/enterprise-value/AAPL?period=quarter)

## [Company Key Metrics](/developer/docs/company-key-metrics-api)
Company annual key metrics. Annual JSON
[https://financialmodelingprep.com/api/v3/company-key-metrics/AAPL](/api/v3/company-key-metrics/AAPL)
Company quarterly company key metrics. Quarter JSON
[https://financialmodelingprep.com/api/v3/company-key-metrics/AAPL?period=quarter](/api/v3/company-key-metrics/AAPL?period=quarter)

## [Stock Price](/developer/docs/realtime-stock-quote-api)
### [Stock Realtime Price](/developer/docs/realtime-stock-quote-api#Stock-Realtime-Price)
Realtime stock price. Realtime JSON
[https://financialmodelingprep.com/api/v3/stock/real-time-price/AAPL](/api/v3/stock/real-time-price/AAPL)
### [Stock Price list](/developer/docs/realtime-stock-quote-api#Stock-Price-list)
All realtime stock price. Realtime JSON
[https://financialmodelingprep.com/api/v3/stock/real-time-price](/api/v3/stock/real-time-price)

## [Stock Historical Price](/developer/docs/historical-stock-data-free-api)
### [Historical price](/developer/docs/historical-stock-data-free-api#Historical-price)
Stock historical prices. Daily JSON
[https://financialmodelingprep.com/api/v3/historical-price-full/AAPL?serietype=line](/api/v3/historical-price-full/AAPL?serietype=line)
### [Historical price with change and volume](/developer/docs/historical-stock-data-free-api#Historical-price-with-change-and-volume)
Stock historical prices with change and volume. Daily JSON OHLCV
[https://financialmodelingprep.com/api/v3/historical-price-full/AAPL](/api/v3/historical-price-full/AAPL)
### [Historical price with change and volume interval](/developer/docs/historical-stock-data-free-api#Historical-price-with-change-and-volume-interval)
Time series stock historical prices for a certain interval Daily JSON Range
[https://financialmodelingprep.com/api/v3/historical-price-full/AAPL?from=2018-03-12&to=2019-03-12](/api/v3/historical-price-full/AAPL?from=2018-03-12to=2019-03-12)
### [Historical price with change and volume Time series](/developer/docs/historical-stock-data-free-api#Historical-price-with-change-and-volume-Time-series)
Time series stock historical prices with change and volume for the last x days. Daily JSON Timeseries
[https://financialmodelingprep.com/api/v3/historical-price-full/AAPL?timeseries=5](/api/v3/historical-price-full/AAPL?timeseries=5)
### [Batch Request Stock Historical price](/developer/docs/historical-stock-data-free-api#Batch-Request-Stock-Historical-price)
Stock historical prices with change and volume (limited to 3). Daily JSON
[https://financialmodelingprep.com/api/v3/historical-price-full/AAPL,GOOG,FB](/api/v3/historical-price-full/AAPL,GOOG,FB)


## [Batch Request Stock Companies Price](/developer/docs/companies-batch-request-free-api)
Multiple companies Prices. High Usage JSON
[https://financialmodelingprep.com/api/v3/stock/real-time-price/AAPL,FB,GOOG](/api/v3/stock/real-time-price/AAPL,FB,GOOG)

## [Most of the majors indexes (Dow Jones, Nasdaq, S&P 500)](/developer/docs/indexes-in-stock-market-free-api)
### [Majors Indexes List](/developer/docs/indexes-in-stock-market-free-api#Majors-Indexes-List)
Majors Indexes (Dow Jones, Nasdaq, S&P 500). Realtime JSON
[https://financialmodelingprep.com/api/v3/majors-indexes](/api/v3/majors-indexes)
### [Single Stock Market Index such as Dow Jones](/developer/docs/indexes-in-stock-market-free-api#Single-Stock-Market-Index-such-as-Dow-Jones)
Stock market index (Dow Jones). Realtime JSON
[https://financialmodelingprep.com/api/v3/majors-indexes/.DJI](/api/v3/majors-indexes/.DJI)

## [Most Active Stock Companies](/developer/docs/most-actives-stock-market-data-free-api)
Most Active Stock Companies. Daily
[https://financialmodelingprep.com/api/v3/stock/actives](/api/v3/stock/actives)

## [Most Gainer Stock Companies](/developer/docs/most-gainers-stock-market-data-free-api)
Most Gainer Stock Companies. Daily
[https://financialmodelingprep.com/api/v3/stock/gainers](/api/v3/stock/gainers)

## [Most Loser Stock Companies](/developer/docs/most-losers-stock-market-data-free-api)
Most Losers Stock Companies. Daily
[https://financialmodelingprep.com/api/v3/stock/losers](/api/v3/stock/losers)
```;
const financials = {}

	```markdown

## [NYSE Holidays and Trading Hours](/developer/docs/is-the-market-open)
NYSE: Holidays and Trading Hours. JSON
[https://financialmodelingprep.com/api/v3/is-the-market-open](/api/v3/is-the-market-open)

## [Stock Market Sectors Performance](/developer/docs/stock-market-sector-performance-free-api)
Stock Market Sectors Performance. Hourly JSON
[https://financialmodelingprep.com/api/v3/stock/sectors-performance](/api/v3/stock/sectors-performance)
```;


```markdown
## [Cryptocurrencies](/developer/docs/crypto-currency-free-api)
### [Digital and Cryptocurrencies](/developer/docs/crypto-currency-free-api#Digital-and-Cryptocurrencies)
Wide range of data feed for digital and Cryptocurrencies. Realtime
[https://financialmodelingprep.com/api/v3/cryptocurrencies](/api/v3/cryptocurrencies)
### [Single Cryptocurrency such as Bitcoin](/developer/docs/crypto-currency-free-api#Single-Cryptocurrency-such-as-Bitcoin)
This API provide a wide range of data feed for digital and crypto currency such as Bitcoin. Realtime
[https://financialmodelingprep.com/api/v3/cryptocurrency/BTC](/api/v3/cryptocurrency/BTC)
```;


```markdown
## [Forex (FX)](/developer/docs/currency-exchange-rate-free-api)
### [Forex Currency Exchange Rate (FX)](/developer/docs/currency-exchange-rate-free-api#Forex-Currency-Exchange-Rate-(FX))
Currency exchange rates (FX). Realtime JSON
[https://financialmodelingprep.com/api/v3/forex](/api/v3/forex)
### [Single Currency such as Euro-dollars (EUR/USD)](/developer/docs/currency-exchange-rate-free-api#Single-Currency-such-as-Euro-dollars-(EUR/USD))
Currency exchange rate such as Euro-dollars (EUR/USD). Realtime JSON
[https://financialmodelingprep.com/api/forex/v3/EURUSD](/api/v3/forex/EURUSD)
```;