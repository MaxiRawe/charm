const productos = [
    {
        id: 1,
        nombre: 'Producto 1',
        foto: '/assets/foto1.png',
        precio: 1
    },
    {
        id: 2,
        nombre: 'Producto 2',
        foto: '/assets/foto2.png',
        precio: 1000
    },
    {
        id: 3,
        nombre: 'Producto 3',
        foto: '/assets/foto3.png',
        precio: 500
    },
    {
        id: 4,
        nombre: 'Producto 4',
        foto: '/assets/foto3.png',
        precio: 500
    },
]

function productosDinamicos(foto, nombre, precio, id) {
    const div = document.createElement('div');
    div.className = 'producto'; 
    div.classList.add(`producto-${id}`); 
    div.dataset.id = id; 
    
    const img = document.createElement('img');
    img.src = foto;
    img.alt = nombre;
    img.className = 'producto-imagen';
    
    const nombreP = document.createElement('p');
    nombreP.className = 'producto-nombre';
    nombreP.textContent = nombre;
    
    const precioP = document.createElement('p');
    precioP.className = 'producto-precio';
    precioP.textContent = `$${precio}`;
    
    div.appendChild(img);
    div.appendChild(nombreP);
    div.appendChild(precioP);

    gridProductos.appendChild(div);
}

// Llama a la función con el id incluido
productos.forEach(({foto, nombre, precio, id}) => productosDinamicos(foto, nombre, precio, id));