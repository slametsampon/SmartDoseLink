export default function FormMode() {
  const mode = document.createElement('div');
  mode.id = 'mode';
  mode.className = 'tab-content hidden';

  mode.innerHTML = `
      <h2 class="text-xl font-semibold mb-2">Mode Operasi</h2>
      <div>
        <label class="block text-sm font-medium">Mode Operasi</label>
        <select class="w-full mt-1 px-3 py-2 border rounded">
          <option>Manual</option>
          <option>Otomatis</option>
          <option>Sensor-Based</option>
        </select>
      </div>
    `;
  return mode;
}
