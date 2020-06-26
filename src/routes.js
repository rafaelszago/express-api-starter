import express from 'express'

import ApplicationController from './controllers/ApplicationController'

const router = express.Router()

router.get('/', ApplicationController.index)

export default router
