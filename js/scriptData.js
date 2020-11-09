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
  "tipo": "florero",
  "precio": 2700,
  "stock": "Pieza única"
}, {
  "id": 2,
  "img": "./multimedia/img/shop02.jpg",
  "tipo": "jarrón",
  "precio": 1700,
  "stock": "Pieza única"
}, {
  "id": 3,
  "img": "./multimedia/img/shop03.jpg",
  "tipo": "florero",
  "precio": 3000,
  "stock": "Pieza única"
}, {
  "id": 4,
  "img": "./multimedia/img/shop04.jpg",
  "tipo": "florero",
  "precio": 1700,
  "stock": "Pieza única"
}, {
  "id": 5,
  "img": "./multimedia/img/shop05.jpg",
  "tipo": "jarrón",
  "precio": 2700,
  "stock": "Pieza única"
}, {
  "id": 6,
  "img": "./multimedia/img/shop06.jpg",
  "tipo": "florero",
  "precio": 1700,
  "stock": "Pieza única"
}]`
