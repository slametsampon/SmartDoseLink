import InputField from './inputField.js';
import Button from './button.js';

export default function LoginForm() {
  const form = document.createElement('form');
  form.className = 'p-6 bg-white rounded-lg shadow-md max-w-sm';

  const title = document.createElement('h2');
  title.className = 'text-2xl font-bold mb-4';
  title.textContent = 'Login';

  let email = '';
  let password = '';

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Email: ${email}, Password: ${password}`);
  };

  form.appendChild(title);
  form.appendChild(
    InputField('Email', 'email', email, (value) => (email = value))
  );
  form.appendChild(
    InputField('Password', 'password', password, (value) => (password = value))
  );
  form.appendChild(Button('Login', handleSubmit));

  return form;
}
