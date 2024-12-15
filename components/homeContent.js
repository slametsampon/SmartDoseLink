export default function HomeContent() {
  const main = document.createElement('main');
  main.className = 'flex-1 container mx-auto p-8 text-center pt-20';

  main.innerHTML = `
    <!-- Overlay Global -->
    <div class="min-h-screen text-white">
      
      <!-- Header (Sudah Ada) -->
      <header class="pt-0">
        <h1 class="text-2xl">Smart<span class="italic font-bold text-orange-600">Dose</span>Link</h1>
      </header>

      <!-- Hero Section -->
      <section class="mb-3 flex items-center justify-center text-center">
          <p class="pt-2 font-semibold italic">Dengan teknologi IoT canggih dan pengoperasian remote, hasil agribisnis optimal kini dalam genggaman Anda.</p>
      </section>

      <!-- Fitur Utama -->
      <section class="text-center mb-3">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div class="bg-white/80 p-4 rounded-lg shadow-lg text-gray-800 text-left">
            <h2 class="text-xl font-extrabold mb-3">Fitur Utama :</h2>
            <h3 class="font-extrabold italic">Remote Operation</h3>
            <p class="mt-0 mb-3">Kendalikan sistem dosing dari jarak jauh kapan saja, di mana saja.</p>
            <h3 class="font-extrabold italic">Real-Time Monitoring</h3>
            <p class="mt-0 mb-3">Pantau data tanaman Anda dengan pembaruan langsung.</p>
            <h3 class="font-extrabold italic">Smart Sensor Integration</h3>
            <p class="mt-0">Hubungkan perangkat IoT seperti sensor pH, kelembaban, dan suhu.</p>
          </div>
        </div>
      </section>

      <!-- Call to Action -->
      <section class="text-center">
        <h2 class="font-extrabold">Siap untuk Memaksimalkan Panen Anda?</h2>
        <p class="font-semibold mb-3">Daftar sekarang dan optimalkan hasil pertanian Anda.</p>
        <button class="btn-primary px-3 py-1 bg-blue-600 rounded-xl hover:bg-blue-800">Mulai Sekarang</button>
      </section>

    </div>
  `;
  return main;
}
