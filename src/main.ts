import './style.css'

type Entry = {
  kms: number
  earnings: number
  hours: number
  date: string
  city: 'Bogota' | 'Alrededores Bogota'
}

const localizedDays = [
  'Lunes',
  'Martes',
  'Miércoles',
  'Jueves',
  'Viernes',
  'Sábado',
  'Domingo',
]

const formatCurrency = (value: number) =>
  new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    maximumFractionDigits: 0,
  }).format(value)

const formatNumber = (value: number) =>
  new Intl.NumberFormat('es-CO', {
    maximumFractionDigits: 2,
  }).format(value)

document.addEventListener('DOMContentLoaded', () => {
  const app = document.querySelector<HTMLDivElement>('#app')!

  app.innerHTML = `
    <div class="min-h-screen bg-slate-950">
      <div class="relative overflow-hidden">
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.25),_transparent_55%)]"></div>
        <div class="absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_top,_rgba(129,140,248,0.25),_transparent_60%)] blur-3xl"></div>
        <div class="relative z-10 px-4 py-10 sm:px-8 lg:px-20">
          <header class="max-w-4xl mx-auto text-center space-y-4">
            <p class="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-sky-200">Gains Tracker</p>
            <h1 class="text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              Controla tus ganancias diarias con una interfaz moderna y fluida
            </h1>
            <p class="text-lg text-slate-200/80">
              Registra tus recorridos, ganancias y horas de trabajo para obtener una visión completa de tu rendimiento en las plataformas de transporte.
            </p>
          </header>

          <main class="mt-12 grid gap-8 lg:grid-cols-[minmax(0,_1fr)_minmax(0,_0.85fr)]">
            <section class="rounded-3xl border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur-lg sm:p-10">
              <div class="flex items-center justify-between gap-6">
                <div>
                  <h2 class="text-2xl font-semibold text-white sm:text-3xl">Registra tus ganancias</h2>
                  <p class="mt-2 max-w-xl text-sm text-slate-200/80">
                    Completa la información diaria para llevar un historial detallado. Puedes seleccionar un día anterior desde el calendario si deseas cargar datos pasados.
                  </p>
                </div>
                <span class="hidden rounded-full bg-sky-400/20 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-sky-200 lg:inline">Nuevo Registro</span>
              </div>

              <form id="entry-form" class="mt-8 grid gap-6 text-sm text-white lg:grid-cols-2">
                <label class="flex flex-col gap-2">
                  <span class="font-medium text-slate-200">Kilómetros recorridos</span>
                  <input
                    type="number"
                    name="kms"
                    min="0"
                    step="0.1"
                    required
                    class="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-base text-white placeholder:text-slate-200/40 focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-400/50"
                    placeholder="Ej: 125.6"
                  />
                </label>

                <label class="flex flex-col gap-2">
                  <span class="font-medium text-slate-200">Ganancias totales</span>
                  <input
                    type="number"
                    name="earnings"
                    min="0"
                    step="1000"
                    required
                    class="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-base text-white placeholder:text-slate-200/40 focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-400/50"
                    placeholder="Ej: 85000"
                  />
                </label>

                <label class="flex flex-col gap-2">
                  <span class="font-medium text-slate-200">Horas trabajadas</span>
                  <input
                    type="number"
                    name="hours"
                    min="0"
                    step="0.25"
                    required
                    class="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-base text-white placeholder:text-slate-200/40 focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-400/50"
                    placeholder="Ej: 8"
                  />
                </label>

                <label class="flex flex-col gap-2">
                  <span class="font-medium text-slate-200">Día trabajado</span>
                  <input
                    type="date"
                    name="date"
                    required
                    class="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-base text-white placeholder:text-slate-200/40 focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-400/50"
                  />
                </label>

                <label class="flex flex-col gap-2 lg:col-span-2">
                  <span class="font-medium text-slate-200">Ciudad</span>
                  <div class="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <label class="flex items-center gap-3 rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-base transition hover:border-sky-400">
                      <input type="radio" name="city" value="Bogota" required class="h-4 w-4 accent-sky-400" />
                      <span>Bogotá</span>
                    </label>
                    <label class="flex items-center gap-3 rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-base transition hover:border-sky-400">
                      <input type="radio" name="city" value="Alrededores Bogota" required class="h-4 w-4 accent-sky-400" />
                      <span>Alrededores Bogotá</span>
                    </label>
                  </div>
                </label>

                <button
                  type="submit"
                  class="group relative mt-2 inline-flex items-center justify-center gap-2 overflow-hidden rounded-2xl bg-sky-500 px-6 py-3 font-semibold text-white transition hover:bg-sky-400 lg:col-span-2"
                >
                  <span class="absolute inset-0 h-full w-full translate-y-full bg-gradient-to-r from-sky-400 via-emerald-400 to-sky-400 opacity-0 transition-transform duration-500 group-hover:translate-y-0 group-hover:opacity-100"></span>
                  <span class="relative z-10">Guardar registro</span>
                  <svg class="relative z-10 h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0-6.75-6.75M19.5 12l-6.75 6.75"></path>
                  </svg>
                </button>
              </form>

              <div class="mt-10 border-t border-white/10 pt-6">
                <h3 class="text-lg font-semibold text-white">Registros recientes</h3>
                <p class="mt-1 text-sm text-slate-200/60">Consulta la información que has cargado durante la semana.</p>
                <div id="entries-container" class="mt-5 space-y-3">
                  <p class="text-sm text-slate-200/60">Aún no has registrado información. Completa el formulario para ver tus datos aquí.</p>
                </div>
              </div>
            </section>

            <section class="flex flex-col gap-6">
              <div class="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur-xl sm:p-8">
                <h2 class="text-2xl font-semibold text-white">Estadísticas</h2>
                <p class="mt-2 text-sm text-slate-200/70">
                  Visualiza la ganancia promedio por kilómetro a lo largo de la semana. Los valores se actualizan automáticamente con cada registro.
                </p>

                <div class="mt-6 grid gap-4 sm:grid-cols-3">
                  <article class="rounded-2xl border border-white/10 bg-slate-900/80 p-4 shadow">
                    <p class="text-xs uppercase tracking-wide text-slate-400">Ganancias totales</p>
                    <p id="total-earnings" class="mt-2 text-2xl font-semibold text-white">$0</p>
                  </article>
                  <article class="rounded-2xl border border-white/10 bg-slate-900/80 p-4 shadow">
                    <p class="text-xs uppercase tracking-wide text-slate-400">Kilómetros totales</p>
                    <p id="total-kms" class="mt-2 text-2xl font-semibold text-white">0 km</p>
                  </article>
                  <article class="rounded-2xl border border-white/10 bg-slate-900/80 p-4 shadow">
                    <p class="text-xs uppercase tracking-wide text-slate-400">Ganancia promedio por km</p>
                    <p id="avg-per-km" class="mt-2 text-2xl font-semibold text-white">$0</p>
                  </article>
                </div>

                <div class="mt-8 rounded-2xl border border-white/10 bg-slate-900/60 p-6 shadow-inner">
                  <div class="flex items-center justify-between">
                    <h3 class="text-lg font-semibold text-white">Ganancia por km</h3>
                    <span id="chart-max-label" class="text-xs text-slate-400"></span>
                  </div>
                  <div class="mt-4">
                    <div class="relative">
                      <svg id="chart" viewBox="0 0 720 360" class="h-72 w-full text-sky-300"></svg>
                      <div class="absolute inset-0 flex items-end justify-between px-[60px] pb-3 text-[11px] uppercase tracking-wide text-slate-400">
                        ${localizedDays
                          .map(
                            (day) => `
                              <span class="flex-1 text-center">${day}</span>
                            `,
                          )
                          .join('')}
                      </div>
                    </div>
                    <p class="mt-4 text-xs text-slate-400">
                      Eje X: días de la semana · Eje Y: ganancia promedio por kilómetro
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  `

  const entries: Entry[] = []
  const form = document.querySelector<HTMLFormElement>('#entry-form')!
  const dateInput = form.querySelector<HTMLInputElement>('input[name="date"]')!
  const entriesContainer = document.querySelector<HTMLDivElement>('#entries-container')!
  const totalEarningsElement = document.querySelector<HTMLParagraphElement>('#total-earnings')!
  const totalKmsElement = document.querySelector<HTMLParagraphElement>('#total-kms')!
  const avgPerKmElement = document.querySelector<HTMLParagraphElement>('#avg-per-km')!
  const chartElement = document.querySelector<SVGSVGElement>('#chart')!
  const chartMaxLabel = document.querySelector<HTMLSpanElement>('#chart-max-label')!

  dateInput.valueAsDate = new Date()

  const renderEntries = () => {
    if (!entries.length) {
      entriesContainer.innerHTML = `
        <p class="text-sm text-slate-200/60">Aún no has registrado información. Completa el formulario para ver tus datos aquí.</p>
      `
      return
    }

    const items = entries
      .slice()
      .reverse()
      .map((entry) => {
        const date = new Date(entry.date)
        const dayName = localizedDays[(date.getDay() + 6) % 7]
        return `
          <article class="flex flex-col gap-2 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-100 shadow">
            <div class="flex flex-wrap items-center justify-between gap-2">
              <span class="text-xs uppercase tracking-wide text-slate-400">${dayName}</span>
              <span class="rounded-full bg-sky-400/20 px-3 py-1 text-xs font-semibold text-sky-200">${entry.city}</span>
            </div>
            <div class="grid grid-cols-2 gap-3 text-sm sm:grid-cols-4">
              <p><span class="text-slate-400">Fecha:</span> ${date.toLocaleDateString('es-CO')}</p>
              <p><span class="text-slate-400">Km:</span> ${formatNumber(entry.kms)}</p>
              <p><span class="text-slate-400">Ganancia:</span> ${formatCurrency(entry.earnings)}</p>
              <p><span class="text-slate-400">Horas:</span> ${formatNumber(entry.hours)}</p>
            </div>
          </article>
        `
      })
      .join('')

    entriesContainer.innerHTML = items
  }

  const updateSummary = () => {
    const totalEarnings = entries.reduce((sum, entry) => sum + entry.earnings, 0)
    const totalKms = entries.reduce((sum, entry) => sum + entry.kms, 0)

    totalEarningsElement.textContent = formatCurrency(totalEarnings)
    totalKmsElement.textContent = `${formatNumber(totalKms)} km`
    avgPerKmElement.textContent = totalKms ? formatCurrency(totalEarnings / totalKms) : '$0'
  }

  const drawChart = () => {
    const weeklyData = localizedDays.map((day) => {
      const indices = entries.filter((entry) => {
        const entryDate = new Date(entry.date)
        const entryDay = localizedDays[(entryDate.getDay() + 6) % 7]
        return entryDay === day
      })

      if (!indices.length) {
        return 0
      }

      const dayEarnings = indices.reduce((sum, entry) => sum + entry.earnings, 0)
      const dayKms = indices.reduce((sum, entry) => sum + entry.kms, 0)

      return dayKms ? dayEarnings / dayKms : 0
    })

    const maxValue = Math.max(...weeklyData, 1)
    chartMaxLabel.textContent = `Máximo actual: ${formatCurrency(maxValue)}/km`

    const width = 720
    const height = 360
    const paddingX = 60
    const paddingY = 50
    const innerWidth = width - paddingX * 2
    const innerHeight = height - paddingY * 2
    const stepX = weeklyData.length > 1 ? innerWidth / (weeklyData.length - 1) : 0

    const points = weeklyData
      .map((value, index) => {
        const x = paddingX + index * stepX
        const y = height - paddingY - (value / maxValue) * innerHeight
        return `${x},${y}`
      })
      .join(' ')

    const horizontalLines = Array.from({ length: 4 }, (_, i) => {
      const y = paddingY + (innerHeight / 4) * i
      const labelValue = maxValue - (maxValue / 4) * i
      return `
        <g>
          <line x1="${paddingX}" x2="${width - paddingX}" y1="${y}" y2="${y}" stroke="rgba(148, 163, 184, 0.2)" stroke-width="1" />
          <text x="${paddingX - 15}" y="${y + 4}" text-anchor="end" font-size="12" fill="rgba(148,163,184,0.75)">
            ${formatCurrency(labelValue)}
          </text>
        </g>
      `
    }).join('')

    chartElement.innerHTML = `
      <rect x="${paddingX}" y="${paddingY}" width="${innerWidth}" height="${innerHeight}" fill="url(#chartGradient)" opacity="0.12"></rect>
      <line x1="${paddingX}" y1="${paddingY}" x2="${paddingX}" y2="${height - paddingY}" stroke="rgba(148,163,184,0.4)" stroke-width="1.5"></line>
      <line x1="${paddingX}" y1="${height - paddingY}" x2="${width - paddingX}" y2="${height - paddingY}" stroke="rgba(148,163,184,0.4)" stroke-width="1.5"></line>
      ${horizontalLines}
      <polyline fill="none" stroke="url(#lineGradient)" stroke-width="4" stroke-linejoin="round" stroke-linecap="round" points="${points}"></polyline>
      ${weeklyData
        .map((value, index) => {
          const x = paddingX + index * stepX
          const y = height - paddingY - (value / maxValue) * innerHeight
          return `
            <g>
              <circle cx="${x}" cy="${y}" r="6" fill="#38bdf8" opacity="0.85"></circle>
              <text x="${x}" y="${y - 14}" text-anchor="middle" font-size="12" fill="rgba(224,231,255,0.9)">
                ${value ? formatCurrency(value) : '$0'}
              </text>
            </g>
          `
        })
        .join('')}
      <defs>
        <linearGradient id="lineGradient" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stop-color="#38bdf8" />
          <stop offset="100%" stop-color="#34d399" />
        </linearGradient>
        <linearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.35" />
          <stop offset="100%" stop-color="#1f2937" stop-opacity="0" />
        </linearGradient>
      </defs>
    `
  }

  form.addEventListener('submit', (event) => {
    event.preventDefault()
    const formData = new FormData(form)

    const entry: Entry = {
      kms: Number(formData.get('kms')),
      earnings: Number(formData.get('earnings')),
      hours: Number(formData.get('hours')),
      date: formData.get('date') as string,
      city: formData.get('city') as Entry['city'],
    }

    if (!entry.date) {
      entry.date = new Date().toISOString().split('T')[0]
    }

    entries.push(entry)
    renderEntries()
    updateSummary()
    drawChart()

    form.reset()
    dateInput.value = entry.date
  })

  renderEntries()
  updateSummary()
  drawChart()
})
