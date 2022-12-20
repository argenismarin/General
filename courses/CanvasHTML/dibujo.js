var d = document.getElementById("dibujo");
var lienzo = d.getContext("2d");
var ciclo = 0;
var x_200_0, x_0_200, x_200_400, x_400_200;

function dibujarLinea(color, x_inicial, y_inicial, x_final, y_final) {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(x_inicial, y_inicial);
    lienzo.lineTo(x_final, y_final);
    lienzo.stroke();
    lienzo.closePath();
}

for (ciclo; ciclo <= 20; ciclo++) {
    x_0_200 = ciclo * 10;
    x_200_0 = 200 - x_0_200;
    x_200_400 = 200 + x_0_200;
    x_400_200 = 400 - x_0_200;

    dibujarLinea("#FF458F", 200, x_0_200, x_200_0, 200); //Rosa
    dibujarLinea("#FF8352", 200, x_0_200, x_200_400, 200); //Naranja
    dibujarLinea("#00C3AF", x_0_200, 200, 200, x_200_400); //Verde
    dibujarLinea("#FFD600", 200, x_200_400, x_400_200, 200); //Amarillo

    dibujarLinea("#FFD600", x_0_200, 0, 0, x_200_0);
    dibujarLinea("#FF8352", 0, x_200_400, x_0_200, 400);
    dibujarLinea("#FF458F", x_200_400, 400, 400, x_400_200);
    dibujarLinea("#00C3AF", x_200_400, 0, 400, x_0_200);
}