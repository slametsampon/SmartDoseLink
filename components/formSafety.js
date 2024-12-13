export default function FormSafety() {
  const safety = document.createElement('div');
  safety.id = 'safety';
  safety.className = 'tab-content hidden';

  safety.innerHTML = `
      <h2 class="text-xl font-semibold mb-2">Keamanan</h2>
      <div>
        <label class="block text-sm font-medium">Batas Minimum Volume Dosing (ml)</label>
        <input type="number" class="w-full mt-1 px-3 py-2 border rounded" placeholder="Masukkan batas minimum">
      </div>
    `;
  return safety;
}
