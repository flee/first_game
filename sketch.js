var youRN;
var swears = [];
var enemies = [];
var time; 
var score = 0 ;
var lvlprobs = [1];
var startUp = true;
var button;
var gamePause = false;

var canvasheight, canvaswidth;
function preload(){
	//avatars
	youAvatar_open = loadImage('rsc/img/female_head_open.png');
	youAvatar_closed = loadImage('rsc/img/female_head_closed.png');
    youAvatar_right = loadImage('rsc/img/malechar_red.png');
	youAvatar_left = loadImage('rsc/img/malechar_red_left.png');
	enemyAvatar = loadImage('rsc/img/enemy.png');
	enemyWomanAvatar = loadImage('rsc/img/angry_woman.png');
	enemyManAvatar = loadImage('rsc/img/angry_man.png');

	//fonts
	headerFont = loadFont('rsc/font/veganstyle.ttf')
	scoreFont = loadFont('rsc/font/arcadeclassic.ttf')
	swearFont = loadFont('rsc/font/cArcade.otf')
	startFont = loadFont('rsc/font/humanoid.ttf')
}
function setup(){

	createCanvas(500,400);
	background(51);
	you = new Player();
	
	

}

function draw(){
	background(51);
	textAlign(CENTER);
	rectMode(CENTER);
	imageMode(CENTER);
	fill(255);
	if(startUp){
		
		
		push();
		textSize(32);
		textFont(headerFont);
		
		text("Welcome", width/2, height*0.3);
		
		rect(width/2, height*0.8,width/3, height/8,20);
		pop();
		textFont("veranda");
		text("This is my first game, please be kind", width/2, height*0.5);
		push();
		fill('red');
		textFont(startFont);
		textSize(24);
		text("Let's start!", width/2, height*0.8+5);
		pop();
	} else {
		you.show();
		// score
		push();
		textSize(20);
		textAlign(CENTER);
		fill(255)
		textFont(scoreFont);
		text(score, width*0.9, height*0.1);
		if(!gamePause){
			text("PAUSE", width*0.9, height*0.2);
		} else{
			text("PLAY", width*0.9, height*0.2);
		}
		pop();

		for(var j=0; j<swears.length; j++){
			swears[j].show();
			// swears[j].move();
		}
	    for(var j=0; j<enemies.length; j++){
			enemies[j].show();
			// enemies[j].move();
		}


		if(gamePause){
			push();
			fill('red');
			textSize(50);
			textFont(scoreFont);
			text("GAME PAUSED", width/2, height/2);
		}else{
		you.move();
		
		

		//pause();

		//produce lvl 1 enemy w/ 1 sec
		//lvl 1: orig speed, one life
		if(frameCount%120==0){
			var enemy = new Enemy(0, 1 );
			enemies.push(enemy);
		}

		//produce lvl 2 enemy after score>1000 w/ 3 sec
		//lvl 2: orig speed, 2 life
		if(score>1000){
		    if(frameCount%180==0){
				var enemy = new Enemy(1, 2 );
				enemies.push(enemy);}
		}

		for(var i=enemies.length-1; i>=0; i--){
			if(enemies[i].isKilled==true){
				enemies.splice(i, 1);
				score +=100;
			}
		}

		for(var i=swears.length-1; i>=0; i--){
			if(swears[i].isGone==true){
				swears.splice(i, 1);
			}
		}

		for(var j=0; j<swears.length; j++){
			// swears[j].show();
			swears[j].move();
		}
	    for(var j=0; j<enemies.length; j++){
			// enemies[j].show();
			enemies[j].move();
		}


		for(var i=0; i<enemies.length; i++){
			for(var j=0; j<swears.length; j++){
				var distBt = dist(enemies[i].x, enemies[i].y, swears[j].x, swears[j].y);
				if (distBt<enemies[i].r+swears[j].r){
					// console.log('okay')
					enemies[i].times2kill -=1;
					swears[j].isGone = true;
				}
		}

		};
	}
}
}

function gameStart(){
	startUp=false;
	button.hide();
}



function keyReleased(){
	if(keyCode===RIGHT_ARROW || keyCode===LEFT_ARROW){
		you.moveDir=0;
	}
	you.mouthOpen = false;
}

function mouseClicked(){
	if(startUp){
		if(width/2-width/6<mouseX && mouseX<width/2+width/6 &&
			height*0.8-height/8<mouseY&& mouseY<height*0.8+height/8){
			startUp = false;
		}
	}
	if(width*0.9-40 <mouseX && mouseX<width*0.9+40 &&
		height*0.2-35	<mouseY&& mouseY<height*0.2+12){
		gamePause = !gamePause;
		// console.log(mouseY);
	}
}


function keyPressed(){
	if (key === ' '&&!gamePause){
	    var newSwear = new Swear(you.x);
	    you.mouthOpen = true;
		swears.push(newSwear);
	} else if (keyCode===RIGHT_ARROW){
			you.moveDir =1;
		} else if (keyCode===LEFT_ARROW){
			you.moveDir = -1;
		}
	

}