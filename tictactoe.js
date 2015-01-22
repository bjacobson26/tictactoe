// reset button
var reset = document.getElementById("resetButton");
reset.onclick = function(){

	location.reload();
}

// Winner!!!
var yodaWins = document.getElementById("yodaWins");
var darthWins = document.getElementById("darthWins");
var draw = document.getElementById("tieGame");

// images 
var images = {
	player1image: "tictactoe_images/yoda.gif",
	player2image: "tictactoe_images/darth6.gif"
}

// Sound & Music
var musicPlay = true;
var musicOnOffButton = document.getElementById("musicOnOffButton");
var musicOnOffText = document.getElementById("musicOnOff");

musicOnOffButton.onclick = function(){
	if(musicPlay === false){
		musicPlay = true;
		console.log("musicPlay = " + musicPlay);
		musicOnOffText.innerHTML = "Sound on";
	}
	else if(musicPlay === true){
		musicPlay = false;
		console.log("musicPlay = " + musicPlay);
		musicOnOffText.innerHTML = "Sound off";
	}
}



var sound = {
	clip1: "tictactoe_sound/checked.mp3",
	clip2: "tictactoe_sound/crops.mp3",
	clip3: "tictactoe_sound/disturbance.mp3",
	clip4: "tictactoe_sound/faith.mp3",
	clip5: "tictactoe_sound/force.mp3",
	clip6: "tictactoe_sound/force2.mp3",
	clip7: "tictactoe_sound/luck.mp3",
	clip8: "tictactoe_sound/master.mp3",
	clip9: "tictactoe_sound/plans.mp3",
	clip10: "tictactoe_sound/strong.mp3",
}

var yodamusic = new Audio('tictactoe_sound/yodamusic.mp3');
var darthmusic = new Audio('tictactoe_sound/darthmusic.mp3');

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

// Winner 

var winner = false;

var player1Win = function(){
	winner = true;
	yodaWins.innerHTML = "WoN, YoDA HAS!";
	if (musicPlay==true){
		yodamusic.play();
	}
}

var player2Win = function(){
	winner = true;
	darthWins.innerHTML = "Darth vader Has Won!";
	if (musicPlay==true){
		darthmusic.play();
	}	
}

var tie = function(){
	draw.innerHTML = "DRaW";
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

	if((turn === 10) && (winner==false)){
		tie();
	}

}



// Fill with "player1" or "player2", then check for win. 
var box1 = [];
var box2 = [];
var box3 = [];
var box4 = [];
var box5 = [];
var box6 = [];
var box7 = [];
var box8 = [];
var box9 = [];

// Image Divs
var box1IMG = document.getElementById("box1IMG");
var box2IMG = document.getElementById("box2IMG");
var box3IMG = document.getElementById("box3IMG");
var box4IMG = document.getElementById("box4IMG");
var box5IMG = document.getElementById("box5IMG");
var box6IMG = document.getElementById("box6IMG");
var box7IMG = document.getElementById("box7IMG");
var box8IMG = document.getElementById("box8IMG");
var box9IMG = document.getElementById("box9IMG");

// Logs turn number
console.log("turn" + turn);



// Gameplay 
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








