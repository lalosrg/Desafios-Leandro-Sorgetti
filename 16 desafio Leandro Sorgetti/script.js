document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const contactsList = document.getElementById('contactsList');
    let contacts = JSON.parse(localStorage.getItem('contacts')) || [];

    function renderContacts() {
        contactsList.innerHTML = '';

        contacts.forEach((contact, index) => {
            const contactDiv = document.createElement('div');
            contactDiv.classList.add('contact');
            contactDiv.innerHTML = `
                <strong>${contact.name}</strong> - ${contact.email} - ${contact.birthdate}
                <button class="editBtn" data-index="${index}">Editar</button>
                <button class="deleteBtn" data-index="${index}">Eliminar</button>
            `;
            contactsList.appendChild(contactDiv);
        });

        const editButtons = document.querySelectorAll('.editBtn');
        const deleteButtons = document.querySelectorAll('.deleteBtn');

        editButtons.forEach(button => {
            button.addEventListener('click', function() {
                const index = parseInt(this.getAttribute('data-index'));
                editContact(index);
            });
        });

        deleteButtons.forEach(button => {
            button.addEventListener('click', function() {
                const index = parseInt(this.getAttribute('data-index'));
                deleteContact(index);
            });
        });
    }

    // Función para agregar un nuevo contacto o actualizar uno existente
    function addOrUpdateContact(name, email, birthdate, index = null) {
        const newContact = { name, email, birthdate };

        if (index !== null && index >= 0 && index < contacts.length) {
            // Actualizar contacto existente
            contacts[index] = newContact;
        } else {
            // Agregar nuevo contacto
            contacts.push(newContact);
        }

        // Actualizar localStorage
        localStorage.setItem('contacts', JSON.stringify(contacts));

        renderContacts();
    }

    function editContact(index) {
        const contact = contacts[index];
        document.getElementById('name').value = contact.name;
        document.getElementById('email').value = contact.email;
        document.getElementById('birthdate').value = contact.birthdate;
        contactForm.dataset.index = index;
        contactForm.querySelector('button[type="submit"]').innerText = 'Actualizar';
    }

    function deleteContact(index) {
        contacts.splice(index, 1);
        localStorage.setItem('contacts', JSON.stringify(contacts));
        renderContacts();
    }

   
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const birthdate = document.getElementById('birthdate').value;
        const index = parseInt(this.dataset.index);

        if (name && email && birthdate) {
            addOrUpdateContact(name, email, birthdate, index);
            contactForm.reset();
            contactForm.querySelector('button[type="submit"]').innerText = 'Agregar';
            delete contactForm.dataset.index;
        } else {
            alert('Por favor complete todos los campos.');
        }
    });

    
    renderContacts();
});
