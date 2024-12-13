export default function DataMonitoring() {
  const section = document.createElement('section');
  section.innerHTML = `
        <h2 class="text-xl font-bold">Data Monitoring</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <canvas id="lineChart"></canvas>
            <canvas id="barChart"></canvas>
        </div>
    `;

  return section;
}
