let users = [];

function addUser() {
  const user = {
    id: users.length + 1,
    name: document.getElementById('name').value,
    username: document.getElementById('username').value,
    email: document.getElementById('email').value,
    address: {
      street: document.getElementById('street').value,
      city: document.getElementById('city').value,
      zipcode: document.getElementById('zipcode').value,
    },
    phone: document.getElementById('phone').value,
    website: document.getElementById('website').value,
    company: {
      name: document.getElementById('companyName').value,
      catchPhrase: document.getElementById('catchPhrase').value,
    },
  };

  users.push(user);
  displayUsers();
  clearForm();
}

function displayUsers() {
  const tableBody = document.getElementById('userTableBody');
  tableBody.innerHTML = '';

  users.forEach(user => {
    const row = tableBody.insertRow();
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);
    const cell4 = row.insertCell(3);

    cell1.textContent = user.id;
    cell2.textContent = user.name;
    cell3.textContent = user.email;
    cell4.textContent = user.company.name;
  });
}

function clearForm() {
  document.getElementById('userForm').reset();
}