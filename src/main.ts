import './style.css'

// Main application initialization
document.addEventListener('DOMContentLoaded', () => {
  const app = document.querySelector<HTMLDivElement>('#app')!

  app.innerHTML = `
    <div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div class="container mx-auto px-4 py-8">
        <header class="text-center mb-12">
          <h1 class="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Gains Tracker
          </h1>
          <p class="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Aplicación web para tener control sobre ganancias en plataformas de transporte
            para aplicar estrategias generadoras de ganancias
          </p>
        </header>

        <main class="max-w-4xl mx-auto">
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h2 class="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
              Panel de Control
            </h2>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div class="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 border border-blue-200 dark:border-blue-700">
                <h3 class="text-lg font-medium text-blue-800 dark:text-blue-200 mb-2">
                  Ganancias Totales
                </h3>
                <p class="text-3xl font-bold text-blue-600 dark:text-blue-400">
                  $0.00
                </p>
              </div>
              
              <div class="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 border border-green-200 dark:border-green-700">
                <h3 class="text-lg font-medium text-green-800 dark:text-green-200 mb-2">
                  Viajes Hoy
                </h3>
                <p class="text-3xl font-bold text-green-600 dark:text-green-400">
                  0
                </p>
              </div>
              
              <div class="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-6 border border-purple-200 dark:border-purple-700">
                <h3 class="text-lg font-medium text-purple-800 dark:text-purple-200 mb-2">
                  Promedio/Hora
                </h3>
                <p class="text-3xl font-bold text-purple-600 dark:text-purple-400">
                  $0.00
                </p>
              </div>
            </div>

            <div class="mt-8">
              <button class="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors">
                Agregar Viaje
              </button>
              <button class="ml-4 bg-gray-600 hover:bg-gray-700 text-white font-medium py-2 px-4 rounded-lg transition-colors">
                Ver Estadísticas
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  `
})