function Player(){
	this.x = width/2;
	this.moveDir =0;
	this.mouthOpen = false;
	this.hSize = 65;
 
	this.show = function(){
		fill(255)
		// rectMode(CENTER);
		if (this.moveDir>=0){
			image(youAvatar_right,this.x+7,height-25, 50, 50);
		} else{
			image(youAvatar_left,this.x,height-25, 50, 50);
		}

		if (this.mouthOpen){
			image(youAvatar_open,this.x,height-60,this.hSize, this.hSize);
		} else{
			image(youAvatar_closed,this.x,height-60, this.hSize, this.hSize);
		}
	}

	this.move = function(){
		if(this.x>=6 && this.x<=width-6){
			this.x += this.moveDir*8;}
		else{
			if(this.x<width/2){
				this.x = 6;}
			else{
				this.x = width-6;}
		}
		
	}

}