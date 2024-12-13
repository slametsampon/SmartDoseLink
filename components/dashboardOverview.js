export default function DashboardOverview() {
  const section = document.createElement('section');
  section.innerHTML = `
        <h2 class="text-xl font-bold">Dashboard Overview</h2>
        <div id="statusCards" class="grid grid-cols-1 md:grid-cols-4 gap-6"></div>
    `;

  const data = [
    { title: 'Volume Dosis Terkini', value: '125 ml', icon: '📊' },
    { title: 'Lama Operasi', value: '3h 20m', icon: '⏱️' },
    { title: 'Laju Alir', value: '1.2 ml/s', icon: '💧' },
    { title: 'Status Sistem', value: 'Aktif', icon: '✅' },
  ];

  const container = section.querySelector('#statusCards');

  data.forEach((item) => {
    const card = document.createElement('div');
    card.className = 'bg-white p-4 rounded shadow-md text-center';
    card.innerHTML = `
            <div class="text-4xl">${item.icon}</div>
            <h3 class="text-lg font-bold">${item.title}</h3>
            <p class="text-2xl">${item.value}</p>
        `;
    container.appendChild(card);
  });

  return section;
}
