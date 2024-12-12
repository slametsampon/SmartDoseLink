import Navbar from '../../components/navbar.js';
import Footer from '../../components/footer.js';
import DashboardContent from '../../components/dashboardContent.js';

function App() {
  const app = document.getElementById('app');

  // Buat dan tambahkan komponen
  const navbar = Navbar();
  const dashboardContent = DashboardContent();
  const footer = Footer();

  app.appendChild(navbar);
  app.appendChild(dashboardContent);
  app.appendChild(footer);
}

document.addEventListener('DOMContentLoaded', App);
