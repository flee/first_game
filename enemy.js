function Enemy(speed, times2kill){
	this.times2kill = times2kill;
	this.r = 50*times2kill;
	this.y = -this.r;
	this.x = random(this.r,width-this.r);
	this.speed = speed;
	this.isKilled = false;
	var types = [1,2,3];
	this.type = random(types);

	this.show = function(){
		if(this.times2kill <=0){
			this.isKilled = true;
		} else{
			switch(this.type){
				case 1: image(enemyManAvatar,this.x,this.y,this.r, this.r); break;
				case 2: image(enemyWomanAvatar,this.x,this.y,this.r, this.r); break;
				case 3: image(enemyAvatar,this.x,this.y,this.r, this.r); break;
			}
		}
		//ellipse(this.x, this.y,this.r*this.times2kill,this.r*this.times2kill);
	}

	this.move = function(){
		this.r = 50*this.times2kill;
		this.y+=0.5 + this.speed/2;

		if (this.y>height){
			this.y = -this.r;
		}
		
	}


}