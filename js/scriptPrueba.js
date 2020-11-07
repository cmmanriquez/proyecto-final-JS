const productos = getProductos();

const containerShop = document.getElementById('container__shop');


productos.forEach(producto =>{
	let tarjetas = crearTarjetas(producto);
	containerShop.appendChild(tarjetas);
})

function crearTarjetas(producto) {
	let divDeProductos = document.createElement('div');
	divDeProductos.id = producto.id;
	divDeProductos.classList = 'producto col-5';

	let tipoDiv = document.createElement('div');
	tipoDiv.innerHTML = "Producto: " + producto.tipo;
	let precioDiv = document.createElement('div');
	precioDiv.innerHTML = "Precio: $" + producto.precio;
	let stockDiv = document.createElement('div');
	stockDiv.innerHTML = producto.stock;
	let img = document.createElement('img');
	img.src = producto.img;

	let boton = document.createElement('button');
	boton.innerHTML = 'Comprar'

	boton.addEventListener('click', () => {
		alert("Las piezas aún no están listas para la venta, por favor vuelve pronto");
		img.style.opacity = 0.5;
		
	})

	divDeProductos.appendChild(tipoDiv);
	divDeProductos.appendChild(img);
	divDeProductos.appendChild(precioDiv);
	divDeProductos.appendChild(stockDiv);
	divDeProductos.appendChild(boton); 
	return divDeProductos;
}