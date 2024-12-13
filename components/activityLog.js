export function ActivityLog(logs) {
  return `
    <section class="mt-8">
        <h2 class="text-xl font-semibold">Log Aktivitas</h2>
        <ul id="activity-log" class="bg-white p-6 rounded-lg shadow space-y-4">
            ${
              logs.length
                ? logs.map((log) => `<li class="log-item">${log}</li>`).join('')
                : `<li class="log-item">Tidak ada log aktivitas</li>`
            }
        </ul>
    </section>
    `;
}
