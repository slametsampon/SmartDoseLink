// Impor Komponen
import Navbar from '../../components/navbar.js';
import Footer from '../../components/footer.js';
import DashboardOverview from '../../components/dashboardOverview.js';
import DataMonitoring from '../../components/dataMonitoring.js';
import SensorStatus from '../../components/sensorStatus.js';
import ControlPanel from '../../components/controlPanel.js';
import Notifications from '../../components/notification.js';

// Render Aplikasi
const app = document.getElementById('app');

app.append(
  Navbar(),
  DashboardOverview(),
  DataMonitoring(),
  SensorStatus(),
  ControlPanel(),
  Notifications(),
  Footer()
);
// Fungsi Update Data
function updateDashboardData() {
  // Data contoh (simulasi data dari server/IoT)
  const randomDose = Math.floor(Math.random() * 200) + ' ml';
  const randomTime = `${Math.floor(Math.random() * 5)}h ${Math.floor(
    Math.random() * 60
  )}m`;
  const randomFlow = (Math.random() * 2).toFixed(2) + ' ml/s';
  const systemStatus = Math.random() > 0.5 ? 'Aktif' : 'Tidak Aktif';

  // Update Nilai DOM
  document.getElementById('doseValue').innerText = randomDose;
  document.getElementById('timeValue').innerText = randomTime;
  document.getElementById('flowValue').innerText = randomFlow;
  document.getElementById('statusValue').innerText = systemStatus;

  // Tambahkan log ke notifikasi
  addNotification(
    `Data diperbarui: Volume ${randomDose}, Status: ${systemStatus}`
  );
}

// Fungsi Tambah Notifikasi
function addNotification(message) {
  const logContainer = document.getElementById('notificationLog');
  const logItem = document.createElement('li');
  logItem.className = 'p-2 border-b border-gray-200';
  logItem.innerText = message;
  logContainer.prepend(logItem);
}

// Simulasi Update Data Setiap 5 Detik
setInterval(updateDashboardData, 5000);
