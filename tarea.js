<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Animaciones!</title>
</head>
<body>
    <button id="cambiar-contenido" type="submit">Mostrar Contenido :D</button>
    <div id="mostrar">
        <p>Hola, buen dia</p>
    </div>
    <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
    <script src="script.js"></script>
</body>
</html>
JavaScript
$('#mostrar').hide();
let mostro = false;
$('button').click(function(){
    if(mostro){
        $('#mostrar').slideUp(1500, function(){
            mostro = false;
        });
    } else {
        $('#mostrar').slideDown(1500, function(){
            mostro = true;
        });
    }
})