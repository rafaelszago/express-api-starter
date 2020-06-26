import chalk from 'chalk'
import './dotenv'

const { APP_NAME } = process.env

module.exports = {
  info (message) {
    console.log(`[${chalk.green(APP_NAME)}]: ${chalk.blue(message)}`)
  },

  success (message) {
    console.log(`[${chalk.green(APP_NAME)}]: ${chalk.green(message)}`)
  },

  error (message) {
    console.log(`[${chalk.green(APP_NAME)}]: ${chalk.red(message)}`)
  },
}
