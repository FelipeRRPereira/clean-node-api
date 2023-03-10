import { SurveyModel } from '@/domain/models/survey'
import { LoadSurveys } from '@/domain/usecases/load-surveys'
import { LoadSurveysRepository } from '@/data/protocols/db/survey/load-surveys-repository'

export class DbLoadSurveys implements LoadSurveys {
  constructor (private readonly loadSurveyRepository: LoadSurveysRepository) {}
  async load (): Promise<SurveyModel[]> {
    const surveys = await this.loadSurveyRepository.loadAll()
    return surveys
  }
}
