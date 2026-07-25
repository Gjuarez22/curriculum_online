<template>
  <!-- Envolvemos todo en un div que condicionalmente recibe la clase 'dark' -->
  <div :class="{ dark: isDarkMode }">
    <!-- Fondo exterior que reacciona al modo -->
    <div
      class="min-h-screen bg-slate-200 dark:bg-slate-950 py-10 px-4 sm:px-6 lg:px-8 font-sans text-gray-800 dark:text-slate-300 transition-colors duration-300"
    >
      <!-- BOTÓN FLOTANTE PARA CAMBIAR EL TEMA -->
      <button
        @click="toggleTheme"
        class="fixed top-4 right-4 md:top-8 md:right-8 p-3 rounded-full bg-white dark:bg-slate-800 shadow-lg text-xl z-50 hover:scale-110 transition-transform border border-gray-200 dark:border-slate-700"
        title="Cambiar tema"
      >
        <span v-if="!isDarkMode">🌙</span>
        <span v-else>☀️</span>
      </button>

      <!-- Contenedor Principal -->
      <div
        class="max-w-5xl mx-auto bg-white dark:bg-slate-900 shadow-2xl dark:shadow-black/50 rounded-lg overflow-hidden flex flex-col md:flex-row border border-transparent dark:border-slate-800 transition-colors duration-300 mt-8 md:mt-0"
      >
        <!-- HEADER MÓVIL -->
        <header
          class="md:hidden bg-[#1e293b] dark:bg-slate-950 text-white p-6 text-center border-b border-transparent dark:border-slate-800"
        >
          <Transition name="fade-up" mode="out-in">
            <div v-if="isLoading" key="header-mobile-loading" class="section-loader">
              <div class="spinner spinner-sm" aria-hidden="true"></div>
            </div>
            <div v-else-if="datosPersonales" key="header-mobile" class="reveal-item">
              <h1 class="text-2xl font-light tracking-widest uppercase">
                {{ datosPersonales.nombres }}
                <br />
                <span class="font-bold text-[#94a3b8] dark:text-blue-400 transition-colors">{{
                  datosPersonales.apellidos
                }}</span>
              </h1>
              <p
                class="mt-3 text-xs tracking-[0.15em] border-t border-gray-500 dark:border-slate-700 pt-2 inline-block text-gray-300 dark:text-slate-400"
              >
                {{ datosPersonales.carrera }}
              </p>
            </div>
            <p v-else key="header-mobile-empty" class="text-sm text-gray-400 italic">
              Sin información disponible
            </p>
          </Transition>
        </header>

        <!-- BARRA LATERAL -->
        <aside
          class="w-full md:w-1/3 bg-stone-100 dark:bg-slate-800/50 p-6 md:p-8 border-b md:border-b-0 md:border-r border-gray-200 dark:border-slate-800 transition-colors duration-300"
        >
          <!-- Foto -->
          <div class="flex justify-center mb-6 mt-4 md:mt-0">
            <img
              src="/img/perfil.jpeg"
              alt="Gerardo Juárez"
              class="w-32 h-40 md:w-40 md:h-48 object-cover border-4 border-white dark:border-slate-700 shadow-md dark:shadow-lg rounded-sm transition-colors"
            />
          </div>

          <!-- Datos Personales -->
          <section class="mb-8">
            <h2
              class="text-lg font-bold border-b-2 border-[#2c3e50] dark:border-blue-500/50 mb-4 pb-1 uppercase tracking-wider dark:text-slate-100"
            >
              Datos Personales
            </h2>
            <Transition name="fade-up" mode="out-in">
              <div v-if="isLoading" key="datos-loading" class="section-loader">
                <div class="spinner spinner-sm" aria-hidden="true"></div>
              </div>
              <ul
                v-else-if="datosPersonales"
                key="datos"
                class="space-y-3 text-sm text-gray-700 dark:text-slate-400 reveal-item"
              >
                <li class="flex items-center">
                  <span class="mr-3 text-lg">📍</span> {{ datosPersonales.direccion }}
                </li>
                <li class="flex items-center">
                  <span class="mr-3 text-lg">📞</span> {{ datosPersonales.telefono }}
                </li>
                <li class="flex items-center">
                  <span class="mr-3 text-lg">✉️</span> {{ datosPersonales.correo }}
                </li>
                <li class="flex items-center">
                  <span class="mr-3 text-lg">📅</span> 15 de Julio, 2001
                </li>
              </ul>
              <p
                v-else
                key="datos-empty"
                class="text-sm text-gray-400 dark:text-slate-500 italic"
              >
                Sin información disponible
              </p>
            </Transition>
          </section>

          <!-- Educación -->
          <section class="mb-8">
            <h2
              class="text-lg font-bold border-b-2 border-[#2c3e50] dark:border-blue-500/50 mb-4 pb-1 uppercase tracking-wider dark:text-slate-100"
            >
              Educación
            </h2>
            <Transition name="fade-up" mode="out-in">
              <div v-if="isLoading" key="educacion-loading" class="section-loader">
                <div class="spinner spinner-sm" aria-hidden="true"></div>
              </div>
              <div v-else-if="educacion?.length" key="educacion">
                <TransitionGroup name="list" tag="div">
                  <div
                    v-for="(edu, index) in educacion"
                    :key="edu.institucion + edu.carrera"
                    class="mb-5 reveal-item"
                    :style="{ '--delay': `${index * 80}ms` }"
                  >
                    <p class="font-bold text-sm dark:text-slate-200">{{ edu.institucion }}</p>
                    <p class="italic text-xs text-gray-600 dark:text-blue-400/80 mb-1">
                      {{ edu.desde }} - {{ edu.hasta }}
                    </p>
                    <p class="text-sm text-gray-700 dark:text-slate-400">
                      {{ edu.carrera }}
                    </p>
                  </div>
                </TransitionGroup>
              </div>
              <p
                v-else
                key="educacion-empty"
                class="text-sm text-gray-400 dark:text-slate-500 italic"
              >
                Sin información disponible
              </p>
            </Transition>
          </section>

          <!-- Idiomas -->
          <section class="mb-8">
            <h2
              class="text-lg font-bold border-b-2 border-[#2c3e50] dark:border-blue-500/50 mb-4 pb-1 uppercase tracking-wider dark:text-slate-100"
            >
              Idiomas
            </h2>
            <Transition name="fade-up" mode="out-in">
              <div v-if="isLoading" key="idiomas-loading" class="section-loader">
                <div class="spinner spinner-sm" aria-hidden="true"></div>
              </div>
              <div v-else-if="idiomas?.length" key="idiomas">
                <TransitionGroup name="list" tag="div">
                  <div
                    v-for="(id, index) in idiomas"
                    :key="id.idioma"
                    class="space-y-2 text-sm text-gray-700 dark:text-slate-400 mb-4 reveal-item"
                    :style="{ '--delay': `${index * 80}ms` }"
                  >
                    <p class="dark:text-slate-200 font-semibold mb-2">{{ id.idioma }}</p>
                    <p class="flex justify-between items-center">
                      Lectura
                      <span
                        class="px-2 py-0.5 rounded text-xs"
                        :class="obtenerClaseNivel(id.nivel_lectura)"
                        >{{ nivelPalabra(id.nivel_lectura) }}</span
                      >
                    </p>
                    <p class="flex justify-between items-center">
                      Escritura
                      <span
                        class="px-2 py-0.5 rounded text-xs border border-transparent"
                        :class="obtenerClaseNivel(id.nivel_escritura)"
                        >{{ nivelPalabra(id.nivel_escritura) }}</span
                      >
                    </p>
                    <p class="flex justify-between items-center">
                      Habla
                      <span
                        class="px-2 py-0.5 rounded text-xs border border-transparent"
                        :class="obtenerClaseNivel(id.nivel_habla)"
                        >{{ nivelPalabra(id.nivel_habla) }}</span
                      >
                    </p>
                  </div>
                </TransitionGroup>
              </div>
              <p
                v-else
                key="idiomas-empty"
                class="text-sm text-gray-400 dark:text-slate-500 italic"
              >
                Sin información disponible
              </p>
            </Transition>
          </section>

          <!-- Cursos -->
          <section class="mb-8">
            <h2
              class="text-lg font-bold border-b-2 border-[#2c3e50] dark:border-blue-500/50 mb-4 pb-1 uppercase tracking-wider dark:text-slate-100"
            >
              Cursos
            </h2>
            <Transition name="fade-up" mode="out-in">
              <div v-if="isLoading" key="cursos-loading" class="section-loader">
                <div class="spinner spinner-sm" aria-hidden="true"></div>
              </div>
              <TransitionGroup
                v-else-if="cursos?.length"
                key="cursos"
                name="list"
                tag="ul"
                class="list-disc list-inside text-xs space-y-2 text-gray-700 dark:text-slate-400"
              >
                <li
                  v-for="(cu, index) in cursos"
                  :key="cu.nombre"
                  class="reveal-item"
                  :style="{ '--delay': `${index * 60}ms` }"
                >
                  {{ cu.nombre }}
                  <span v-if="cu.institucion != undefined && cu.institucion.length > 0"
                    >- {{ cu.institucion }}
                  </span>
                </li>
              </TransitionGroup>
              <p
                v-else
                key="cursos-empty"
                class="text-sm text-gray-400 dark:text-slate-500 italic"
              >
                Sin información disponible
              </p>
            </Transition>
          </section>

          <!-- Referencias -->
          <section>
            <h2
              class="text-lg font-bold border-b-2 border-[#2c3e50] dark:border-blue-500/50 mb-4 pb-1 uppercase tracking-wider dark:text-slate-100"
            >
              Referencias
            </h2>
            <Transition name="fade-up" mode="out-in">
              <div v-if="isLoading" key="referencias-loading" class="section-loader">
                <div class="spinner spinner-sm" aria-hidden="true"></div>
              </div>
              <TransitionGroup
                v-else-if="referencias?.length"
                key="referencias"
                name="list"
                tag="ul"
                class="list-disc list-inside text-xs space-y-2 text-gray-700 dark:text-slate-400"
              >
                <li
                  v-for="(ref, index) in referencias"
                  :key="ref.nombres + ref.apellidos"
                  class="reveal-item"
                  :style="{ '--delay': `${index * 60}ms` }"
                >
                  {{ ref.nombres + ' ' + ref.apellidos }} {{ ref.telefono }}
                </li>
              </TransitionGroup>
              <p
                v-else
                key="referencias-empty"
                class="text-sm text-gray-400 dark:text-slate-500 italic"
              >
                Sin información disponible
              </p>
            </Transition>
          </section>
        </aside>

        <!-- CUERPO PRINCIPAL -->
        <main class="w-full md:w-2/3 p-6 md:p-8">
          <!-- HEADER ESCRITORIO -->
          <header
            class="hidden md:block bg-[#1e293b] dark:bg-slate-950 text-white p-8 -m-8 mb-8 border-b border-transparent dark:border-slate-800 transition-colors"
          >
            <Transition name="fade-up" mode="out-in">
              <div v-if="isLoading" key="header-desktop-loading" class="section-loader">
                <div class="spinner spinner-sm" aria-hidden="true"></div>
              </div>
              <div v-else-if="datosPersonales" key="header-desktop" class="reveal-item">
                <h1 class="text-4xl font-light tracking-widest uppercase">
                  {{ datosPersonales.nombres }} <br />
                  <span class="font-bold text-[#94a3b8] dark:text-blue-400 transition-colors">{{
                    datosPersonales.apellidos
                  }}</span>
                </h1>
                <p
                  class="mt-4 text-sm tracking-[0.2em] border-t border-gray-500 dark:border-slate-700 pt-3 inline-block text-gray-300 dark:text-slate-400"
                >
                  {{ datosPersonales.carrera }}
                </p>
              </div>
              <p v-else key="header-desktop-empty" class="text-sm text-gray-400 italic">
                Sin información disponible
              </p>
            </Transition>
          </header>

          <!-- Perfil -->
          <section class="mb-10 mt-4 md:mt-0">
            <h2
              class="text-xl font-bold text-[#1e293b] dark:text-slate-100 border-b border-gray-300 dark:border-slate-700 mb-4 pb-2 tracking-widest uppercase flex items-center transition-colors"
            >
              <span class="bg-[#1e293b] dark:bg-blue-500 w-2 h-6 mr-3 rounded-sm"></span> Perfil
            </h2>
            <Transition name="fade-up" mode="out-in">
              <div v-if="isLoading" key="perfil-loading" class="section-loader">
                <div class="spinner spinner-sm" aria-hidden="true"></div>
              </div>
              <p
                v-else-if="datosPersonales?.descripcion_perfil"
                key="perfil"
                class="text-gray-700 dark:text-slate-400 leading-relaxed text-sm text-justify reveal-item"
              >
                {{ datosPersonales.descripcion_perfil }}
              </p>
              <p
                v-else
                key="perfil-empty"
                class="text-sm text-gray-400 dark:text-slate-500 italic"
              >
                Sin información disponible
              </p>
            </Transition>
          </section>

          <!-- Experiencia -->
          <section class="mb-10">
            <h2
              class="text-xl font-bold text-[#1e293b] dark:text-slate-100 border-b border-gray-300 dark:border-slate-700 mb-5 pb-2 tracking-widest uppercase flex items-center transition-colors"
            >
              <span class="bg-[#1e293b] dark:bg-blue-500 w-2 h-6 mr-3 rounded-sm"></span>
              Experiencia
            </h2>

            <Transition name="fade-up" mode="out-in">
              <div v-if="isLoading" key="experiencias-loading" class="section-loader">
                <div class="spinner spinner-sm" aria-hidden="true"></div>
              </div>
              <div v-else-if="experiencias?.length" key="experiencias" class="space-y-8">
                <TransitionGroup name="list" tag="div" class="space-y-8">
                  <div
                    v-for="(exp, index) in experiencias"
                    :key="exp.cargo + exp.institucion"
                    class="relative pl-4 border-l-2 border-gray-300 dark:border-slate-700 reveal-item"
                    :style="{ '--delay': `${index * 100}ms` }"
                  >
                    <div
                      class="absolute w-3 h-3 bg-blue-600 dark:bg-blue-500 rounded-full -left-1.75 top-1.5 ring-4 ring-white dark:ring-slate-900 transition-colors"
                    ></div>
                    <div class="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
                      <h3 class="font-bold text-lg text-gray-900 dark:text-slate-200">
                        {{ exp.cargo }}
                      </h3>
                      <span
                        class="text-xs font-semibold text-blue-700 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/20 px-2 py-1 rounded mt-1 sm:mt-0"
                        >{{ exp.desde }} - {{ exp.hasta }}</span
                      >
                    </div>
                    <p class="text-[#1e293b] dark:text-blue-300 font-medium text-sm mb-2">
                      {{ exp.institucion }}
                    </p>
                    <ul
                      class="list-disc list-inside text-sm text-gray-700 dark:text-slate-400 space-y-1.5 marker:text-gray-400 dark:marker:text-slate-600"
                    >
                      <li v-for="t in exp.tareas" :key="t.descripcion">{{ t.descripcion }}</li>
                    </ul>
                  </div>
                </TransitionGroup>
              </div>
              <p
                v-else
                key="experiencias-empty"
                class="text-sm text-gray-400 dark:text-slate-500 italic"
              >
                Sin información disponible
              </p>
            </Transition>
          </section>

          <!-- Tecnologías -->
          <section>
            <h2
              class="text-xl font-bold text-[#1e293b] dark:text-slate-100 border-b border-gray-300 dark:border-slate-700 mb-5 pb-2 tracking-widest uppercase flex items-center transition-colors"
            >
              <span class="bg-[#1e293b] dark:bg-blue-500 w-2 h-6 mr-3 rounded-sm"></span>
              Tecnologías y herramientas
            </h2>
            <Transition name="fade-up" mode="out-in">
              <div v-if="isLoading" key="herramientas-loading" class="section-loader">
                <div class="spinner spinner-sm" aria-hidden="true"></div>
              </div>
              <TransitionGroup
                v-else-if="herramientas?.length"
                key="herramientas"
                name="list"
                tag="div"
                class="flex flex-wrap gap-2.5"
              >
                <span
                  v-for="(tech, index) in herramientas"
                  :key="tech.nombre"
                  class="bg-gray-100 dark:bg-slate-800 text-gray-800 dark:text-slate-300 px-3 py-1.5 rounded-md text-xs font-semibold border border-gray-200 dark:border-slate-700 hover:border-[#1e293b] dark:hover:border-blue-500/50 hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors cursor-default shadow-sm reveal-item"
                  :style="{ '--delay': `${index * 40}ms` }"
                >
                  {{ tech.nombre }}
                </span>
              </TransitionGroup>
              <p
                v-else
                key="herramientas-empty"
                class="text-sm text-gray-400 dark:text-slate-500 italic"
              >
                Sin información disponible
              </p>
            </Transition>
          </section>
        </main>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { pocketBaseService } from '../services/pocketbaseService'
import type {
  cursoModel,
  datosPersonalesModel,
  educacionModel,
  experienciaModel,
  herramientaModel,
  idiomasModel,
  referenciaModel,
} from '@/models/models'

const isLoading = ref(true)

onMounted(async () => {
  try {
    const [dp, ids, exps, edu, curs, refs, herr] = await Promise.all([
      pocketBaseService.getDatosPersonales(),
      pocketBaseService.getIdiomas(),
      pocketBaseService.getExperiencias(),
      pocketBaseService.getEducacion(),
      pocketBaseService.getCursos(),
      pocketBaseService.getReferencias(),
      pocketBaseService.getHerramientas(),
    ])

    datosPersonales.value = dp
    idiomas.value = ids
    experiencias.value = exps
    educacion.value = edu
    cursos.value = curs
    referencias.value = refs
    herramientas.value = herr
  } catch (error) {
    console.error('Error al cargar el curriculum:', error)
  } finally {
    isLoading.value = false
  }
})

// Estado reactivo para controlar el modo oscuro (por defecto lo iniciamos en false / modo claro)
const isDarkMode = ref(false)
const datosPersonales = ref<datosPersonalesModel>()
const idiomas = ref<idiomasModel[]>()
const educacion = ref<educacionModel[]>()
const cursos = ref<cursoModel[]>()
const referencias = ref<referenciaModel[]>()
const experiencias = ref<experienciaModel[]>()
const herramientas = ref<herramientaModel[]>()

// Función que invierte el valor al hacer click en el botón
const toggleTheme = () => {
  isDarkMode.value = !isDarkMode.value
}

const obtenerClaseNivel = (nivel: number) => {
  if (nivel < 5) {
    return 'bg-gray-200 text-gray-700 dark:bg-slate-800 dark:text-slate-400 dark:border-slate-700'
  }

  if (nivel >= 5 && nivel <= 7) {
    return 'bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300'
  }

  if (nivel > 7) {
    return 'bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300'
  }
}
const nivelPalabra = (nivel: number) => {
  if (nivel < 5) {
    return 'Básico'
  }
  if (nivel >= 5 && nivel <= 7) {
    return 'Intermedio'
  }
  if (nivel > 7) {
    return 'Avanzado'
  }
}
</script>

<style scoped>
/* Transiciones suaves generales para que el cambio no sea brusco */
* {
  transition-property: background-color, border-color, color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}

.section-loader {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  min-height: 2.5rem;
  padding: 0.25rem 0;
}

/* Spinner */
.spinner {
  width: 42px;
  height: 42px;
  border: 3px solid rgba(148, 163, 184, 0.35);
  border-top-color: #3b82f6;
  border-radius: 50%;
  animation: spin 0.75s linear infinite;
}

.spinner-sm {
  width: 22px;
  height: 22px;
  border-width: 2px;
}

.dark .spinner {
  border-color: rgba(71, 85, 105, 0.5);
  border-top-color: #60a5fa;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

/* Fade + slide up */
.fade-up-enter-active {
  transition:
    opacity 0.45s ease,
    transform 0.45s ease;
}

.fade-up-leave-active {
  transition:
    opacity 0.2s ease,
    transform 0.2s ease;
}

.fade-up-enter-from {
  opacity: 0;
  transform: translateY(12px);
}

.fade-up-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}

/* Stagger list items */
.list-enter-active {
  transition:
    opacity 0.4s ease,
    transform 0.4s ease;
  transition-delay: var(--delay, 0ms);
}

.list-enter-from {
  opacity: 0;
  transform: translateY(10px);
}

.list-leave-active {
  transition: opacity 0.2s ease;
}

.list-leave-to {
  opacity: 0;
}

.list-move {
  transition: transform 0.35s ease;
}

.reveal-item {
  animation: revealUp 0.45s ease both;
  animation-delay: var(--delay, 0ms);
}

@keyframes revealUp {
  from {
    opacity: 0;
    transform: translateY(12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
