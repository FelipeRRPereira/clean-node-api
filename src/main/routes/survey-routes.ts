/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from 'express'
import { adaptMiddleware } from '../adapters/express/express-middleware-adapter copy'
import { adaptRoute } from '../adapters/express/express-route-adapter'
import { makeSurveyController } from '../factories/controllers/survey/add-survey/add-survey-controller-factory'
import { makeAuthMiddleware } from '../factories/middlewares/auth-middleware-factory'

export default (router: Router): void => {
  const adminAuth = adaptMiddleware(makeAuthMiddleware())
  router.post('/surveys', adminAuth, adaptRoute(makeSurveyController()))
}
