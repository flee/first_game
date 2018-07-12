function Swear(x){
	this.x = x;
	this.y = height-50;
	this.r = 20
	var shapes =['#','@', '&', '%', '!?', "$"];
	this.word = random(shapes);
	this.isHit = false

	this.show = function(){
		// ellipse(this.x, this.y,this.r,this.r);
		textAlign(CENTER);
		textSize(20);
		fill('#fae')
		textStyle(BOLD);
		text(this.word,this.x, this.y);
	}

	this.move = function(){
		this.y-=2;
	}


}