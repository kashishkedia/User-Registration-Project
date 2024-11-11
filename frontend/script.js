const userForm = document.getElementById('userForm');
const userList = document.getElementById('userList');
const submitButton = document.getElementById('submitButton');

let isEditing = false;
let editIndex = null;

async function fetchUsers() {
    const response = await fetch('http://localhost:5000/users');
    const users = await response.json();
    displayUsers(users);
}

function displayUsers(users) {
    userList.innerHTML = '';
    users.forEach((user, index) => {
        const userItem = document.createElement('li');
        
        if (isEditing && editIndex === index) {
            // Inline edit form for the user being edited
            userItem.innerHTML = `
                <input type="text" id="editName" value="${user.name}" />
                <input type="email" id="editEmail" value="${user.email}" />
                <input type="date" id="editDob" value="${user.dob}" />
                <button onclick="saveEdit(${index})">Save</button>
                <button onclick="cancelEdit()">Cancel</button>
            `;
        } else {
            // Normal display for other users
            userItem.innerText = `${user.name} - ${user.email} - ${user.dob}`;
            const editButton = document.createElement('button');
            editButton.innerText = 'Edit';
            editButton.onclick = () => startEdit(user, index);
            userItem.appendChild(editButton);

            const deleteButton = document.createElement('button');
            deleteButton.innerText = 'Delete';
            deleteButton.onclick = () => deleteUser(index);
            userItem.appendChild(deleteButton);
        }

        userList.appendChild(userItem);
    });
}

function startEdit(user, index) {
    isEditing = true;
    editIndex = index;
    displayUsers([{ name: user.name, email: user.email, dob: user.dob }]); // Refresh display with inline edit form
}

async function saveEdit(index) {
    const updatedUser = {
        name: document.getElementById('editName').value,
        email: document.getElementById('editEmail').value,
        dob: document.getElementById('editDob').value,
    };

    await updateUser(updatedUser);
    isEditing = false;
    editIndex = null;
    fetchUsers();
}

function cancelEdit() {
    isEditing = false;
    editIndex = null;
    fetchUsers(); // Refresh the list to exit edit mode
}

userForm.addEventListener('submit', async function (event) {
    event.preventDefault();
    const user = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        dob: document.getElementById('dob').value,
    };

    if (isEditing) {
        await saveEdit(editIndex);
    } else {
        await addUser(user);
    }

    clearForm();
    fetchUsers();
});

async function addUser(user) {
    await fetch('http://localhost:5000/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
    });
}

async function updateUser(user) {
    await fetch(`http://localhost:5000/users/${editIndex}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
    });
    isEditing = false;
    editIndex = null;
    submitButton.innerText = 'Add User';
}

async function deleteUser(index) {
    await fetch(`http://localhost:5000/users/${index}`, {
        method: 'DELETE',
    });
    fetchUsers();
}

function clearForm() {
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('dob').value = '';
    isEditing = false;
    editIndex = null;
    submitButton.innerText = 'Add User';
}

fetchUsers();
