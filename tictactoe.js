



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

//gets random number to decide which sound clip to play
var getRand = function(){
	var rand = Math.floor(Math.random()*10);
	return rand;
};
var rand = getRand();


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


var sound = [
	new Audio('tictactoe_sound/checked.mp3'),
	new Audio('tictactoe_sound/crops.mp3'),
	new Audio('tictactoe_sound/disturbance.mp3'),
	new Audio('tictactoe_sound/faith.mp3'),
	new Audio('tictactoe_sound/force.mp3'),
	new Audio('tictactoe_sound/force2.mp3'),
	new Audio('tictactoe_sound/luck.mp3'),
	new Audio('tictactoe_sound/master.mp3'),
	new Audio('tictactoe_sound/plans.mp3'),
	 new Audio('tictactoe_sound/strong.mp3'),
];

console.log(rand);

// beginning sound clip
var playSoundClip = function(){
		sound[rand].play();
	}
playSoundClip();


var yodamusic = new Audio('tictactoe_sound/yodamusic.mp3');
var darthmusic = new Audio('tictactoe_sound/darthmusic.mp3');


// r2d2
var r2d2 = document.getElementById("r2d2");

var r2d2Sounds = {
	sound1: new Audio('r2d2_sounds/r2d2sound1.mp3'),
	sound2: new Audio('r2d2_sounds/r2d2sound2.mp3'),
	sound3: new Audio('r2d2_sounds/r2d2sound3.mp3'),
	sound4: new Audio('r2d2_sounds/r2d2sound4.mp3'),
	sound5: new Audio('r2d2_sounds/r2d2sound5.mp3'),
	sound6: new Audio('r2d2_sounds/r2d2sound6.mp3'),
	sound7: new Audio('r2d2_sounds/r2d2sound7.mp3'),
	sound8: new Audio('r2d2_sounds/r2d2sound8.mp3'),
	sound9: new Audio('r2d2_sounds/r2d2sound9.mp3'),
}

r2d2.onclick = function(){
	var getR2 = function(){
	var r2 = Math.floor(Math.random()*9);
	return r2;
	};
	var r2 = getR2();	

	if((musicPlay===true) && (r2 === 0)){
		r2d2Sounds.sound1.play();
	}
	else if((musicPlay===true) && (r2 === 1)){
		r2d2Sounds.sound2.play();
	}
	else if((musicPlay===true) && (r2 === 2)){
		r2d2Sounds.sound3.play();
	}
	else if((musicPlay===true) && (r2 === 3)){
		r2d2Sounds.sound4.play();
	}
	else if((musicPlay===true) && (r2 === 4)){
		r2d2Sounds.sound5.play();
	}
	else if((musicPlay===true) && (r2 === 5)){
		r2d2Sounds.sound6.play();
	}
	else if((musicPlay===true) && (r2 === 6)){
		r2d2Sounds.sound7.play();
	}
	else if((musicPlay===true) && (r2 === 7)){
		r2d2Sounds.sound8.play();
	}
	else if((musicPlay===true) && (r2 === 8)){
		r2d2Sounds.sound9.play();
	}
}


// C3PO 
var c3po = document.getElementById("c3p0");
var c3poSounds = {
	sound1: new Audio('c3po_sounds/c3posound1.mp3'),
	sound2: new Audio('c3po_sounds/c3posound2.mp3'),
	sound4: new Audio('c3po_sounds/c3posound4.mp3'),
	sound5: new Audio('c3po_sounds/c3posound5.mp3'),
}

c3po.onclick = function(){
	var getc3 = function(){
	var c3 = Math.floor(Math.random()*5);
	return c3;
	};
	var c3 = getc3();

	if((musicPlay===true) && (c3 === 0)){
		c3poSounds.sound1.play();
	}
	else if((musicPlay===true) && (c3 === 1)){
		c3poSounds.sound2.play();
	}
	else if((musicPlay===true) && (c3 === 2)){
		c3poSounds.sound3.play();
	}
	else if((musicPlay===true) && (c3 === 3)){
		c3poSounds.sound4.play();
	}
	else if((musicPlay===true) && (c3 === 4)){
		c3poSounds.sound5.play();
	}

}


var lightSaberSounds = {
	darth: new Audio('lightsaber_sounds/lightsaber1.mp3'),
	yoda: new Audio('lightsaber_sounds/lightsaber2.mp3'),
}




// Turn Selecting
var player1turn;
var turn = 1;	
var turnSelect = function(){
	if(turn % 2 == 1){
		player1turn = true;
	}
	else {
		player1turn = false;
	}
}

console.log("turn" + turn);




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
	if((box[0] == box[1] && box[0] == box[2] && box[0] != 0) ||
	   (box[0] == box[3] && box[0] == box[6] && box[0] != 0) ||
	   (box[0] == box[4] && box[0] == box[8] && box[0] != 0)){
	   	// Find out who won -- all three of these have box[0] in common
	   if(box[0] == "player1")
		player1Win();
	   else
	   	player2Win();
	}
	else if(box[1] == box[4] && box[1] == box[7] && box[1] != 0){
	   	// Find out who won -- all three of these have box[0] in common
	   if(box[1] == "player1")
		player1Win();
	   else
	   	player2Win();
	}
	else if((box[2] == box[5] && box[2] == box[8] && box[2] != 0) || 
		   (box[2] == box[4] && box[2] == box[6] && box[2] != 0)){
	   	// Find out who won -- all three of these have box[0] in common
	   if(box[2] == "player1")
		player1Win();
	   else
	   	player2Win();
	}
	else if(box[3] == box[4] && box[3] == box[5] && box[3] != 0){
	   	// Find out who won -- all three of these have box[0] in common
	   if(box[3] == "player1")
		player1Win();
	   else
	   	player2Win();
	}
	else if(box[6] == box[7] && box[6] == box[8] && box[6] != 0){
	   	// Find out who won -- all three of these have box[0] in common
	   if(box[6] == "player1")
		player1Win();
	   else
	   	player2Win();
	} 	
}

// Fill with "player1" or "player2", then check for win. 
var box = [0,0,0,0,0,0,0,0,0];

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



var boxClick = function(){
	turnSelect();
	if (player1turn == true){
	  this.src = images.player1image;
	  box[(parseInt(this.id[3])-1)] = "player1";
	  playSomething(lightSaberSounds.yoda);
    }
    else {
	  this.src = images.player2image;
	  box[(parseInt(this.id[3])-1)] = "player2";
	  playSomething(lightSaberSounds.darth);
	}
	turn++;
	this.onclick = null;
	checkWin();
	console.log(box);
};
	

var playSomething = function(sound){
	if(musicPlay === true){
		sound.play();
	}
}

// Gameplay 
box1IMG.onclick = boxClick;
box2IMG.onclick = boxClick;
box3IMG.onclick = boxClick;
box4IMG.onclick = boxClick;
box5IMG.onclick = boxClick;
box6IMG.onclick = boxClick;
box7IMG.onclick = boxClick;
box8IMG.onclick = boxClick;
box9IMG.onclick = boxClick;