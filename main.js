// Import Komponen
import ProfileCard from './components/ProfileCard.js';
import LoginForm from './components/LoginForm.js';

// Tambahkan komponen ke DOM
const app = document.getElementById('app');

// Contoh Penggunaan Komponen
app.appendChild(new ProfileCard('John Doe', 'Web Developer').render());
app.appendChild(new LoginForm());
