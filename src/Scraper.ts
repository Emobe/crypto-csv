import * as ccxt from 'ccxt'
export default class Scraper {
   async get(exchange: string, pair: string, time: string, since?: number): Promise<ccxt.OHLCV[]> {
    const source: ccxt.Exchange = await new ccxt[exchange]
    const series = source.fetchOHLCV(pair, time, since)
    return series 
   }
}