import Navbar from '../../components/navbar.js';
import Footer from '../../components/footer.js';
import ConfigContent from '../../components/configContent.js';

function App() {
  const app = document.getElementById('app');

  // Buat dan tambahkan komponen
  const navbar = Navbar();
  const configContent = ConfigContent();
  const footer = Footer();

  app.appendChild(navbar);
  app.appendChild(configContent);
  app.appendChild(footer);
}

document.addEventListener('DOMContentLoaded', App);
