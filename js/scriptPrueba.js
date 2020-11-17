const productos = getProductos();

const carro = [];

const containerShop = document.getElementById('container__shop');


productos.forEach(producto =>{
	let tarjetas = crearTarjetas(producto);
	containerShop.appendChild(tarjetas);
})


function crearTarjetas(producto) {
	let divDeProductos = document.createElement('div');
	divDeProductos.classList = 'producto';
	divDeProductos.id = producto.id;

	let img = document.createElement('img');
	img.classList = 'imagen_shop';
	img.src = producto.img;
	
	let tipoDiv = document.createElement('tipo');
	tipoDiv.classList = 'tipo';
	tipoDiv.innerHTML = producto.tipo;

	let precioDiv = document.createElement('precio');
	precioDiv.classList = 'precio';
	precioDiv.innerHTML = "$" + producto.precio;

	let stockDiv = document.createElement('stock');

	let boton = document.createElement('button');
	boton.classList = 'boton_shop'
	boton.innerHTML = 'Comprar'

	boton.addEventListener('click', () => {
		alert("El producto fue agregrado al carro de compras con éxito");
		img.style.opacity = 0.5;
		carro.push(producto);
		console.log(carro);
	})

	divDeProductos.appendChild(img);
	divDeProductos.appendChild(tipoDiv);
	divDeProductos.appendChild(precioDiv);
	divDeProductos.appendChild(stockDiv);
	divDeProductos.appendChild(boton); 
	return divDeProductos;
}