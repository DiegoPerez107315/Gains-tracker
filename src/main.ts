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
    <div class="relative flex min-h-screen flex-col bg-[#050815] text-slate-100 lg:h-screen lg:overflow-hidden">
      <div class="pointer-events-none absolute inset-0 overflow-hidden">
        <div class="absolute -left-24 top-[-12%] h-[420px] w-[420px] rounded-full bg-sky-500/20 blur-3xl"></div>
        <div class="absolute bottom-[-25%] right-[-10%] h-[520px] w-[520px] rounded-full bg-emerald-500/15 blur-3xl"></div>
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.2),_transparent_60%)]"></div>
      </div>
      <div class="relative z-10 flex flex-1 flex-col gap-10 px-6 py-8 lg:flex-row lg:items-stretch lg:gap-12 lg:px-16 lg:py-12">
        <aside class="flex w-full flex-col gap-6 rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-[0_35px_90px_rgba(8,15,40,0.45)] backdrop-blur-2xl lg:max-w-[420px] lg:p-8">
          <div>
            <span class="inline-flex items-center gap-2 rounded-full bg-slate-900/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.32em] text-sky-300">Gains</span>
            <h1 class="mt-4 text-3xl font-semibold leading-tight text-white">Registra tus ganancias diarias</h1>
            <p class="mt-2 text-sm text-slate-300/80">
              Completa la información para mantener un control detallado de tu rendimiento. Puedes seleccionar un día anterior desde el calendario.
            </p>
          </div>

          <form id="entry-form" class="grid gap-4 text-sm text-white">
            <label class="flex flex-col gap-2">
              <span class="font-medium text-slate-200">Kilómetros recorridos</span>
              <input
                type="number"
                name="kms"
                min="0"
                step="0.1"
                required
                class="w-full rounded-[18px] border border-white/15 bg-white/10 px-4 py-3 text-base text-white placeholder:text-slate-200/40 focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-400/40"
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
                class="w-full rounded-[18px] border border-white/15 bg-white/10 px-4 py-3 text-base text-white placeholder:text-slate-200/40 focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-400/40"
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
                class="w-full rounded-[18px] border border-white/15 bg-white/10 px-4 py-3 text-base text-white placeholder:text-slate-200/40 focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-400/40"
                placeholder="Ej: 8"
              />
            </label>

            <label class="flex flex-col gap-2">
              <span class="font-medium text-slate-200">Día trabajado</span>
              <input
                type="date"
                name="date"
                required
                class="w-full rounded-[18px] border border-white/15 bg-white/10 px-4 py-3 text-base text-white placeholder:text-slate-200/40 focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-400/40"
              />
            </label>

            <label class="flex flex-col gap-2">
              <span class="font-medium text-slate-200">Ciudad</span>
              <div class="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <label class="flex items-center gap-3 rounded-[18px] border border-white/15 bg-white/10 px-4 py-3 text-base transition hover:border-sky-400">
                  <input type="radio" name="city" value="Bogota" required class="h-4 w-4 accent-sky-400" />
                  <span>Bogotá</span>
                </label>
                <label class="flex items-center gap-3 rounded-[18px] border border-white/15 bg-white/10 px-4 py-3 text-base transition hover:border-sky-400">
                  <input type="radio" name="city" value="Alrededores Bogota" required class="h-4 w-4 accent-sky-400" />
                  <span>Alrededores Bogotá</span>
                </label>
              </div>
            </label>

            <button
              type="submit"
              class="group mt-2 inline-flex items-center justify-center gap-2 overflow-hidden rounded-[22px] bg-sky-500 px-6 py-3 text-base font-semibold text-white transition focus:outline-none focus:ring-2 focus:ring-sky-400/50 focus:ring-offset-2 focus:ring-offset-slate-900 hover:bg-sky-400"
            >
              <span class="relative z-10">Guardar registro</span>
              <svg class="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0-6.75-6.75M19.5 12l-6.75 6.75"></path>
              </svg>
            </button>
          </form>

          <div class="flex flex-1 flex-col overflow-hidden rounded-[28px] border border-white/10 bg-slate-900/30 p-5">
            <div class="flex items-center justify-between gap-2">
              <h3 class="text-lg font-semibold text-white">Registros recientes</h3>
              <span class="text-xs uppercase tracking-wide text-slate-400">Historial</span>
            </div>
            <div id="entries-container" class="mt-4 flex-1 space-y-3 overflow-y-auto pr-1 text-sm text-slate-200/80">
              <p class="text-sm text-slate-400/80">Aún no has registrado información. Completa el formulario para ver tus datos aquí.</p>
            </div>
          </div>
        </aside>

        <section class="flex flex-1 flex-col gap-6 rounded-[40px] border border-white/5 bg-slate-900/40 p-6 shadow-[0_55px_140px_rgba(6,12,30,0.55)] backdrop-blur-3xl lg:p-10">
          <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 class="text-3xl font-semibold text-white">Estadísticas</h2>
              <p class="text-sm text-slate-300/80">Visualiza la ganancia promedio por kilómetro a lo largo de la semana.</p>
            </div>
            <div class="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-medium text-slate-200">
              <span class="h-2 w-2 rounded-full bg-emerald-400"></span>
              Datos actualizados en vivo
            </div>
          </div>

          <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
            <article class="rounded-[26px] border border-white/10 bg-slate-950/40 p-5 shadow-inner">
              <p class="text-xs uppercase tracking-wide text-slate-400">Ganancias totales</p>
              <p id="total-earnings" class="mt-3 text-3xl font-semibold text-white">$0</p>
            </article>
            <article class="rounded-[26px] border border-white/10 bg-slate-950/40 p-5 shadow-inner">
              <p class="text-xs uppercase tracking-wide text-slate-400">Kilómetros totales</p>
              <p id="total-kms" class="mt-3 text-3xl font-semibold text-white">0 km</p>
            </article>
            <article class="rounded-[26px] border border-white/10 bg-slate-950/40 p-5 shadow-inner">
              <p class="text-xs uppercase tracking-wide text-slate-400">Ganancia promedio por km</p>
              <p id="avg-per-km" class="mt-3 text-3xl font-semibold text-white">$0</p>
            </article>
          </div>

          <div class="flex flex-1 flex-col overflow-hidden rounded-[32px] border border-white/10 bg-slate-950/50 p-6">
            <div class="flex items-center justify-between gap-3">
              <h3 class="text-lg font-semibold text-white">Ganancia por kilómetro</h3>
              <span id="chart-max-label" class="text-xs text-slate-400"></span>
            </div>
            <div class="mt-6 flex-1">
              <div class="relative h-full">
                <svg id="chart" viewBox="0 0 720 360" class="h-full w-full max-h-[360px] text-sky-300"></svg>
                <div class="pointer-events-none absolute inset-0 flex items-end justify-between px-[60px] pb-4 text-[11px] uppercase tracking-wide text-slate-500">
                  ${localizedDays
                    .map(
                      (day) => `
                        <span class="flex-1 text-center">${day}</span>
                      `,
                    )
                    .join('')}
                </div>
              </div>
            </div>
            <p class="mt-6 text-xs text-slate-400">
              Eje X: días de la semana · Eje Y: ganancia promedio por kilómetro
            </p>
          </div>
        </section>
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
        <p class="text-sm text-slate-400/80">Aún no has registrado información. Completa el formulario para ver tus datos aquí.</p>
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
          <article class="flex flex-col gap-3 rounded-[22px] border border-white/10 bg-white/5 p-4 text-sm text-slate-100 shadow">
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
