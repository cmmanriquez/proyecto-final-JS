class Producto {
	constructor(id, img, tipo, precio, stock) {
		this.id = id;
		this.img = img;
		this.tipo = tipo;
		this.precio = precio;
		this.stock = stock;
	}
}

 
function getProductos() {
  let productosAObjetos = JSON.parse(DATOS);
  let productos = [];

  for (element of productosAObjetos){
    let producto = new Producto(element.id, element.img, element.tipo, element.precio, element.stock)
    productos.push(producto)
  }
  return productos
}


const DATOS = `[{
  "id": 1,
  "img": "./multimedia/img/shop01.jpg",
  "tipo": "Florero, pieza única",
  "precio": "2.700",
  "stock": "1"
}, {
  "id": 2,
  "img": "./multimedia/img/shop02.jpg",
  "tipo": "Jarrón, pieza única",
  "precio": "1.700",
  "stock": "1"
}, {
  "id": 3,
  "img": "./multimedia/img/shop03.jpg",
  "tipo": "Florero, pieza única",
  "precio": "3.000",
  "stock": "1"
}, {
  "id": 4,
  "img": "./multimedia/img/shop04.jpg",
  "tipo": "Florero, pieza única",
  "precio": "1.700",
  "stock": "1"
}, {
  "id": 5,
  "img": "./multimedia/img/shop05.jpg",
  "tipo": "Jarrón, pieza única",
  "precio": "2.700",
  "stock": "1"
}, {
  "id": 6,
  "img": "./multimedia/img/shop06.jpg",
  "tipo": "Florero, pieza única",
  "precio": "1.700",
  "stock": "1"
}]`
