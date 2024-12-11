// Komponen sebagai fungsi
function Card(title, description) {
  return `
        <div class="card">
          <h2>${title}</h2>
          <p>${description}</p>
        </div>
      `;
}

// Render ke DOM
document.getElementById('app').innerHTML = `
      ${Card('Judul 1', 'Deskripsi pertama')}
      ${Card('Judul 2', 'Deskripsi kedua')}
    `;
