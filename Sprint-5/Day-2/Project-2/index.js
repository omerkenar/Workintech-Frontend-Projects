// Kodlar Buraya
const newButton = document.createElement('button');
newButton.textContent = 'Karanlık temayı aç';
newButton.id = 'acKapa';
document.querySelector('.description').appendChild(newButton);

function karanlikTemayiAcKapa() {
  const body = document.querySelector('body');
  if (body.classList.toggle('dark')) {
    newButton.textContent = 'Karanlık temayı kapat';
  } else {
    newButton.textContent = 'Karanlık temayı aç';
  }
}

document
  .getElementById('acKapa')
  .addEventListener('click', karanlikTemayiAcKapa);
