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
