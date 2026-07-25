import PocketBase from 'pocketbase'
import { keys } from '../envs/api-keys'
import type {
  cursoModel,
  datosPersonalesModel,
  educacionModel,
  experienciaModel,
  herramientaModel,
  idiomasModel,
  referenciaModel,
} from '@/models/models'

export class pocketBaseService {
  private static readonly pb = new PocketBase(keys.url)

  static async getDatosPersonales(): Promise<datosPersonalesModel> {
    return await this.pb.collection('cv_datospersonales').getOne(keys.persona_id)
  }

  static async getIdiomas(): Promise<idiomasModel[]> {
    return await this.pb.collection('cv_idiomas').getFullList({
      filter: `persona_id="${keys.persona_id}"`,
    })
  }

  static async getEducacion(): Promise<educacionModel[]> {
    return await this.pb.collection('cv_educacion').getFullList({
      filter: `persona_id="${keys.persona_id}"`,
    })
  }

  static async getCursos(): Promise<cursoModel[]> {
    return await this.pb.collection('cv_cursos').getFullList({
      filter: `persona_id="${keys.persona_id}"`,
    })
  }

  static async getReferencias(): Promise<referenciaModel[]> {
    return await this.pb.collection('cv_referencias').getFullList({
      filter: `persona_id="${keys.persona_id}"`,
    })
  }

  static async getHerramientas(): Promise<herramientaModel[]> {
    return await this.pb.collection('cv_herramientas').getFullList({
      filter: `persona_id="${keys.persona_id}"`,
    })
  }

  static async getExperiencias(): Promise<experienciaModel[]> {
    const exp = await this.pb.collection('cv_experiencia').getFullList({
      filter: `persona_id="${keys.persona_id}"`,
      expand: 'cv_experiencia_tareas_via_experiencia_id',
      sort: '-orden',
    })

    const data: experienciaModel[] = exp.map((x) => ({
      cargo: x.cargo,
      desde: x.desde,
      hasta: x.hasta,
      institucion: x.institucion,
      orden: x.orden,
      tareas: x.expand?.cv_experiencia_tareas_via_experiencia_id,
    }))

    return data
  }
}
