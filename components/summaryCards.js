export function SummaryCards(state) {
  return `
    <section id="status-summary" class="grid grid-cols-1 md:grid-cols-4 gap-6">
        ${createCard('Volume Dosis Terkini', state.volumeDose)}
        ${createCard('Lama Operasi', state.operatingTime)}
        ${createCard('Laju Alir (ml/detik)', state.flowRate)}
        ${createCard('Status Sistem', state.systemStatus, 'text-green-600')}
    </section>
    `;
}

function createCard(title, value, extraClasses = 'text-blue-600') {
  return `
    <div class="bg-white p-6 rounded-lg shadow">
        <h2 class="text-lg font-semibold">${title}</h2>
        <p class="text-4xl font-bold ${extraClasses}">${value}</p>
    </div>
    `;
}
