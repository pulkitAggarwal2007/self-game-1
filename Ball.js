class Ball{
    constructor(x,y){
        var options = {
            is
            restitution:0.02,
            friction:0.2,
            density:3,
        }
        this.image = loadImage("images/ball.png")
        this.body = Bodies.circle(x,y,50,options);
        this.radius = 50;
        World.add(world,this.body);
    }
    display(){
        var p = this.body.position;
        push();
        translate(p.x,p.y);
        rotate(this.body.angle);
        imageMode(CENTER);
        image(this.image,0,0,this.radius,this.radius);
        pop();

    }
}
