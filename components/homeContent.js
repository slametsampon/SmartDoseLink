export default function HomeContent() {
  const main = document.createElement('main');
  main.className = 'flex-1 container mx-auto p-8 text-center pt-20';

  main.innerHTML = `
    <h2 class="text-3xl font-bold text-gray-800">Welcome to SmartDoseLink</h2>
    <p class="text-gray-600 mt-4">
      Kontrol dan pantau sistem chemical dosing Anda dari mana saja, kapan saja.
    </p>
    <button class="mt-6 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
      Get Started
    </button>
  `;
  return main;
}
