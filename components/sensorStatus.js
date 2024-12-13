export default function SensorStatus() {
  const section = document.createElement('section');
  section.innerHTML = `
      <h2 class="text-xl font-bold">Sensor Status</h2>
      <div id="sensorStatus" class="grid grid-cols-1 md:grid-cols-4 gap-6"></div>
  `;

  const sensors = [
    { name: 'Sensor pH', value: '7.1', status: 'green' },
    { name: 'Sensor EC', value: '1.8 dS/m', status: 'green' },
    { name: 'Kelembaban Tanah', value: '45%', status: 'yellow' },
    { name: 'Suhu', value: '25°C', status: 'green' },
  ];

  const container = section.querySelector('#sensorStatus');

  sensors.forEach((sensor) => {
    const sensorCard = document.createElement('div');
    sensorCard.className = `bg-white p-4 rounded shadow-md text-center border-l-4 border-${sensor.status}-500`;
    sensorCard.innerHTML = `
          <h3 class="text-lg font-bold">${sensor.name}</h3>
          <p class="text-2xl">${sensor.value}</p>
      `;
    container.appendChild(sensorCard);
  });

  return section;
}
