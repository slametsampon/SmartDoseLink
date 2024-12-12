import Navbar from '../../components/navbar.js';
import Footer from '../../components/footer.js';
import AboutContent from '../../components/aboutContent.js';

function App() {
  const app = document.getElementById('app');

  // Buat dan tambahkan komponen
  const navbar = Navbar();
  const aboutContent = AboutContent();
  const footer = Footer();

  app.appendChild(navbar);
  app.appendChild(aboutContent);
  app.appendChild(footer);
}

document.addEventListener('DOMContentLoaded', App);
