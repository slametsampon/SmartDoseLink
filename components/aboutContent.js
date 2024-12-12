export default function AboutContent() {
  const about = document.createElement('main');
  about.className = 'flex-1 container mx-auto p-8 text-left mt-6';

  about.innerHTML = `
    <h2 class="text-2xl font-thin text-gray-800 mb-6 pt-6">Smart<span class="text-orange-600 font-bold italic">Dose</span>Link</h2>
    <p class="text-gray-600 leading-relaxed p-3 bg-orange-50 mb-8 rounded-2xl shadow-lg first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-green-800 first-letter:mr-1 first-letter:float-left">
      Smart~Dose~Link adalah platform inovatif berbasis web yang dirancang untuk memudahkan pengendalian sistem dosing kimia dan nutrisi secara remote. Dengan antarmuka yang intuitif dan teknologi IoT canggih, kami memastikan Anda dapat mengontrol proses dosing dari mana saja, kapan saja.
    </p>

    <h3 class="text-xl font-semibold text-gray-800 mb-3 mt-4">Fitur Utama</h3>
    <ul class="list-disc pl-6 text-gray-700 mb-8">
      <li><b>Remote Operation:</b> Kendalikan sistem dosing dengan mudah dari mana saja.</li>
      <li><b>Real-Time Monitoring:</b> Pantau status perangkat secara real-time.</li>
      <li><b>Parameter Setting:</b> Sesuaikan parameter seperti lama operasi dan volume dosing.</li>
      <li><b>Smart Sensor Integration:</b> Hubungkan dengan sensor cerdas seperti konsentrasi pupuk, pH, dan kelembaban tanah.</li>
      <li><b>Automatisasi Dosing:</b> Sistem akan secara otomatis menyesuaikan dosis berdasarkan data yang diperoleh dari sensor, menciptakan lingkungan optimal untuk tanaman Anda.</li>
    </ul>
    <div class="bg-amber-50 rounded-xl p-3 shadow-md">
      <h3 class="text-xl font-semibold text-gray-800 mb-3">Fitur Tambahan</h3>
      <ul class="list-disc pl-6 text-gray-700">
        <li>Automasi Berbasis Jadwal</li>
        <li>Pengaturan Multi-Zona</li>
        <li>Integrasi IoT Lanjutan</li>
        <li>Keamanan dengan Autentikasi 2FA</li>
      </ul>
    </div>
  `;
  return about;
}
