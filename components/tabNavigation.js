export default function TabNavigation() {
  const tabNav = document.createElement('div');
  tabNav.className = 'border-b mb-4';

  tabNav.innerHTML = `
      <nav class="flex space-x-4">
        <button data-tab="operational" class="tab-btn text-blue-600 font-semibold">Pengaturan Operasional</button>
        <button data-tab="mode" class="tab-btn text-gray-600">Mode Operasi</button>
        <button data-tab="safety" class="tab-btn text-gray-600">Keamanan</button>
      </nav>
    `;
  return tabNav;
}
