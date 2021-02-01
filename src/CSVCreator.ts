import * as csvwriter from 'csv-writer'
import * as ccxt from 'ccxt'

export default class CSVCreator {
  private headers: string[] = ['Date', 'Open', 'High', 'Low', 'Close', 'Volume']

  create(name: string, series: ccxt.OHLCV[]): void {
    csvwriter.createArrayCsvWriter({
      header: this.headers,
      path: name + '.csv'
    }).writeRecords(series)
  }
}