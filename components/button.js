export default function Button(label, onClick) {
  const button = document.createElement('button');
  button.textContent = label;
  button.className =
    'px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700';
  button.addEventListener('click', onClick);
  return button;
}
