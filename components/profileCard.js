export default class ProfileCard {
  constructor(name, job) {
    this.name = name;
    this.job = job;
  }

  render() {
    const card = document.createElement('div');
    card.className = 'p-6 bg-white rounded-lg shadow-md max-w-sm mb-6';

    const title = document.createElement('h2');
    title.className = 'text-xl font-bold';
    title.textContent = this.name;

    const description = document.createElement('p');
    description.className = 'text-gray-600 mt-2';
    description.textContent = this.job;

    card.appendChild(title);
    card.appendChild(description);
    return card;
  }
}
