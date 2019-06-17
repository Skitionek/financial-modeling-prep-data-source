# financialModelingPrep

## Outdated readme
[![Build Status](https://travis-ci.org/zackurben/financialModelingPrep.svg?branch=master)](https://travis-ci.org/zackurben/financialModelingPrep)
[![Coverage Status](https://coveralls.io/repos/github/zackurben/financialModelingPrep/badge.svg?branch=master)](https://coveralls.io/github/zackurben/financialModelingPrep?branch=master)
[![Greenkeeper badge](https://badges.greenkeeper.io/zackurben/financialModelingPrep.svg)](https://greenkeeper.io/)

This is a simple wrapper around the [Alpha Vantage API](https://www.financialModelingPrep.co/documentation/) hosted on [NPM](https://www.npmjs.com/package/financialModelingPrep). I have no affiliation with financialModelingPrep.

All contributions are welcome! This is an open source project under the MIT license, see [LICENSE.md](LICENSE.md) for additional information.

`All available functions with this SDK have the same parameters as listed in the the Alpha Vantage Docs, without the "function" or "apikey". Do not include the "function" or "apikey" parameters when using this library. All functions return promises with the response data.`

## Installation
```bash
npm i financialModelingPrep
```

## Usage

```javascript
/**
 * Init Alpha Vantage with your API key.
 *
 * @param {String} key
 *   Your Alpha Vantage API key.
 */
const alpha = require('financialModelingPrep')({ key: 'qweqweqwe' });

// Simple examples
alpha.data.intraday(`msft`).then(data => {
  console.log(data);
});

alpha.data.batch([`msft`, `aapl`]).then(data => {
  console.log(data);
});

alpha.forex.rate('btc', 'usd').then(data => {
  console.log(data);
})

alpha.crypto.daily('btc', 'usd').then(data => {
  console.log(data);
})

alpha.technical.sma(`msft`, `daily`, 60, `close`).then(data => {
  console.log(data);
})

alpha.performance.sector().then(data => {
  console.log(data);
});
```

## Util

Data polishing
  - Rewrite weird data keys to be consistent across all api calls. This is an optional utility you can use with the result of any api call.

```javascript
const polished = alpha.util.polish(data);
```

## Data

See [Alpha Vantage](https://www.financialModelingPrep.co/documentation/#time-series-data) for the parameters.
```javascript
alpha.data.intraday(symbol, outputsize, datatype, interval)
alpha.data.daily(symbol, outputsize, datatype, interval)
alpha.data.daily_adjusted(symbol, outputsize, datatype, interval)
alpha.data.weekly(symbol, outputsize, datatype, interval)
alpha.data.weekly_adjusted(symbol, outputsize, datatype, interval)
alpha.data.monthly(symbol, outputsize, datatype, interval)
alpha.data.monthly_adjusted(symbol, outputsize, datatype, interval)
alpha.data.quote(symbol, outputsize, datatype, interval)
alpha.data.search(keywords)
alpha.data.batch([symbol1, symbol2..])
```

## Forex

See [Alpha Vantage](https://www.financialModelingPrep.co/documentation/#fx) for the parameters.
```javascript
alpha.forex.rate(from_currency, to_currency)
```

## Crypto

See [Alpha Vantage](https://www.financialModelingPrep.co/documentation/#digital-currency) for the parameters.
```javascript
alpha.crypto.daily(symbol, market)
alpha.crypto.weekly(symbol, market)
alpha.crypto.monthly(symbol, market)
```

## Technicals

See [Alpha Vantage](https://www.financialModelingPrep.co/documentation/#technical-indicators) for the parameters.
```javascript
alpha.technical.sma(symbol, interval, time_period, series_type)
alpha.technical.ema(symbol, interval, time_period, series_type)
alpha.technical.wma(symbol, interval, time_period, series_type)
alpha.technical.dema(symbol, interval, time_period, series_type)
alpha.technical.tema(symbol, interval, time_period, series_type)
alpha.technical.trima(symbol, interval, time_period, series_type)
alpha.technical.kama(symbol, interval, time_period, series_type)
alpha.technical.mama(symbol, interval, series_type, fastlimit, slowlimit)
alpha.technical.t3(symbol, interval, time_period, series_type)
alpha.technical.macd(symbol, interval, series_type, fastperiod, slowperiod, signalperiod)
alpha.technical.macdext(symbol, interval, series_type, fastperiod, slowperiod, signalperiod, fastmatype, slowmatype, signalmatype)
alpha.technical.stoch(symbol, interval, fastkperiod, slowkperiod, slowdperiod, slowkmatype, slowdmatype)
alpha.technical.stochf(symbol, interval, fastkperiod, fastdperiod, fastdmatype)
alpha.technical.rsi(symbol, interval, time_period, series_type)
alpha.technical.stochrsi(symbol, interval, time_period, series_type, fastkperiod, slowdperiod, fastdmatype)
alpha.technical.willr(symbol, interval, time_period)
alpha.technical.adx(symbol, interval, time_period)
alpha.technical.adxr(symbol, interval, time_period)
alpha.technical.apo(symbol, interval, series_type, fastperiod, slowperiod, matype)
alpha.technical.ppo(symbol, interval, series_type, fastperiod, slowperiod, matype)
alpha.technical.mom(symbol, interval, time_period, series_type)
alpha.technical.bop(symbol, interval)
alpha.technical.cci(symbol, interval, time_period)
alpha.technical.cmo(symbol, interval, time_period, series_type)
alpha.technical.roc(symbol, interval, time_period, series_type)
alpha.technical.rocr(symbol, interval, time_period, series_type)
alpha.technical.aroon(symbol, interval, time_period)
alpha.technical.aroonosc(symbol, interval, time_period)
alpha.technical.mfi(symbol, interval, time_period)
alpha.technical.trix(symbol, interval, time_period, series_type)
alpha.technical.ultosc(symbol, interval, timeperiod1, timeperiod2, timeperiod3)
alpha.technical.dx(symbol, interval, time_period)
alpha.technical.minus_di(symbol, interval, time_period)
alpha.technical.plus_di(symbol, interval, time_period)
alpha.technical.minus_dm(symbol, interval, time_period)
alpha.technical.plus_dm(symbol, interval, time_period)
alpha.technical.bbands(symbol, interval, time_period, series_type, nbdevup, nbdevdn)
alpha.technical.midpoint(symbol, interval, time_period, series_type)
alpha.technical.midprice(symbol, interval, time_period)
alpha.technical.sar(symbol, interval, acceleration, maximum)
alpha.technical.trange(symbol, interval)
alpha.technical.atr(symbol, interval, time_period)
alpha.technical.natr(symbol, interval, time_period)
alpha.technical.ad(symbol, interval)
alpha.technical.adosc(symbol, interval, fastperiod, slowperiod)
alpha.technical.obv(symbol, interval)
alpha.technical.ht_trendline(symbol, interval, series_type)
alpha.technical.ht_sine(symbol, interval, series_type)
alpha.technical.ht_trendmode(symbol, interval, series_type)
alpha.technical.ht_dcperiod(symbol, interval, series_type)
alpha.technical.ht_dcphase(symbol, interval, series_type)
alpha.technical.ht_dcphasor(symbol, interval, series_type)
```

## Performance

See [Alpha Vantage](https://www.financialModelingPrep.co/documentation/#sector-information) for the parameters.
```javascript
alpha.performance.sector()
```

## Contributing

All contributions are welcome! The purpose of this library is to keep function parity with the Alpha Vantage API, while keeping a slim and intuitive programming interface. Before any pull requests are made, please run `npm run lint` to fix style issues and ensure that all test are passing `npm test`. The codebase should always remain at 100% test coverage.

Core has been forked from:
  - Author: Zack Urben
  - Twitter: https://twitter.com/zackurben (better)
  - Contact: zackurben@gmail.com
yet greatest part in common is it's structure. Current version support full API coverage, requests cache and  non duck-type keys normalisation.