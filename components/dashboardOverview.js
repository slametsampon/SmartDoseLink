export default function DashboardOverview() {
  const section = document.createElement('section');
  section.innerHTML = `
      <h2 class="text-xl font-bold">Dashboard Overview</h2>
      <div id="statusCards" class="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div class="bg-white p-4 rounded shadow-md text-center">
              <div class="text-4xl">📊</div>
              <h3 class="text-lg font-bold">Volume Dosis Terkini</h3>
              <p id="doseValue" class="text-2xl" id="doseValue">125 ml</p>
          </div>
          <div class="bg-white p-4 rounded shadow-md text-center">
              <div class="text-4xl">⏱️</div>
              <h3 class="text-lg font-bold">Lama Operasi</h3>
              <p id="timeValue" class="text-2xl" id="timeValue">3h 20m</p>
          </div>
          <div class="bg-white p-4 rounded shadow-md text-center">
              <div class="text-4xl">💧</div>
              <h3 class="text-lg font-bold">Laju Alir</h3>
              <p id="flowValue" class="text-2xl" id="flowValue">1.2 ml/s</p>
          </div>
          <div class="bg-white p-4 rounded shadow-md text-center">
              <div class="text-4xl">✅</div>
              <h3 class="text-lg font-bold">Status Sistem</h3>
              <p id="statusValue" class="text-2xl" id="statusValue">Aktif</p>
          </div>
      </div>
  `;
  return section;
}
