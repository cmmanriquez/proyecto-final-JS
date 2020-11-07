// class Producto{
//     constructor(id, img, tipo, precio, cantidad){
//         this.id = id;
//         this.img = img;
//         this.tipo = tipo;
//         this.precio = precio;
//         this.cantidad = cantidad;

//         this.cantidadComprada = function(){
//             console.log('La cantidad de piezas que compraste es: ' + this.cantidad);
//         }

//         this.totalDeLaCompra = function(){
//             console.log('El monto total de la compra es de: $' + this.precio*this.cantidad);
//         }
//     }
// }





// var cantidadDePiezasAComprar = Number(prompt('Ingrese la cantidad de piezas que desea comprar'));
// var primeraCompra = new Producto('Jarrón', 2700, cantidadDePiezasAComprar);
// primeraCompra.cantidadComprada();
// primeraCompra.totalDeLaCompra();

// var cantidadDePiezasAComprar = Number(prompt('Ingrese la cantidad de piezas que desea comprar'));
// var segundaCompra = new Producto('Florero', 2000, cantidadDePiezasAComprar);
// segundaCompra.cantidadComprada();
// segundaCompra.totalDeLaCompra();




// //      LOCALSTORAGE ---- A MEJORAR
// localStorage.setItem("Carro", JSON.stringify(primeraCompra)); // Objeto a texto
// var resultadoDeCompra = JSON.parse(localStorage.getItem("Carro")); // Texto a objeto
// console.log(resultadoDeCompra);

// localStorage.setItem("CarroDos", JSON.stringify(segundaCompra)); // Objeto a texto
// var resultadoDeCompraDos = JSON.parse(localStorage.getItem("CarroDos")); // Texto a objeto
// console.log(resultadoDeCompraDos);







//COSAS QUE QUIERO MEJORAR

//      Acá la idea es que la persona ingrese el nombre del producto en el prompt (que ideamente en el futuro vaya a ser en un buscador)
//      y devuelva si la pieza está disponible en el stock o no.
//      No logré resolverlo, no supe cómo recorrer el array y que en ese recorrido chequee si están o no las piezas.


//          VERSION 1
// var piezaIngresada = prompt('Ingrese el tipo de pieza que desea comprar. -Jarrón -Florero -Candelabro');
// console.log('La pieza ingresada es:' + piezaIngresada);
// // const inventarioDePiezas = ['jarrón', 'jarro', 'jarra', 'florero', 'flor', 'vaso', 'candelabro'];
// var piezasAgregadas = piezaIngresada.includes('jarron', 'flor', 'jarrón', 'florero', 'candelabro');
// if (piezaIngresada === piezasAgregadas){
//     alert('La Pieza está disponible');
//     }else{
//     alert('La pieza que buscas no se encuentra disponible');
// }


//VERSION 2
// // let piezaIngresada = prompt('Ingrese el nombre del objeto de cerámica que desea comprar.');
// // console.log(piezaIngresada.toLowerCase());
// // const inventarioDePiezas = ['jarrón', 'jarro', 'jarra', 'florero', 'flor', 'vaso', 'candelabro'];
// // if (piezaIngresada == inventarioDePiezas){
// //     alert('La Pieza está disponible');
// //     }else{
// //     alert('La pieza que buscas no se encuentra disponible');
// // }


//      Idealmente este es el carrito que debería usar, pero no sé cómo unir las compras con esto....
//JSON
// function CarroDeCompras(){
//     this.compra = []

//     this.agregarCompra = function(compra){this.compra.push(compra)}

//     this.datosDeEntrada = function(){
//     if(localStorage.getItem("carro")!= null){
//     this.compra = JSON.parse(localStorage.getItem("carro"))
//     }
//     }
// }





