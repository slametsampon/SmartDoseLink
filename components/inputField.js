export default function InputField(label, type, value, onChange) {
  const wrapper = document.createElement('div');
  wrapper.className = 'mb-4';

  const inputLabel = document.createElement('label');
  inputLabel.textContent = label;
  inputLabel.className = 'block text-gray-700 mb-2';

  const input = document.createElement('input');
  input.type = type;
  input.value = value;
  input.className = 'w-full p-2 border rounded';
  input.addEventListener('input', (e) => onChange(e.target.value));

  wrapper.appendChild(inputLabel);
  wrapper.appendChild(input);
  return wrapper;
}
