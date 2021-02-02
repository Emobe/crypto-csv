import * as yargs from 'yargs'

export default yargs.option('exchange', {
  alias: 'e',
  demandOption: true,
  description: 'The exchange to retrieve data from. Uses list of exchanges from ccxt library',
  type: 'string'
}).option('pair', {
  alias: 'p',
  demandOption: true,
  description: 'Cryptocurrency pair to retrieve from',
  type: 'string'
})
.option('timeframe', {
  alias: 't',
  demandOption: true,
  description: 'Timeframe to retrieve data from',
  type: 'string'
}).option('output', {
  alias: 'o',
  description: 'Path to save the .csv file',
  demandOption: false,
  type: 'string'
}).
argv
