import * as yargs from 'yargs'

export default yargs.option('exchange', {
  alias: 'e',
  demandOption: true,
  description: 'The exchange to retrieve data from. Uses list of exchanges from ccxt library',
  type: 'string'
}).option('pair', {
  alias: 'p',
  demandOption: true,
  description: 'The cryptocurrency pair to retrieve from',
  type: 'string'
})
.option('timeframe', {
  alias: 't',
  demandOption: true,
  description: 'The timeframe to retrieve from',
  type: 'string'
}).option('filename', {
  alias: 'n',
  description: 'The filename to save the csv as',
  demandOption: false,
  type: 'string'
}).
argv
