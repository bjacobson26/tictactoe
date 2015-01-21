// images 
var images = {
	player1image: "tictactoe_images/sun.gif",
	player2image: "tictactoe_images/moon.gif"
}
// initialized to false, when win or cats game, change to true. 
var gameOver = false;


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

// initialized false, change to true when image clicked.
var box1 = false;
var box2 = false;
var box3 = false;
var box4 = false;
var box5 = false;
var box6 = false;
var box7 = false;
var box8 = false;
var box9 = false;

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

	box1 = true;

	if (player1turn == true){
	this.src = images.player1image;
	}
	else{
	this.src = images.player2image;
	};

	turn++;

	console.log("turn" + turn);

	this.onclick = null;
}

box2IMG.onclick = function(){
	turnSelect();
	box2 = true;
	if (player1turn == true){
	this.src = images.player1image;
	}
	else{
	this.src = images.player2image;
	};
	turn++;
	console.log("turn" + turn);
	this.onclick = null;
}
box3IMG.onclick = function(){
	turnSelect();
	box3 = true;
	if (player1turn == true){
	this.src = images.player1image;
	}
	else{
	this.src = images.player2image;
	};
	turn++;
	console.log("turn" + turn);
	this.onclick = null;
}
box4IMG.onclick = function(){
	turnSelect();
	box4 = true;
	if (player1turn == true){
	this.src = images.player1image;
	}
	else{
	this.src = images.player2image;
	};
	turn++;
	console.log("turn" + turn);
	this.onclick = null;
}
box5IMG.onclick = function(){
	turnSelect();
	box5 = true;
	if (player1turn == true){
	this.src = images.player1image;
	}
	else{
	this.src = images.player2image;
	};
	turn++;
	console.log("turn" + turn);
	this.onclick = null;
}
box6IMG.onclick = function(){
	turnSelect();
	box4 = true;
	if (player1turn == true){
	this.src = images.player1image;
	}
	else{
	this.src = images.player2image;
	};
	turn++;
	console.log("turn" + turn);
	this.onclick = null;
}
box7IMG.onclick = function(){
	turnSelect();
	box7 = true;
	if (player1turn == true){
		this.src = images.player1image;
	}
	else{
		this.src = images.player2image;
	};

	turn++;
	console.log("turn" + turn);
	this.onclick = null;
}
box8IMG.onclick = function(){
	turnSelect();
	box8 = true;
	if (player1turn == true){
	this.src = images.player1image;
	}
	else{
	this.src = images.player2image;
	};
	turn++;
	console.log("turn" + turn);
	this.onclick = null;
}
box9IMG.onclick = function(){
	turnSelect();
	box9 = true;
	if (player1turn == true){
	this.src = images.player1image;
	}
	else{
	this.src = images.player2image;
	};
	turn++;
	console.log("turn" + turn);
	this.onclick = null;
}








