function Enemy(speed, times2kill){
	this.x = random(0,width);
	this.y = 0;
	this.r = 15;
	this.speed = speed;
	this.times2kill = times2kill;
	this.isKilled = false;

	this.show = function(){	
		if(this.times2kill <=0){
			this.isKilled = true;
		}
		if (this.isHit){
			fill('#fae')
		} else{
			fill(255);
		}
		ellipse(this.x, this.y,this.r*this.times2kill,this.r*this.times2kill);
	}

	this.move = function(){
		this.y+=0.5 + this.speed/2;

		if (this.y>height){
			this.y = 0;
		}
	}


}