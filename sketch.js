/*jugar con (q,w,e); (l,o), mouse botón derecho

¿Por qué cuando uso las teclas de función, el tren deja de pasar?
codigo en renglon 105???

*/
let colorArco;
let colorAgua;
let colorReloj;
let diam = 0.4;
let lineaHumo = 0;
let img1;
let img2;
let hx1, hx2, hx3, hx4, hx5, hx6, hx7, hx8, hx9, hx11, hx12, hx13;
let hy1, hy2, hy3, hy4, hy5, hy6, hy7, hy8, hy9, hy11, hy12, hy13;
let tx1, tx2, tx3, tx4, tx5, tx6;
let sound;
let x;
document.oncontextmenu = function () {
  return false;
};
function preload() {
  img1 = loadImage("chirico2.jpg");
  img2 = loadImage("chaplin5.png");
  sound = loadSound("tren.mp3");
}

function setup() {
  createCanvas(400, 325);
  frameRate(35);
  colorAgua = color(61, 75, 49);
  colorArco = color(51);
  colorReloj = color("beige");
  hx1 = 323;
  hx2 = 332;
  hx3 = 333;
  hx4 = 335;
  hx5 = 318;
  hx6 = 338;
  hx7 = 342;
  hx8 = 322;
  hx9 = 326;
  hx11 = 321;
  hx12 = 324;
  hx13 = 325;
  hy1 = 119;
  hy2 = 108;
  hy3 = 118;
  hy4 = 116;
  hy5 = 120;
  hy6 = 112;
  hy7 = 106;
  hy8 = 114;
  hy9 = 110;
  hy11 = 113;
  hy12 = 115;
  hy13 = 107;
  tx1 = 407;
  tx1b = 408;
  tx2 = 438;
  tx3 = 420;
  tx4 = 429;
  tx5 = 437;
  x = 300;
}

function draw() {
  background(212, 172, 13);

  // fondo reloj
  if (frameCount % 173 === 0) {
    colorReloj = color("pink");
  } else if (frameCount % 198 === 0) {
    colorReloj = color("rgb(76,81,224)");
  } else if (frameCount % 34 === 0) {
    colorReloj = color("brown");
  }

  //movimiento humo
  if (frameCount >= 85) {
    hx1 = hx1 + 0.8;
    hx2 = hx2 + 0.7;
    hx3 = hx3 + 0.8;
    hx4 = hx4 + 0.9;
    hx5 = hx5 + 0.87;
    hx6 = hx6 + 0.72;
    hx7 = hx7 + 0.8;
    hx8 = hx8 + 0.83;
    hx9 = hx9 + 0.7;
    hy1 = hy1 - 0.3;
    hy2 = hy2 - 0.3;
    hy3 = hy3 - 0.3;
    hy4 = hy4 - 0.4;
    hy5 = hy5 - 0.5;
    hy6 = hy6 - 0.3;
    hy7 = hy7 - 0.2;
    hy8 = hy8 - 0.31;
    hy9 = hy9 - 0.2;
    diam = diam + 0.13;
    lineaHumo = lineaHumo + 0.05;
    if (diam > 7) {
      diam = 7;
    }
    //bocina tren

    if (frameCount % 470 === 0) {
      sound.loop();
      hx1 = hx1 + 0.8;
    hx2 = hx2 + 0.7;
    hx3 = hx3 + 0.8;
      hy11 = hy11 - 0.4;
      hy12 = hy12 - 0.2;
      hy13 = hy13 - 0.4;
      diam = diam + 0.13;
    lineaHumo = lineaHumo + 0.05;
    if (diam > 7) {
      diam = 7;
    }
      }

    //luz arcos
    if (key == "l" || key == "L") {
      colorArco = color("beige");
    } else if (key == "o" || key == "O") {
      colorArco = color(53);

      //pileta
    } else if (key == "q" || key == "Q") {
      colorAgua = color(" cyan");
    } else if (key == "w" || key == "W") {
      colorAgua = color(161, 75, 49);
    } else if (key == "e" || key == "E") {
      colorAgua = color(61, 75, 49);

      //reinicio tren
    }
    if (tx1 == 0) {
      tx1 = 400;
    } else if (tx1b == 0) {
      tx1b = 400;
    } else if (tx3 == 0) {
      tx3 = 400;
    } else if (tx4 == 0) {
      tx4 = 400;
    } else if (tx5 == 0) {
      tx5 = 400;
    }

    if (mouseIsPressed) {
      if (mouseButton == RIGHT) {
        image(img2, 300, 180);
      }
    }
  }

  fill(18, 75, 59);
  rect(0, 0, 400, 150);
  fill(99, 153, 101);
  rect(301, 85, 400, 50);
  fill(141, 91, 40);
  rect(301, 135, 101, 17);
  strokeWeight(6);
  stroke(81, 145, 100, 255);
  line(301, 99, 400, 99);
  stroke(143, 186, 111, 255);
  line(301, 91, 400, 91);
  strokeWeight(8);
  stroke(4, 62, 96, 255);
  line(110, 0, 400, 0);

  //tren

  noStroke();
  fill(49, 59, 14);
  rect(tx1, 125, 10);
  rect(tx3, 129, 6);
  rect(tx4, 129, 6);
  rect(tx5, 129, 6);
  strokeWeight(2);
  stroke(49);
  line(tx1b, 134, tx1b + 38, 134);

  tx1 = tx1 - 1;
  tx1b = tx1b - 1;
  tx2 = tx2 - 1;
  tx3 = tx3 - 1;
  tx4 = tx4 - 1;
  tx5 = tx5 - 1;

  strokeWeight(lineaHumo);
  stroke(252);
  fill(200);
  ellipse(hx1, hy1, diam);
  ellipse(hx2, hy2, diam);
  stroke(187);
  ellipse(hx3, hy3, diam);
  ellipse(hx4, hy4, diam);
  stroke(200);
  ellipse(hx5, hy5, diam);
  ellipse(hx6, hy6, diam);
  ellipse(hx7, hy7, diam);
  stroke(175);
  ellipse(hx8, hy8, diam);
  ellipse(hx9, hy9, diam);

  //pileta
  noStroke();
  fill(107, 75, 24);
  //sombra
  quad(165, 290, 295, 294, 250, 210, 215, 205);
  fill(colorAgua); //verde
  quad(178, 283, 295, 291, 257, 210, 217, 207);
  //agua
  stroke(212, 192, 132);
  strokeWeight(5);
  quad(177, 285, 298, 290, 257, 207, 215, 205);
  stroke(110);
  strokeWeight(2);
  line(286, 282, 251, 212);
  line(251, 212, 218, 210);

  //edificio fondo
  noStroke();
  fill(110, 100, 56);
  rect(151, 61, 148, 87); //frente edificio fondo
  fill(84, 78, 45);
  triangle(149, 60, 300, 60, 224, 40);
  stroke(123, 118, 83);
  strokeWeight(4);
  line(149, 61, 149, 148); //vert izq
  stroke(116, 98, 55);
  line(149, 61, 299, 61); //horizontal
  line(299, 61, 299, 148); //vert der
  stroke(74, 85, 55);
  line(149, 60, 224, 40); //trg izq
  stroke(81, 99, 67);
  line(224, 40, 300, 60); //trg der

  noStroke();
  fill(colorArco);
  ellipse(287, 109, 19);
  rect(277, 109, 19, 33);
  ellipse(168, 108, 19); //arcos edif fondo
  rect(158, 109, 19, 33);
  ellipse(227, 109, 19);
  rect(217, 109, 19, 33);
  noStroke();
  fill(50);

  ellipse(198, 109, 19);
  rect(188, 109, 19, 38);

  ellipse(257, 109, 19);
  rect(247, 109, 19, 38);
  fill(colorArco);
  ellipse(287, 109, 19);
  rect(277, 109, 19, 38);
  fill(105, 92, 58);
  quad(149, 156, 299, 156, 295, 142, 154, 142); //escalinata edif fondo

  //reloj
  strokeWeight(1);
  stroke(50);
  fill(colorReloj);
  ellipse(224, 75, 25);
  line(224, 75, 224, 65); //reloj
  line(224, 75, 235, 75); //reloj

  //sombras
  fill(57, 72, 38);
  quad(400, 325, 300, 325, 380, 160, 400, 157);

  //sombra der
  fill(74, 69, 40);
  triangle(150, 156, 138, 186, 295, 154);

  //pared punta edif izq
  quad(0, 0, 63, 0, 60, 282, 0, 248);
  strokeWeight(4);
  stroke(112, 86, 32);
  line(301, 150, 400, 150);
  stroke(234);

  strokeWeight(7);
  stroke(58, 56, 30);
  line(62, 287, 0, 252); //lineas edificio izq punta
  line(63, 297, 0, 262);

  strokeWeight(3);
  line(61, 291, 0, 257);
  stroke(249, 232, 149);
  strokeWeight(6);
  line(62, 287, 134, 174); //lineas edificio izq
  line(63, 297, 136, 177);

  noStroke();
  fill(164, 138, 73);
  quad(19, 80, 19, 258, 33, 253, 34, 92);
  quad(19, 80, 19, 258, 52, 272, 52, 81);
  fill(55);
  triangle(19, 233, 19, 258, 26, 256);
  triangle(19, 258, 52, 257, 49, 271);
  fill(80, 81, 49);
  fill(204, 172, 97);
  quad(32, 251, 33, 248, 50, 247, 51, 256, 26, 254);
  fill(23);
  quad(34, 124, 45, 129, 45, 234, 33, 243);
  fill(95, 114, 90);
  quad(45, 129, 52, 131, 51, 227, 45, 233);
  fill(49, 111, 66);
  quad(44, 108, 44, 128, 34, 124, 34, 100);
  fill(53);
  quad(44, 108, 44, 128, 52, 131, 52, 113);
  fill(53);
  noStroke();
  fill(255, 249, 173);
  quad(61, 283, 63, -52, 146, 61, 148, 146);
  stroke(241, 223, 149);
  strokeWeight(7);
  line(146, 63, 105, 1);
  noStroke();
  fill(70, 72, 52);
  quad(77, 262, 77, 84, 96, 92, 96, 235);
  quad(105, 222, 105, 97, 119, 103, 119, 200);
  quad(126, 195, 126, 109, 135, 113, 135, 178);
  //piso arcos
  fill(180, 159, 93);
  triangle(105, 222, 105, 208, 118, 202);
  triangle(79, 242, 79, 262, 95, 237);
  triangle(126, 192, 126, 180, 137, 177);

  if (mouseIsPressed) {
    if (mouseButton == RIGHT) {
      image(img2, 300, 180);
    }
  }
}
