import Scraper from './Scraper'
import CSVCreator from './CSVCreator'
import CryptoCSVArguments from './Arguments'

export default class CryptoCSV {
  scraper = new Scraper()
  csvCreator = new CSVCreator()

  async run(args: typeof CryptoCSVArguments): Promise<void> {
    try {
      const data = await this.scraper.get(args.exchange, args.pair, args.timeframe)
      this.csvCreator.create(args.output, data)
    } catch (err) {
      console.error(err)
    }
  }
}

