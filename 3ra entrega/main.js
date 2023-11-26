const productos = [{ id: 1, imagen: "https://bytquimica.com.ar/wp-content/uploads/2020/12/Lavandina.jpg", nombre: "Lavandina 5L", precio: 1300, categoria:"5L" },
{ id: 2, imagen:"https://http2.mlstatic.com/D_NQ_NP_685352-MLA71113323994_082023-O.webp", nombre: "Detergente 5L", precio: 1800, categoria:"5L" },
{ id: 3, imagen:"https://http2.mlstatic.com/D_NQ_NP_2X_763829-MLA71729917859_092023-F.webp", nombre: "Cloro 5L", precio: 2100, categoria:"5L" },
{ id: 4, imagen:"https://i0.wp.com/klean.com.ar/wp-content/uploads/2020/05/sanitizantedesinfectante-klean-bidon-scaled.jpg?resize=510%2C510&ssl=1", nombre: "Sanitizante 5L", precio: 1000, categoria:"5L" },
{ id: 5, imagen:"https://www.limpapel.com.ar/wp-content/uploads/2022/02/ALCOHOL-EN-GEL-1L.png", nombre: "Sanitizante 1L", precio: 250, categoria:"1L" },
{ id: 6, imagen:"https://acdn.mitiendanube.com/stores/002/635/813/products/sanitizante-gatillo-x-500-ml1-8f21fdda0905990baa16711341874134-1024-1024.jpg", nombre: "Sanitizante 500ml", precio: 150, categoria:"500ml" },
{ id: 7, imagen:"https://www.cedent.com.ar/web/image/product.template/8180/image_1024?unique=24748e6", nombre: "Alcohol 5L", precio: 1100, categoria:"5L" },
{ id: 8, imagen:"https://d2r9epyceweg5n.cloudfront.net/stores/001/247/320/products/alcohol-70-purocol-1l1-933711a6eab21f15a516446762819793-640-0.png", nombre: "Alcohol 1L", precio: 300, categoria:"1L" },
{ id: 9, imagen:"https://cdn.batitienda.com/baticloud/images/product_4b8211daec5d44d38b3603d0ff71a5bb_637560027207993152_0_m.jpg", nombre: "Alcohol 500ml", precio: 200, categoria:"500ml" },
{ id: 10, imagen:"https://industriaslitoral.com.ar/wp-content/uploads/sites/25/2022/05/picture_prod_x00029283.jpg", nombre: "Jabon Liquido", precio: 2300, categoria:"5L" },
{ id: 11, imagen:"https://acdn.mitiendanube.com/stores/001/237/868/products/alcohol-en-gel-5-litros1-8741aca08ac7ba59fe16018454721348-640-0.png", nombre: "Alcohol en gel 5L", precio: 900, categoria:"5L" },
{ id: 12, imagen:"https://bioelectronsac.com/wp-content/uploads/2020/07/salud_alessi_alcohol_gel_1L_01.jpg", nombre: "Alcohol en gel 1L", precio: 200, categoria:"1L" },
{ id: 13, imagen:"https://quimicariocuarto.com.ar/wp-content/uploads/2017/07/ALCOHOL-EN-GEL-PORTA-500-500x501.jpg", nombre: "Alcohol en gel 500ml", precio: 100, categoria:"500ml" },
{ id: 14, imagen:"https://http2.mlstatic.com/D_NQ_NP_987178-MLA47500995687_092021-O.webp", nombre: "Desodorante p/pisos", precio: 1500, categoria:"5L" }
];



// Reemplaza el bloque original de productos con una solicitud fetch
fetch("./data.json")
  .then(response => response.json())
  .then(data => {
    const productos = data; // Asigna los productos obtenidos a la variable productos

    // Almacena los productos en el localStorage
    const productosJSON = JSON.stringify(productos);
    localStorage.setItem('productos', productosJSON);

    // Llamada inicial para mostrar todos los productos
    mostrarTodosLosProductos();
  })
  .catch(error => {
    console.error('Error al obtener los productos:', error);
  });


/////////////////////////////// Contenedores/////////////////////////////////////////
const productListContainer = document.getElementById('product-list');
const cartContainer = document.getElementById('cart');
const cartItemsContainer = document.getElementById('cart-items');
const cartTotalElement = document.getElementById('cart-total');

//////////////////////////// Manejo del carrito ////////////////////////////////////////////
let carrito = [];

// Cargar carrito desde localStorage si existe
if (localStorage.getItem('carrito')) {
  carrito = JSON.parse(localStorage.getItem('carrito'));
  actualizarCarrito(); // Asegúrate de actualizar la interfaz después de cargar el carrito
}



// Función para vaciar el carrito
function vaciarCarrito() {
  carrito = [];
  actualizarCarrito();
}

// Función para agregar un producto al carrito
function agregarAlCarrito(id, nombre, precio) {
  const item = { id, nombre, precio };
  carrito.push(item);
  actualizarCarrito();

  Swal.fire({
    icon: 'success',
    title: 'Producto agregado al carrito',
    text: `${nombre} se ha agregado al carrito.`,
  });
}

// Función para completar la compra
function completarCompra() {
  if (carrito.length === 0) {
    Swal.fire({
      icon: 'info',
      title: 'Carrito Vacío',
      text: 'Agrega productos al carrito antes de completar la compra.',
    });
  } else {
    // Alerta de confirmación
    Swal.fire({
      icon: 'question',
      title: '¿Estás seguro?',
      text: '¿Quieres finalizar la compra?',
      showCancelButton: true,
      confirmButtonText: 'Sí, finalizar compra',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        // Aquí puedes agregar lógica adicional para finalizar la compra
        // Ejemplo: Mostrar un mensaje de éxito
        Swal.fire({
          icon: 'success',
          title: 'Compra Completada',
          text: 'Gracias por tu compra. ¡Vuelve pronto!',
        });

        // Vaciar el carrito después de completar la compra
        vaciarCarrito();
      }
    });
  }
}

// Función para mostrar y ocultar el carrito
function mostrarCarrito() {
    const cart = document.getElementById('cart');
    cart.style.display = carrito.length > 0 ? 'block' : 'none';
  }

// Función para actualizar la interfaz del carrito
function actualizarCarrito() {
  const cartItemsContainer = document.getElementById('cart-items');
  cartItemsContainer.innerHTML = '';
  let total = 0;

  carrito.forEach((item) => {
    let li = document.createElement("li");
    li.textContent = `${item.nombre} - $${item.precio.toFixed(2)}`;
     // Agregar un botón para eliminar el producto
     let deleteButton = document.createElement("button");
     deleteButton.textContent = "x";
     deleteButton.classList.add("delete-button");
     deleteButton.addEventListener("click", () => eliminarDelCarrito(item.id));
 
     li.appendChild(deleteButton);

    cartItemsContainer.appendChild(li);
    total += item.precio;

    
  });

  cartTotalElement.textContent = total.toFixed(2);

  localStorage.setItem('carrito', JSON.stringify(carrito)); // Actualiza el localStorage

  mostrarCarrito(); // Llama a esta función para mostrar u ocultar el carrito
}

// Función para eliminar un producto del carrito
function eliminarDelCarrito(id) {
    // Encontrar el índice del producto en el carrito
    const index = carrito.findIndex((item) => item.id === id);

    if (index !== -1) {
        // Eliminar solo el producto en el índice encontrado
        carrito.splice(index, 1);
        // Actualizar la interfaz del carrito después de eliminar el producto
        actualizarCarrito();
    }
}


////////////////////////////// Interfaz de usuario ////////////////////////////////////////////////

// Función para mostrar todos los productos
function mostrarTodosLosProductos() {
    productListContainer.innerHTML = '';
    productos.forEach((item) => {
      // Solo mostrar productos que no estén en el carrito
      if (!estaEnCarrito(item.id)) {
        mostrarProducto(item);
      }
    });
  }

  // Función para verificar si un producto está en el carrito
function estaEnCarrito(id) {
  return carrito.some((item) => item.id === id);
}

// Función para mostrar un producto en la interfaz
function mostrarProducto(item) {
  let div = document.createElement("div");
  div.className = "card";
  div.innerHTML = `
    <img src="${item.imagen}" alt="${item.nombre}" width="100" height="100">
    <p>Nombre: ${item.nombre}</p>
    <p>Cat: ${item.categoria}</p>
    <b>$${item.precio}</b>
    <hr />
    <button onclick="agregarAlCarrito(${item.id}, '${item.nombre}', ${item.precio})">Comprar ahora</button>
  `;
  productListContainer.appendChild(div);
}

// Función para filtrar productos por categoría
function filtrarProductos(categoria) {
    productListContainer.innerHTML = ''; // Limpiar el contenedor de productos
  
    // Filtrar productos por la categoría seleccionada
    productos.filter((item) => item.categoria === categoria)
      .forEach((item) => {
        // Solo mostrar productos que no estén en el carrito
        if (!carrito.some((carritoItem) => carritoItem.id === item.id)) {
          mostrarProducto(item);
        }
      });
    }  

    // Función para crear y agregar botones de filtro
function agregarBotonesFiltro() {
    const filtroBotonesContainer = document.getElementById('filtro-botones');
  
    // Categorías disponibles
    const categorias = ['5L', '1L', '500ml'];
  
    // Botón para mostrar todos los productos
    const mostrarTodosButton = document.createElement('button');
    mostrarTodosButton.textContent = 'Mostrar Todos';
    mostrarTodosButton.addEventListener('click', mostrarTodosLosProductos);
    filtroBotonesContainer.appendChild(mostrarTodosButton);
  
    // Botones para filtrar por categoría
    categorias.forEach((categoria) => {
      const button = document.createElement('button');
      button.textContent = `Mostrar ${categoria}`;
      button.addEventListener('click', () => filtrarProductos(categoria));
      filtroBotonesContainer.appendChild(button);
    });
  }
  
  // Llamada inicial para agregar los botones de filtro
agregarBotonesFiltro();

// Llamada inicial para mostrar todos los productos
mostrarTodosLosProductos();