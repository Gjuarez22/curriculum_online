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
          <h1 class="text-2xl font-light tracking-widest uppercase">
            Gerardo Daniel <br />
            <span class="font-bold text-[#94a3b8] dark:text-blue-400 transition-colors"
              >Juárez Pérez</span
            >
          </h1>
          <p
            class="mt-3 text-xs tracking-[0.15em] border-t border-gray-500 dark:border-slate-700 pt-2 inline-block text-gray-300 dark:text-slate-400"
          >
            INGENIERO EN DESARROLLO DE SOFTWARE
          </p>
        </header>

        <!-- BARRA LATERAL -->
        <aside
          class="w-full md:w-1/3 bg-stone-100 dark:bg-slate-800/50 p-6 md:p-8 border-b md:border-b-0 md:border-r border-gray-200 dark:border-slate-800 transition-colors duration-300"
        >
          <!-- Foto -->
          <div class="flex justify-center mb-6 mt-4 md:mt-0">
            <img
              src="https://via.placeholder.com/150"
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
            <ul class="space-y-3 text-sm text-gray-700 dark:text-slate-400">
              <li class="flex items-center">
                <span class="mr-3 text-lg">📍</span> Tonacatepeque, San Salvador
              </li>
              <li class="flex items-center">
                <span class="mr-3 text-lg">📞</span> (503) 7290-6464
              </li>
              <li class="flex items-center">
                <span class="mr-3 text-lg">✉️</span> gerardo.juarez118@outlook.com
              </li>
              <li class="flex items-center">
                <span class="mr-3 text-lg">📅</span> 15 de Julio, 2001
              </li>
            </ul>
          </section>

          <!-- Educación -->
          <section class="mb-8">
            <h2
              class="text-lg font-bold border-b-2 border-[#2c3e50] dark:border-blue-500/50 mb-4 pb-1 uppercase tracking-wider dark:text-slate-100"
            >
              Educación
            </h2>
            <div class="mb-5">
              <p class="font-bold text-sm dark:text-slate-200">Universidad Francisco Gavidia</p>
              <p class="italic text-xs text-gray-600 dark:text-blue-400/80 mb-1">2020 - 2025</p>
              <p class="text-sm text-gray-700 dark:text-slate-400">
                Ingeniería en Desarrollo de Software
              </p>
            </div>
            <div>
              <p class="font-bold text-sm dark:text-slate-200">ITEXSAL</p>
              <p class="italic text-xs text-gray-600 dark:text-blue-400/80 mb-1">2017 - 2018</p>
              <p class="text-sm text-gray-700 dark:text-slate-400">Bachillerato en Computación</p>
            </div>
          </section>

          <!-- Idiomas -->
          <section class="mb-8">
            <h2
              class="text-lg font-bold border-b-2 border-[#2c3e50] dark:border-blue-500/50 mb-4 pb-1 uppercase tracking-wider dark:text-slate-100"
            >
              Idiomas
            </h2>
            <div class="space-y-2 text-sm text-gray-700 dark:text-slate-400">
              <p class="dark:text-slate-200 font-semibold mb-2">Inglés:</p>
              <p class="flex justify-between items-center">
                Lectura
                <span
                  class="bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300 px-2 py-0.5 rounded text-xs"
                  >Intermedio</span
                >
              </p>
              <p class="flex justify-between items-center">
                Escritura
                <span
                  class="bg-gray-200 text-gray-700 dark:bg-slate-800 dark:text-slate-400 px-2 py-0.5 rounded text-xs border border-transparent dark:border-slate-700"
                  >Básico</span
                >
              </p>
              <p class="flex justify-between items-center">
                Habla
                <span
                  class="bg-gray-200 text-gray-700 dark:bg-slate-800 dark:text-slate-400 px-2 py-0.5 rounded text-xs border border-transparent dark:border-slate-700"
                  >Básico</span
                >
              </p>
            </div>
          </section>

          <!-- Cursos -->
          <section>
            <h2
              class="text-lg font-bold border-b-2 border-[#2c3e50] dark:border-blue-500/50 mb-4 pb-1 uppercase tracking-wider dark:text-slate-100"
            >
              Cursos
            </h2>
            <ul class="list-disc list-inside text-xs space-y-2 text-gray-700 dark:text-slate-400">
              <li>Azure Fundamentals DP900</li>
              <li>Habilidades Blandas - empleaTECH</li>
              <li>Introducción a Linux Red Hat</li>
              <li>Seguridad Informática - ESET</li>
            </ul>
          </section>
        </aside>

        <!-- CUERPO PRINCIPAL -->
        <main class="w-full md:w-2/3 p-6 md:p-8">
          <!-- HEADER ESCRITORIO -->
          <header
            class="hidden md:block bg-[#1e293b] dark:bg-slate-950 text-white p-8 -m-8 mb-8 border-b border-transparent dark:border-slate-800 transition-colors"
          >
            <h1 class="text-4xl font-light tracking-widest uppercase">
              Gerardo Daniel <br />
              <span class="font-bold text-[#94a3b8] dark:text-blue-400 transition-colors"
                >Juárez Pérez</span
              >
            </h1>
            <p
              class="mt-4 text-sm tracking-[0.2em] border-t border-gray-500 dark:border-slate-700 pt-3 inline-block text-gray-300 dark:text-slate-400"
            >
              INGENIERO EN DESARROLLO DE SOFTWARE
            </p>
          </header>

          <!-- Perfil -->
          <section class="mb-10 mt-4 md:mt-0">
            <h2
              class="text-xl font-bold text-[#1e293b] dark:text-slate-100 border-b border-gray-300 dark:border-slate-700 mb-4 pb-2 tracking-widest uppercase flex items-center transition-colors"
            >
              <span class="bg-[#1e293b] dark:bg-blue-500 w-2 h-6 mr-3 rounded-sm"></span> Perfil
            </h2>
            <p class="text-gray-700 dark:text-slate-400 leading-relaxed text-sm text-justify">
              Desarrollador de Software enfocado en crear sistemas escalables, diseñar flujos de
              trabajo eficientes y optimizar el rendimiento mediante buenas prácticas. Combino
              experiencia técnica en backend y frontend con una mentalidad orientada a resultados.
            </p>
          </section>

          <!-- Experiencia -->
          <section class="mb-10">
            <h2
              class="text-xl font-bold text-[#1e293b] dark:text-slate-100 border-b border-gray-300 dark:border-slate-700 mb-5 pb-2 tracking-widest uppercase flex items-center transition-colors"
            >
              <span class="bg-[#1e293b] dark:bg-blue-500 w-2 h-6 mr-3 rounded-sm"></span>
              Experiencia
            </h2>

            <div class="space-y-8">
              <!-- Puesto 1 -->
              <div class="relative pl-4 border-l-2 border-gray-300 dark:border-slate-700">
                <div
                  class="absolute w-3 h-3 bg-blue-600 dark:bg-blue-500 rounded-full -left-[7px] top-1.5 ring-4 ring-white dark:ring-slate-900 transition-colors"
                ></div>
                <div class="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
                  <h3 class="font-bold text-lg text-gray-900 dark:text-slate-200">
                    Desarrollador de Software
                  </h3>
                  <span
                    class="text-xs font-semibold text-blue-700 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/20 px-2 py-1 rounded mt-1 sm:mt-0"
                    >2025 - Presente</span
                  >
                </div>
                <p class="text-[#1e293b] dark:text-blue-300 font-medium text-sm mb-2">
                  Sistec Group
                </p>
                <ul
                  class="list-disc list-inside text-sm text-gray-700 dark:text-slate-400 space-y-1.5 marker:text-gray-400 dark:marker:text-slate-600"
                >
                  <li>Análisis y definición de requerimientos.</li>
                  <li>Gestión de área IT y despliegue de aplicaciones.</li>
                  <li>Desarrollo y mantenimiento de software.</li>
                </ul>
              </div>

              <!-- Puesto 2 -->
              <div class="relative pl-4 border-l-2 border-gray-300 dark:border-slate-700">
                <div
                  class="absolute w-3 h-3 bg-gray-400 dark:bg-slate-600 rounded-full -left-[7px] top-1.5 ring-4 ring-white dark:ring-slate-900 transition-colors"
                ></div>
                <div class="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
                  <h3 class="font-bold text-lg text-gray-900 dark:text-slate-200">
                    Analista Programador
                  </h3>
                  <span
                    class="text-xs font-semibold text-gray-600 dark:text-slate-400 bg-gray-200 dark:bg-slate-800 px-2 py-1 rounded mt-1 sm:mt-0"
                    >2024 - 2025</span
                  >
                </div>
                <p class="text-[#1e293b] dark:text-blue-300 font-medium text-sm mb-2">
                  Defensoría del Consumidor
                </p>
                <ul
                  class="list-disc list-inside text-sm text-gray-700 dark:text-slate-400 space-y-1.5 marker:text-gray-400 dark:marker:text-slate-600"
                >
                  <li>Desarrollo de aplicaciones con ASP.NET framework.</li>
                  <li>Análisis y desarrollo de módulos internos.</li>
                  <li>Desarrollo de bases de datos con SQL Server.</li>
                </ul>
              </div>

              <!-- Puesto 3 -->
              <div class="relative pl-4 border-l-2 border-transparent">
                <div
                  class="absolute w-3 h-3 bg-gray-400 dark:bg-slate-600 rounded-full -left-[7px] top-1.5 ring-4 ring-white dark:ring-slate-900 transition-colors"
                ></div>
                <div class="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
                  <h3 class="font-bold text-lg text-gray-900 dark:text-slate-200">
                    Analista y Desarrollador Web
                  </h3>
                  <span
                    class="text-xs font-semibold text-gray-600 dark:text-slate-400 bg-gray-200 dark:bg-slate-800 px-2 py-1 rounded mt-1 sm:mt-0"
                    >2022 - 2024</span
                  >
                </div>
                <p class="text-[#1e293b] dark:text-blue-300 font-medium text-sm mb-2">
                  CRB-Autoparts
                </p>
                <ul
                  class="list-disc list-inside text-sm text-gray-700 dark:text-slate-400 space-y-1.5 marker:text-gray-400 dark:marker:text-slate-600"
                >
                  <li>Desarrollo de aplicaciones web con Symfony.</li>
                  <li>Desarrollo de APIs RESTful y microservicios.</li>
                  <li>Implementación de facturación electrónica.</li>
                </ul>
              </div>
            </div>
          </section>

          <!-- Tecnologías -->
          <section>
            <h2
              class="text-xl font-bold text-[#1e293b] dark:text-slate-100 border-b border-gray-300 dark:border-slate-700 mb-5 pb-2 tracking-widest uppercase flex items-center transition-colors"
            >
              <span class="bg-[#1e293b] dark:bg-blue-500 w-2 h-6 mr-3 rounded-sm"></span>
              Tecnologías
            </h2>
            <div class="flex flex-wrap gap-2.5">
              <span
                v-for="tech in skills"
                :key="tech"
                class="bg-gray-100 dark:bg-slate-800 text-gray-800 dark:text-slate-300 px-3 py-1.5 rounded-md text-xs font-semibold border border-gray-200 dark:border-slate-700 hover:border-[#1e293b] dark:hover:border-blue-500/50 hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors cursor-default shadow-sm"
              >
                {{ tech }}
              </span>
            </div>
          </section>
        </main>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Estado reactivo para controlar el modo oscuro (por defecto lo iniciamos en false / modo claro)
const isDarkMode = ref(false)

// Función que invierte el valor al hacer click en el botón
const toggleTheme = () => {
  isDarkMode.value = !isDarkMode.value
}

const skills = [
  'React.js',
  'Angular',
  'Vue.js',
  'Nest.js',
  'Symfony',
  'PHP',
  'Spring Boot',
  'ASP.NET Core/Framework',
  'Javascript',
  'GIT',
  'PostgreSQL',
  'SQL Server',
  'MySQL',
  'Tailwind CSS',
  'Postman',
]
</script>

<style scoped>
/* Transiciones suaves generales para que el cambio no sea brusco */
* {
  transition-property: background-color, border-color, color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}
</style>
