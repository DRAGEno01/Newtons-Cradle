// i did, but it had the same name
// so i think that the computer went co-co
// so i think the paper project is this project! OH NO!
//
//
//
//
//
//
//
//
//
// THIS IS AN EMERGENCY (CALL THE POLICE, CALL THE ARMY, CALL THE HIGH TEC MILITARY)


class roof
{
	constructor(x,y,w,h)
	{
		var options={
			isStatic:true			
			}
		this.x=x;
		this.y=y;
		this.w=w
		this.h=h
		this.body=Bodies.rectangle(x, y, w, h , options);
 		World.add(world, this.body);

	}
	display()
	{
			
			var groundPos=this.body.position;		

			push()
			translate(groundPos.x, groundPos.y);
			rectMode(CENTER)
			//strokeWeight(4);
			fill(128,128,128)
			rect(0,0,this.w, this.h);
			pop()
			
	}

}











































































