const form = document.getElementById('contact-form');
const nameInput = document.getElementById('contact-name');
const numberInput = document.getElementById('contact-number');
const favoriteCheckbox = document.getElementById('favorite-contact');
const contactTable = document.getElementById('contact-table').querySelector('tbody');
const totalContactSpan = document.querySelector('.numero-de-contatos');
let contactCount = 0

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const contactName = nameInput.value;
  const contactNumber = numberInput.value;
  const isFavorite = favoriteCheckbox.checked;

  if (contactName === '' || contactNumber ==='') {
    alert('Por favor, preencha todos os campos!');
    return;
  }

  addContactToTable(contactName, contactNumber, isFavorite);

  form.reset();
});

function addContactToTable(contactName, contactNumber, isFavorite) {
  const newRow = document.createElement('tr');

  const nameCell = document.createElement('td');
  nameCell.textContent = contactName;

  const numberCell = document.createElement('td');
  numberCell.textContent = contactNumber;

  const favoriteCell = document.createElement('td');

  if (isFavorite) {
    favoriteIcon = document.createElement('img');
    favoriteIcon.src = './images/favorito.png.png';
    favoriteIcon.alt = 'Favorito';
    favoriteIcon.classList.add('favorite-icon');
    favoriteCell.appendChild(favoriteIcon);
  } else {
    favoriteCell.textContent = '';
  }

  newRow.appendChild(nameCell);
  newRow.appendChild(numberCell);
  newRow.appendChild(favoriteCell);

  contactTable.appendChild(newRow);

  contactCount++;
  totalContactSpan.textContent = contactCount;  
};