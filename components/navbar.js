export default function Navbar() {
  const navbar = document.createElement('nav');
  navbar.className =
    'bg-blue-600 text-white p-4 shadow-md fixed top-0 left-0 w-full z-10';

  navbar.innerHTML = `
    <div class="container mx-auto flex justify-between items-center">
      <h1 class="text-xl font-bold">SmartDoseLink</h1>
      <ul class="flex space-x-4">
        <li><a href="#" class="hover:text-gray-200">Home</a></li>
        <li><a href="#" class="hover:text-gray-200">About</a></li>
        <li><a href="#" class="hover:text-gray-200">Contact</a></li>
      </ul>
    </div>
  `;
  return navbar;
}
