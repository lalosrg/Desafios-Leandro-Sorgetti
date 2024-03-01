// Lista de artículos del menú disponibles
const menuItems = [
    { name: "Hamburguesa", price: 8.99 },
    { name: "Pizza", price: 10.99 },
    { name: "Ensalada", price: 5.99 },
    { name: "Papas Fritas", price: 2.99 }
];

// Cargar los elementos del menú
function loadMenu() {
    const menuDiv = document.getElementById('menu');
    menuItems.forEach(item => {
        const label = document.createElement('label');
        label.innerHTML = `<input type="checkbox" name="menu-item" value="${item.name}"> ${item.name} - $${item.price}`;
        menuDiv.appendChild(label);
    });
}

// Calcular el costo total del pedido
function calculateTotalCost() {
    const selectedItems = document.querySelectorAll('input[name="menu-item"]:checked');
    let totalCost = 0;
    selectedItems.forEach(item => {
        const itemName = item.value;
        const selectedItem = menuItems.find(menuItem => menuItem.name === itemName);
        totalCost += selectedItem.price;
    });
    return totalCost.toFixed(2);
}

// Enviar el pedido
function submitOrder(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const comments = document.getElementById('comments').value;
    const totalCost = calculateTotalCost();

    // Mostrar confirmación del pedido
    const confirmationDiv = document.getElementById('confirmation');
    confirmationDiv.innerHTML = `
        <h2>Confirmación del Pedido</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Dirección de Entrega:</strong> ${address}</p>
        <p><strong>Teléfono:</strong> ${phone}</p>
        <p><strong>Correo Electrónico:</strong> ${email}</p>
        <p><strong>Detalles del Pedido:</strong></p>
        <p>${[...document.querySelectorAll('input[name="menu-item"]:checked')].map(item => item.value).join(', ')}</p>
        <p><strong>Costo Total:</strong> $${totalCost}</p>
        <p><strong>Comentarios:</strong> ${comments}</p>
    `;
    confirmationDiv.classList.remove('hidden');
}

// Cargar los elementos del menú cuando la página esté completamente cargada
window.onload = function() {
    loadMenu();
    const orderForm = document.getElementById('order-form');
    orderForm.addEventListener('submit', submitOrder);
};
