/**
* JS - AULA 13: JOGO DE CARTAS
* @author	Tales Oliver
*/

//JS - AULA 03: VINCULANDO UM DOCUMENTO JS
// document.write("<h2>" + "Tales Oliver" + "</h2>");

//JS - AULA 04: FUNÇÃO SIMPLES
/*function hello(){
	var nome;
	nome = prompt("Qual é o seu o nome?");
	alert("Hello " +nome);
}*/

//JS - AULA 05: CALCULADORA FLEX
/*var etanol, gasolina;

function calcular (){
	etanol = parseFloat(frmFlex.txtEtanol.value.replace(",","."));
	gasolina = parseFloat(frmFlex.txtGasolina.value.replace(",","."));
	if (etanol < 0.7 * gasolina) {
		document.getElementById("status").src="etanol.png";
	} else {
		document.getElementById("status").src="gasolina.png";
	}
}	

function resetar (){
	document.getElementById("status").src="neutro.png";
}*/

//JS - AULA 06: JOGO DO DADO
/*var sorteio = math.floor(Math.random()* 6 + 1);

switch(sorteio){
	case 1:
		document.getElementById("face").src="face1.png";
		break;
	case 2:
		document.getElementById("face").src="face2.png";
		break;
	case 3:
		document.getElementById("face").src="face3.png";
		break;
	case 4:
		document.getElementById("face").src="face4.png";
		break;
	case 5:
		document.getElementById("face").src="face5.png";
		break;
	case 6:
		document.getElementById("face").src="face6.png";
		break;
	default:
		break;
}*/

// JS - AULA 07: TABUADA
/*for (var i = 1; i < 11; i++){
	document.write("<p> Tabuada do " + i + "</p>");
	for (var j = 1; j < 11; j++){
		document.write(i + " X " + j + " = " + (i * j) + "<br>");
	}
}*/

//JS - AULA 08: LÂMPADA
/*function on(){
	document.getElementById("lamp").src="on.jpg";
}

function off(){
	document.getElementById("lamp").src="off.jpg";
}

function blink(){
	var intervalo = 0;
	var contador = 0;
	while (contador < 10){
		intervalo += 300;
		setTimeout("document.getElementById('lamp').src='on.jpg';",intervalo);
		setTimeout("document.getElementById('lamp').src='off.jpg';", intevalo);
		contador++;
	}
}*/

//JS - AULA 09: SLIDE SHOW
/*var intervalo = 3000;

function slide1(){
	document.getElementById("banner").src="banner1.jpg";
	setTimeout("slide2()",intervalo);
}

function slide2(){
	document.getElementById("banner").src="banner2.jpg";
	setTimeout("slide3()",intervalo);
}

function slide3(){
	document.getElementById("banner").src="banner3.jpg";
	setTimeout("slide1()",intervalo);
}*/

// JS - AULA 10:
/*var check = false;

function xequeMate(){
	if (check == false){
		var timer1 = setInterval(function(){start()},1000);
		var timer2 = setTimeout(function(){end()},13200);
		var count = 10;
		function start(){
			soundBeep();
			document.getElementById("time").innerHTML = count;
			if (count == 0){
				clearInterval(timer1);
				soundThunder();
				document.getElementById("fire").src="explosion.gif";
				document.getElementById("time").innerHTML = "GAME OVER";
			}
			count--;
		}
		check = true;
	}
}

function soundThunder(){
	var beep = new Audio();
	beep.src = "Thunder_Crack.mp3";
	beep.play();
}

function soundBeep(){
	var beep = new Audio();
	beep.src = "Beep_Short.mp3";
	beep.play();
}

function end(){
	document.getElementById("fire").src = "clean.png";
}*/

//JS - AULA 11: JOKENPÔ
/*function jogar(){
	if(document.getElementById("pedra").checked == false && document.getElementById("papel").checked == false && document.getElementById("tesoura").checked == false){
		alert("Selecione uma opção!!");
	} else {
		var sorteio =  Math.floor(Math.random()*3);
		switch(sorteio){
			case 0:
				document.getElementById("pc").src="pcpedra.png";
				break;
			case 1:
				document.getElementById("pc").src="pcpapel.png";
				break;
			case 2:
				document.getElementById("pc").src="pctesoura.png";
				break;
		}
		if ((document.getElementById("pedra").checked == true && sorteio == 0) || (document.getElementById("papel").checked == true && sorteio == 1) || (document.getElementById("tesoura").checked == true && sorteio == 2)){
			document.getElementById("placar").innerHTML="EMPATE";
		}else if ((document.getElementById("pedra").checked == true && sorteio == 2) || (document.getElementById("papel").checked == true && sorteio == 0) || (document.getElementById("tesoura").checked == true && sorteio == 1)) {
			document.getElementById("placar").innerHTML="JOGADOR VENCEU";
		}else {
			document.getElementById("placar").innerHTML="COMPUTADOR VENCEU";
		}
	}
}

function resetar(){
	document.getElementById("pc").src="pc.png";
	document.getElementById("placar").innerHTML="";
}*/

//JS - AULA 12: ARRAY

//JS - AULA 13: JOGO DE CARTAS
var nipes = ['♥','♦','♣','♠'];
var faces = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
var nipe = nipes[Math.floor(Math.random()*4)];
var face = faces[Math.floor(Math.random()*faces.length)];
document.write("<h1>" + face + nipe + "</h1>");