// class Producto{
//     constructor(tipo, precio, cantidad){
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

// // esto no va si está el array de abajo
// function CarroDeCompras(){
//     this.compra = []

//     this.agregarCompra = function(compra){this.compra.push(compra)}

//     this.datosDeEntrada = function(){
//     if(localStorage.getItem("carro")!= null){
//     this.compra = JSON.parse(localStorage.getItem("carro"))
//     }
//     }
// }

// // este array no va si va lo del principio
// // var arrayDeCompra = []; 
// // arrayDeCompra.push(primeraCompra);
// // arrayDeCompra.push(segundaCompra);
// // console.log(arrayDeCompra);


// // let piezaIngresada = prompt('Ingrese el nombre del objeto de cerámica que desea comprar.');

// // console.log(piezaIngresada.toLowerCase());

// // const inventarioDePiezas = ['jarrón', 'jarro', 'jarra', 'florero', 'flor', 'vaso', 'candelabro'];

// // if (piezaIngresada == inventarioDePiezas){
// //     alert('La Pieza está disponible');
// //     }else{
// //     alert('La pieza que buscas no se encuentra disponible');
// // }



// //LOCALSTORAGE 
// localStorage.setItem("Carro", JSON.stringify(primeraCompra)); // Objeto a texto
// var resultadoDeCompra = JSON.parse(localStorage.getItem("Carro")); // Texto a objeto
// console.log(resultadoDeCompra);

// localStorage.setItem("Carro", JSON.stringify(segundaCompra)); // Objeto a texto
// var resultadoDeCompraDos = JSON.parse(localStorage.getItem("Carro")); // Texto a objeto
// console.log(resultadoDeCompraDos);


var botonesShop = document.getElementsByClassName('botonShop');
for(button of botonesShop){
   button.addEventListener('click', ActividadDelShop);
}

//var imagenDelShop = document.getElementsByTagName('container__shopInternoImagenMovimiento');
    


function ActividadDelShop(){
    alert("Las piezas aún no están disponibles para ser compradas");
    imagenDelShop.style.opacity = "0.5";

}





// var piezaIngresada = prompt('Ingrese el tipo de pieza que desea comprar. -Jarrón -Florero -Candelabro');
// console.log('La pieza ingresada es:' + piezaIngresada);

// // const inventarioDePiezas = ['jarrón', 'jarro', 'jarra', 'florero', 'flor', 'vaso', 'candelabro'];

// var piezasAgregadas = piezaIngresada.includes('jarron', 'flor', 'jarrón', 'florero', 'candelabro');

// if (piezaIngresada === piezasAgregadas){
//     alert('La Pieza está disponible');
//     }else{
//     alert('La pieza que buscas no se encuentra disponible');
// }

