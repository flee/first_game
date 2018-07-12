var youRN;
var swears = [];
var enemies = [];
var time; 
var score = 0 ;
var lvlprobs = [1];

function preload(){
	youAvatar_open = loadImage('img/female_head_open.png');
	youAvatar_closed = loadImage('img/female_head_closed.png');
    youAvatar_right = loadImage('img/malechar_red.png');
	youAvatar_left = loadImage('img/malechar_red_left.png');
	enemyAvatar = loadImage('img/enemy.png');
}
function setup(){
	createCanvas(500,400);
	you = new Player();
}

function draw(){
	background(51);
	you.show();
	you.move();
	textAlign(CENTER);
	textSize(20);
	fill(255)
	textStyle(BOLD);
	text(score, width*0.9, height*0.1);

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
			var enemy = new Enemy(frameCount/480, 2 );
			enemies.push(enemy);}
		if(frameCount%180==0){
			var enemy = new Enemy(frameCount/480, 2 );
			enemies.push(enemy);
		}
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
		swears[j].show();
		swears[j].move();
	}
    for(var j=0; j<enemies.length; j++){
		enemies[j].show();
		enemies[j].move();
	}


	for(var i=0; i<enemies.length; i++){
		for(var j=0; j<swears.length; j++){
			var distBt = dist(enemies[i].x, enemies[i].y, swears[j].x, swears[j].y);
			if (distBt<enemies[i].r+swears[j].r){
				console.log('okay')
				enemies[i].times2kill -=1;
				swears[j].isGone = true;
			}
	}




	};




}

function keyReleased(){
	if(keyCode===RIGHT_ARROW || keyCode===LEFT_ARROW){
		you.moveDir=0;
	}
	you.mouthOpen = false;
}

function keyPressed(){
	if (key === ' '){
	    var newSwear = new Swear(you.x);
	    you.mouthOpen = true;
		swears.push(newSwear);
	} else if (keyCode===RIGHT_ARROW){
			you.moveDir =1;
		} else if (keyCode===LEFT_ARROW){
			you.moveDir = -1;
		}
	

}