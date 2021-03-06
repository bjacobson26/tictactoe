



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


var sound = {
	clip1: new Audio('tictactoe_sound/checked.mp3'),
	clip2: new Audio('tictactoe_sound/crops.mp3'),
	clip3: new Audio('tictactoe_sound/disturbance.mp3'),
	clip4: new Audio('tictactoe_sound/faith.mp3'),
	clip5: new Audio('tictactoe_sound/force.mp3'),
	clip6: new Audio('tictactoe_sound/force2.mp3'),
	clip7: new Audio('tictactoe_sound/luck.mp3'),
	clip8: new Audio('tictactoe_sound/master.mp3'),
	clip9: new Audio('tictactoe_sound/plans.mp3'),
	clip10: new Audio('tictactoe_sound/strong.mp3'),
}
console.log(rand);

// beginning sound clip
var playSoundClip = function(){
	if(rand === 0){
		sound.clip1.play();
		console.log(sound.clip1);
	}
	else if(rand === 1){
		sound.clip2.play();
		console.log(sound.clip2);
	}
	else if(rand === 2){
		sound.clip3.play();
		console.log(sound.clip3);
	}
	else if(rand === 3){
		sound.clip4.play();
		console.log(sound.clip4);
	}
	else if(rand === 4){
		sound.clip5.play();
		console.log(sound.clip5);
	}
	else if(rand === 5){
		sound.clip6.play();
		console.log(sound.clip6);
	}
	else if(rand === 6){
		sound.clip7.play();
		console.log(sound.clip7);
	}
	else if(rand === 7){
		sound.clip8.play();
		console.log(sound.clip8);
	}
	else if(rand === 8){
		sound.clip9.play();
		console.log(sound.clip9);
	}
	else if(rand === 9){
		sound.clip10.play();
		console.log(sound.clip10);
	}
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
	sound3: new Audio('c3po_sounds/c3posound3.mp3'),
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




// Gameplay 
box1IMG.onclick = function(){

	turnSelect();

	if (player1turn == true){
		this.src = images.player1image;
		box1.push("player1");
		console.log("box1 = " + box1);
		if (musicPlay === true){
			lightSaberSounds.yoda.play();
		}
	}
	else{
		this.src = images.player2image;
		box1.push("player2");
		console.log("box1 = " + box1);
		if(musicPlay === true){
		lightSaberSounds.darth.play();
		}
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
		if (musicPlay === true){
			lightSaberSounds.yoda.play();
		}
	}
	else{
		this.src = images.player2image;
		box2.push("player2");
		console.log("box2 = " + box2);
		if(musicPlay === true){
		lightSaberSounds.darth.play();
		}
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
		if (musicPlay === true){
			lightSaberSounds.yoda.play();
		}

	}
	else{
		this.src = images.player2image;
		box3.push("player2");
		console.log("box3 = " + box3);
		if(musicPlay === true){
		lightSaberSounds.darth.play();
		}
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
		if (musicPlay === true){
			lightSaberSounds.yoda.play();
		}
	}
	else{
		this.src = images.player2image;
		box4.push("player2");
		console.log("box4 = " + box4);
		if(musicPlay === true){
		lightSaberSounds.darth.play();
		}
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
		if (musicPlay === true){
			lightSaberSounds.yoda.play();
		}
	}
	else{
		this.src = images.player2image;
		box5.push("player2");
		console.log("box5 = " + box5);
		if(musicPlay === true){
		lightSaberSounds.darth.play();
		}
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
		if (musicPlay === true){
			lightSaberSounds.yoda.play();
		}
	}
	else{
		this.src = images.player2image;
		box6.push("player2");
		console.log("box6 = " + box6);
		if(musicPlay === true){
		lightSaberSounds.darth.play();
		}
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
		if (musicPlay === true){
			lightSaberSounds.yoda.play();
		}
	}
	else{
		this.src = images.player2image;
		box7.push("player2");
		console.log("box7 = " + box7);
		if(musicPlay === true){
		lightSaberSounds.darth.play();
		}
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
		if (musicPlay === true){
			lightSaberSounds.yoda.play();
		}
	}
	else{
		this.src = images.player2image;
		box8.push("player2");
		console.log("box8 = " + box8);
		if(musicPlay === true){
		lightSaberSounds.darth.play();
		}
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
		if (musicPlay === true){
			lightSaberSounds.yoda.play();
		}
	}
	else{
		this.src = images.player2image;
		box9.push("player2");
		console.log("box9 = " + box9);
		if(musicPlay === true){
		lightSaberSounds.darth.play();
		}
	};

	turn++;

	console.log("turn" + turn);

	this.onclick = null;
	checkWin()
}








