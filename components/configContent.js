export default function ConfigContent() {
  const main = document.createElement('main');
  main.className = 'flex-1 container mx-auto p-8 text-center pt-20';

  main.innerHTML = `
    <h2 class="text-2xl font-bold text-gray-800 text-left">Config Page</h2>
    <p class="text-gray-600 mt-4 underline">
      Under Construction
    </p>
    <button class="mt-6 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
      <a href="/SmartDoseLink" class="hover:text-gray-200">Back to Home</a>
    </button>
  `;
  return main;
}
