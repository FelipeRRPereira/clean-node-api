import { MongoClient, Collection } from 'mongodb'

export const MongoHelper = {
  client: null as MongoClient,

  async connect (uri: string): Promise<void> {
    this.client = await MongoClient.connect(uri)
  },

  async disconnect (): Promise<void> {
    await this.client.close()
  },

  getCollection (nome: string): Collection {
    return this.client.db().collection(nome)
  },

  map: (collection: any): any => {
    const { _id, ...collectionWithoutId } = collection
    return {
      id: _id.toString(),
      ...collectionWithoutId
    }
  }
}
