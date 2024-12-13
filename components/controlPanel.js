export default function ControlPanel() {
  const section = document.createElement('section');
  section.innerHTML = `
        <h2 class="text-xl font-bold">Control Panel</h2>
        <div class="flex gap-4">
            <button id="startDosing" class="action-btn bg-green-500 hover:bg-green-600">
                Start Dosing
            </button>
            <button id="stopDosing" class="action-btn bg-red-500 hover:bg-red-600">
                Stop Dosing
            </button>
            <button id="calibrateSensor" class="action-btn bg-yellow-500 hover:bg-yellow-600">
                Calibrate Sensor
            </button>
        </div>
    `;

  // Tombol Tindakan
  const startDosing = section.querySelector('#startDosing');
  const stopDosing = section.querySelector('#stopDosing');
  const calibrateSensor = section.querySelector('#calibrateSensor');

  // Event Listeners
  startDosing.addEventListener('click', () => {
    alert('Dosing process started!');
    logActivity('Proses dosing dimulai.');
  });

  stopDosing.addEventListener('click', () => {
    alert('Dosing process stopped!');
    logActivity('Proses dosing dihentikan.');
  });

  calibrateSensor.addEventListener('click', () => {
    alert('Sensor calibration initiated!');
    logActivity('Proses kalibrasi sensor dimulai.');
  });

  // Fungsi untuk mencatat aktivitas
  function logActivity(message) {
    const logContainer = document.getElementById('notificationLog');
    const logItem = document.createElement('li');
    logItem.className = 'p-2 border-b border-gray-200';
    logItem.innerText = message;
    logContainer.appendChild(logItem);
  }

  return section;
}
