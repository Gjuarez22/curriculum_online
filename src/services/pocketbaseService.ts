import PocketBase from 'pocketbase'
import { keys } from '../envs/api-keys'
import type { datosPersonalesModel, idiomasModel } from '@/models/models'

export class pocketBaseService {
  private static readonly pb = new PocketBase(keys.url)

  static async getDatosPersonales(): Promise<datosPersonalesModel> {
    return await this.pb.collection('cv_datospersonales').getOne(keys.persona_id)
  }

  static async getIdiomas(): Promise<idiomasModel[]> {
    return await this.pb.collection('cv_idiomas').getFullList({
      // Nota las comillas dobles "" envolviendo el valor de la variable
      filter: `persona_id="${keys.persona_id}"`,
    })
  }
}
