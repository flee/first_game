function Player(){
	this.x = width/2;
	this.moveDir =0;

 
	this.show = function(){
		fill(255)
		// rectMode(CENTER);
		if (this.moveDir>=0){
			image(youAvatar_right,this.x-25,height-50, 50, 50);
		} else{
			image(youAvatar_left,this.x-25,height-50, 50, 50);
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