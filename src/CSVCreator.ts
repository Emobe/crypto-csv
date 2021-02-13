import * as csvwriter from 'csv-writer'
import * as ccxt from 'ccxt'

export default class CSVCreator {
  private headers: string[] = ['date', 'open', 'high', 'low', 'close', 'volume']

  async create(name: string, series: ccxt.OHLCV[]): Promise<void> {
    try {
      await csvwriter.createArrayCsvWriter({
        header: this.headers,
        path: name + '.csv'
      }).writeRecords(series)
    } catch (err) {
      console.log(err)
    }
  }
}