export interface datosPersonalesModel {
  id: string
  direccion: string
  telefono: string
  correo: string
  nombres: string
  apellidos: string
  carrera: string
  descripcion_perfil: string
}

export interface idiomasModel {
  idioma: string
  nivel_escritura: number
  nivel_lectura: number
  nivel_habla: number
}

export interface educacionModel {
  institucion: string
  desde: number
  hasta: number
  carrera: number
}

export interface cursoModel {
  nombre: string
  desde: number
  hasta: number
  institucion?: string
}

export interface referenciaModel {
  nombres: string
  apellidos: string
  telefono: string
  correo: string
}

export interface herramientaModel {
  nombre: string
  dominio: number
}

export interface experienciaModel {
  institucion: string
  desde: string
  hasta: string
  cargo: string
  orden: number
  tareas?: experienciaTareaModel[]
}

export interface experienciaTareaModel {
  descripcion: string
  experiencia_id: string
}
