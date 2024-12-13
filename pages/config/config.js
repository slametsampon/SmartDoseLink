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
