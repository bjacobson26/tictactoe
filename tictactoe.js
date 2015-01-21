// images 
var images = {
	player1image: "tictactoe_images/yoda.gif",
	player2image: "tictactoe_images/darth6.gif"
}


// Turn Selecting
var player1turn = false;
var player2turn = false;
var turn = 1;	
var turnSelect = function(){
	if(turn % 2 == 1){
		player1turn = true;
		player2turn = false;
	}
	else {
		player2turn = true;
		player1turn = false;
	}
}

var player1Win = function(){
	alert("YODA WINS");
	location.reload();
}

var player2Win = function(){
	alert("DARTH VADER WINS");
	location.reload();
}

// WIN LOGIC 
var checkWin = function(){
	// horizontal wins
	if((box1[0] === "player1") && (box2[0]==="player1") && (box3[0]==="player1")){
		player1Win();
	}
	else if ((box1[0] === "player2") && (box2[0]==="player2") && (box3[0]==="player2")){
		player2Win();
	}
	else if ((box4[0]==="player1") && (box5[0]==="player1") && (box6[0]==="player1")){
		player1Win();
	}
	else if ((box4[0]==="player2") && (box5[0]==="player2") && (box6[0]==="player2")){
		player2Win();
	}
	else if((box7[0]==="player1") && (box8[0]==="player1") && (box9[0]==="player1")){
		player1Win();
	}
	else if((box7[0]==="player2") && (box8[0]==="player2") && (box9[0]==="player2")){
		player2Win();
	}

	// vertical wins

	else if((box1[0]==="player1") && (box4[0]==="player1") && (box7[0]==="player1")){
		player1Win();
	}
	else if((box1[0]==="player2") && (box4[0]==="player2") && (box7[0]==="player2")){
		player2Win();
	}
	else if ((box2[0]==="player1") && (box5[0]==="player1") && (box8[0]==="player1")){
		player1Win();
	}
	else if ((box2[0]==="player2") && (box5[0]==="player2") && (box8[0]==="player2")){
		player2Win();
	}
	else if ((box3[0]==="player1") && (box6[0]==="player1") && (box9[0]==="player1")){
		player1Win();
	}
	else if ((box3[0]==="player2") && (box6[0]==="player2") && (box9[0]==="player2")){
		player2Win();
	}

	// diagonal

	else if ((box1[0]==="player1") && (box5[0]==="player1") && (box9[0]==="player1")){
		player1Win();
	}
	else if ((box1[0]==="player2") && (box5[0]==="player2") && (box9[0]==="player2")){
		player2Win();
	}
	else if ((box3[0]==="player1") && (box5[0]==="player1") && (box7[0]==="player1")){
		player1Win();
	}
	else if ((box3[0]==="player2") && (box5[0]==="player2") && (box7[0]==="player2")){
		player2Win();
	}

}


var box1 = [];
var box2 = [];
var box3 = [];
var box4 = [];
var box5 = [];
var box6 = [];
var box7 = [];
var box8 = [];
var box9 = [];

// // Image variables
var box1IMG = document.getElementById("box1IMG");
var box2IMG = document.getElementById("box2IMG");
var box3IMG = document.getElementById("box3IMG");
var box4IMG = document.getElementById("box4IMG");
var box5IMG = document.getElementById("box5IMG");
var box6IMG = document.getElementById("box6IMG");
var box7IMG = document.getElementById("box7IMG");
var box8IMG = document.getElementById("box8IMG");
var box9IMG = document.getElementById("box9IMG");


console.log("turn" + turn);


box1IMG.onclick = function(){

	turnSelect();

	if (player1turn == true){
		this.src = images.player1image;
		box1.push("player1");
		console.log("box1 = " + box1);
	}
	else{
		this.src = images.player2image;
		box1.push("player2");
		console.log("box1 = " + box1);
	};

	turn++;

	console.log("turn" + turn);

	this.onclick = null;
	checkWin()
}

box2IMG.onclick = function(){

	turnSelect();

	if (player1turn == true){
		this.src = images.player1image;
		box2.push("player1");
		console.log("box2 = " + box2);
	}
	else{
		this.src = images.player2image;
		box2.push("player2");
		console.log("box2 = " + box2);
	};

	turn++;

	console.log("turn" + turn);

	this.onclick = null;
	checkWin()
}

box3IMG.onclick = function(){

	turnSelect();

	if (player1turn == true){
		this.src = images.player1image;
		box3.push("player1");
		console.log("box3 = " + box3);
	}
	else{
		this.src = images.player2image;
		box3.push("player2");
		console.log("box3 = " + box3);
	};

	turn++;

	console.log("turn" + turn);

	this.onclick = null;
	checkWin()
}

box4IMG.onclick = function(){

	turnSelect();
	
	if (player1turn == true){
		this.src = images.player1image;
		box4.push("player1");
		console.log("box4 = " + box4);
	}
	else{
		this.src = images.player2image;
		box4.push("player2");
		console.log("box4 = " + box4);
	};

	turn++;

	console.log("turn" + turn);

	this.onclick = null;
	checkWin()
}

box5IMG.onclick = function(){

	turnSelect();
	
	if (player1turn == true){
		this.src = images.player1image;
		box5.push("player1");
		console.log("box5 = " + box5);
	}
	else{
		this.src = images.player2image;
		box5.push("player2");
		console.log("box5 = " + box5);
	};

	turn++;

	console.log("turn" + turn);

	this.onclick = null;
	checkWin()
}

box6IMG.onclick = function(){

	turnSelect();
	
	if (player1turn == true){
		this.src = images.player1image;
		box6.push("player1");
		console.log("box6 = " + box6);
	}
	else{
		this.src = images.player2image;
		box6.push("player2");
		console.log("box6 = " + box6);
	};

	turn++;

	console.log("turn" + turn);

	this.onclick = null;
	checkWin()
}

box7IMG.onclick = function(){

	turnSelect();
	
	if (player1turn == true){
		this.src = images.player1image;
		box7.push("player1");
		console.log("box7 = " + box7);
	}
	else{
		this.src = images.player2image;
		box7.push("player2");
		console.log("box7 = " + box7);
	};

	turn++;

	console.log("turn" + turn);

	this.onclick = null;
	checkWin()
}

box8IMG.onclick = function(){

	turnSelect();

	if (player1turn == true){
		this.src = images.player1image;
		box8.push("player1");
		console.log("box8 = " + box8);
	}
	else{
		this.src = images.player2image;
		box8.push("player2");
		console.log("box8 = " + box8);
	};

	turn++;

	console.log("turn" + turn);

	this.onclick = null;
	checkWin()
}

box9IMG.onclick = function(){

	turnSelect();
	
	if (player1turn == true){
		this.src = images.player1image;
		box9.push("player1");
		console.log("box9 = " + box9);
	}
	else{
		this.src = images.player2image;
		box9.push("player2");
		console.log("box9 = " + box9);
	};

	turn++;

	console.log("turn" + turn);

	this.onclick = null;
	checkWin()
}








