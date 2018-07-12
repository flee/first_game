function Enemy(speed, times2kill){
	this.times2kill = times2kill;
	this.r = 30*times2kill;
	this.y = -this.r;
	this.x = random(this.r,width-this.r);
	this.speed = speed;
	this.isKilled = false;

	this.show = function(){	
		if(this.times2kill <=0){
			this.isKilled = true;
		} else{
			image(enemyAvatar,this.x,this.y,this.r, this.r);
		}
		//ellipse(this.x, this.y,this.r*this.times2kill,this.r*this.times2kill);
	}

	this.move = function(){
		this.y+=0.5 + this.speed/2;

		if (this.y>height){
			this.y = 0;
		}
	}


}