export default function Navbar() {
  const navbar = document.createElement('nav');
  navbar.className =
    'bg-blue-600 text-white py-4 px-3 shadow-md fixed top-0 left-0 w-full z-10';

  navbar.innerHTML = `
    <div class="container mx-auto flex justify-between items-center">
      <a href="/">
        <img src="../public/images/private51x51.png" alt="SmartDoseLink">
      </a>
      <ul class="flex space-x-4">
        <li><a href="/pages/dashboard" class="hover:text-gray-200">Dashboard</a></li>
        <li><a href="/pages/config" class="hover:text-gray-200">Config</a></li>
        <li><a href="/pages/about" class="hover:text-gray-200">About</a></li>
      </ul>
    </div>
  `;
  return navbar;
}
