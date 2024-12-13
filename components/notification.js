export default function Notifications() {
  const section = document.createElement('section');
  section.innerHTML = `
      <h2 class="text-xl font-bold">Notifications & Logs</h2>
      <ul id="notificationLog" class="space-y-2 bg-white p-4 rounded shadow-md"></ul>
  `;
  return section;
}
