export default function FormOperational() {
  const operational = document.createElement('div');
  operational.id = 'operational';
  operational.className = 'tab-content';

  operational.innerHTML = `
      <h2 class="text-xl font-semibold mb-2">Pengaturan Operasional</h2>
      <div class="space-y-4">
        <div>
          <label class="block text-sm font-medium">Volume Dosing (ml)</label>
          <input type="number" class="w-full mt-1 px-3 py-2 border rounded" placeholder="Masukkan volume">
        </div>
        <div>
          <label class="block text-sm font-medium">Lama Dosing (detik/menit)</label>
          <input type="number" class="w-full mt-1 px-3 py-2 border rounded" placeholder="Masukkan durasi">
        </div>
      </div>
    `;
  return operational;
}
