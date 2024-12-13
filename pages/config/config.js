import Navbar from '../../components/navbar.js';
import Footer from '../../components/footer.js';
import TabNavigation from '../../components/tabNavigation.js';
import FormOperational from '../../components/formOperational.js';
import FormMode from '../../components/formMode.js';
import FormSafety from '../../components/formSafety.js';

// Inisialisasi aplikasi
const app = document.getElementById('app');

// Tambahkan komponen ke aplikasi
app.appendChild(Navbar());
app.appendChild(TabNavigation());
app.appendChild(FormOperational());
app.appendChild(FormMode());
app.appendChild(FormSafety());
app.appendChild(Footer());

// Tambahkan fungsionalitas tab navigasi
document.querySelectorAll('.tab-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    document
      .querySelectorAll('.tab-btn')
      .forEach((tab) => tab.classList.remove('text-blue-600', 'font-semibold'));
    document
      .querySelectorAll('.tab-content')
      .forEach((content) => content.classList.add('hidden'));

    btn.classList.add('text-blue-600', 'font-semibold');
    document.getElementById(btn.dataset.tab).classList.remove('hidden');
  });
});
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
