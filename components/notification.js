export default function Notifications() {
  const section = document.createElement('section');
  section.innerHTML = `
        <h2 class="text-xl font-bold">Notifications & Logs</h2>
        <ul id="notificationLog" class="space-y-2 bg-white p-4 rounded shadow-md"></ul>
    `;

  const logs = [
    'Proses dosing dimulai.',
    'Sensor pH berhasil dikalibrasi.',
    'Setpoint tercapai: 125 ml.',
    'Proses dosing dihentikan.',
  ];

  const container = section.querySelector('#notificationLog');
  logs.forEach((log) => {
    const logItem = document.createElement('li');
    logItem.className = 'p-2 border-b border-gray-200';
    logItem.innerText = log;
    container.appendChild(logItem);
  });

  return section;
}
