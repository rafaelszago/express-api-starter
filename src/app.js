import helmet from 'helmet'
import cors from 'cors'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import app from '../'
import Logger from '../config/logger'
import routes from './routes'

app.use(helmet())
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(morgan('combined'))
app.use('/api/v1', routes)

const { PORT, HOST, APP_NAME } = process.env

app.listen(PORT, HOST, () => {
  Logger.success(`${APP_NAME} is running!`)
  Logger.success(`http://${HOST}:${PORT}/`)
})
