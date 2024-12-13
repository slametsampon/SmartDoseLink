export default function HomeContent() {
  const main = document.createElement('main');
  main.className = 'flex-1 container mx-auto p-8 text-center pt-20';

  main.innerHTML = `
    <!-- Overlay Global -->
    <div class="bg-black/40 min-h-screen text-white">
      
      <!-- Header (Sudah Ada) -->
      <header class="py-6 px-10">
        <h1 class="text-4xl font-bold">SmartDoseLink</h1>
      </header>

      <!-- Hero Section -->
      <section class="h-screen flex items-center justify-center text-center px-6">
        <div class="max-w-3xl">
          <h2 class="text-5xl font-extrabold">Kontrol Dosing Nutrisi & Kimia Anda</h2>
          <p class="mt-6 text-xl">Dengan teknologi IoT canggih dan pengoperasian remote, hasil pertanian optimal kini dalam genggaman Anda.</p>
          <div class="mt-8 space-x-4">
            <button class="btn-primary">Mulai Sekarang</button>
            <button class="btn-secondary">Pelajari Lebih Lanjut</button>
          </div>
        </div>
      </section>

      <!-- Fitur Utama -->
      <section class="py-20 px-6 text-center">
        <h2 class="text-4xl font-bold">Fitur Utama Kami</h2>
        <div class="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="bg-white/80 p-8 rounded-lg shadow-lg text-gray-800">
            <h3 class="text-2xl font-bold">Remote Operation</h3>
            <p class="mt-4">Kendalikan sistem dosing dari jarak jauh kapan saja, di mana saja.</p>
          </div>

          <div class="bg-white/80 p-8 rounded-lg shadow-lg text-gray-800">
            <h3 class="text-2xl font-bold">Real-Time Monitoring</h3>
            <p class="mt-4">Pantau data tanaman Anda dengan pembaruan langsung.</p>
          </div>

          <div class="bg-white/80 p-8 rounded-lg shadow-lg text-gray-800">
            <h3 class="text-2xl font-bold">Smart Sensor Integration</h3>
            <p class="mt-4">Hubungkan perangkat IoT seperti sensor pH, kelembaban, dan suhu.</p>
          </div>
        </div>
      </section>

      <!-- Call to Action -->
      <section class="py-20 px-6 text-center">
        <h2 class="text-4xl font-bold">Siap untuk Memaksimalkan Panen Anda?</h2>
        <p class="mt-6 text-xl">Daftar sekarang dan optimalkan hasil pertanian Anda.</p>
        <button class="btn-primary mt-8">Mulai Sekarang</button>
      </section>

      <!-- Footer -->
      <footer class="py-10 px-6 text-center text-white">
        <p class="text-sm">© 2024 SmartDoseLink. All rights reserved.</p>
      </footer>

    </div>
  `;
  return main;
}
