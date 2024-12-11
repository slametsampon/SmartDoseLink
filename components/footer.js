export default function Footer() {
  const footer = document.createElement('footer');
  footer.className = 'bg-gray-800 text-white p-4 text-center';

  footer.innerHTML = `
    <p>&copy; 2024 SmartDoseLink. All rights reserved.</p>
  `;
  return footer;
}
