export default function Navbar() {
  const navbar = document.createElement('nav');
  navbar.className =
    'bg-blue-600 text-white shadow-md fixed top-0 left-0 w-full z-10';

  navbar.innerHTML = `
    <div class="container px-1 flex justify-between items-center">
      <a href="/SmartDoseLink" class="flex flex-row">
        <img src="/SmartDoseLink/public/images/logoSmartDoseLink50x50.webp" alt="SmartDoseLink" class="rounded-xl">
        <div class="px-3 font-sans text-sm align-text-bottom font-thin text-white">Smart<span class="font-bold">Dose</span>Link</div>
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
