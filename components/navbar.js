export default function Navbar() {
  const navbar = document.createElement('nav');
  navbar.className =
    'bg-blue-600 text-white py-4 shadow-md fixed top-0 left-0 w-full z-10';

  navbar.innerHTML = `
    <div class="container px-3 flex justify-between items-center">
      <a href="/SmartDoseLink">
        <img src="/SmartDoseLink/public/images/private51x51.png" alt="SmartDoseLink">
      </a>
      <ul class="flex space-x-4">
        <li><a href="/SmartDoseLink/pages/dashboard" class="hover:text-gray-200">Dashboard</a></li>
        <li><a href="/SmartDoseLink/pages/config" class="hover:text-gray-200">Config</a></li>
        <li><a href="/SmartDoseLink/pages/about" class="hover:text-gray-200">About</a></li>
      </ul>
    </div>
  `;
  return navbar;
}
