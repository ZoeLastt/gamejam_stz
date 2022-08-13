
//game start scene

class Main extends Phaser.Scene{

    constructor(){

        super("main_scene");

    }

    create ()
    {
        
        this.add.image(480, 320, 'back');

        keys = this.input.keyboard.addKeys('W,D');
        player = this.physics.add.sprite(100, 450, 'player');
        player.setCollideWorldBounds(true);
        player.setSize(75, 75); //collision box

        bullet = this.physics.add.sprite('bullet');

        //random enemy spawn - 
      //  var value = Phaser.Math.Between(1, 10);
       // for( var i = 0; i < value; i ++){

            var x = Phaser.Math.Between(50, 750);
            var y = Phaser.Math.Between(60, 550);

            enemy = this.physics.add.image(x, y, 'enemy_one');
            enemy.setSize(75, 75);
            enemy.setCollideWorldBounds(true);
            //this.physics.add.collider(enemy, bullet);

       // }
       
       this.add.text(10, 10, "Stamina: 100/100");
       this.add.text(10, 35, "Health: 100/100");
       this.add.text(10, 60, "Bullets: 10");
       this.add.text(740, 10, "Enemies Remaining: 10");

    }

    update (time, delta)
    {

        //player rotation
       this.mouseX = this.input.mousePointer.worldX;
       this.mouseY = this.input.mousePointer.worldY;
       let angle = Phaser.Math.Angle.Between(player.x, player.y, this.mouseX, this.mouseY);
       player.setRotation(angle+Math.PI/2);

       //enemy rotation - not final
       let en_angle = Phaser.Math.Angle.Between(enemy.x, enemy.y, player.x, player.y);
       enemy.setRotation(en_angle+Math.PI/2);

       if(this.input.mousePointer.isDown && shot_control == false){
    
        bullet = this.physics.add.sprite(player.x, player.y, 'bullet');
        this.physics.moveTo(bullet, this.mouseX, this.mouseY, 200);
        bullet.setRotation(angle+Math.PI/2);
        bullet.setSize(20,20);
        shot_control = true;
        this.physics.add.collider(enemy, bullet);
    
    }else if(!this.input.mousePointer.isDown){ // shot control only allow one shot per click
    
        shot_control = false;
    
    }

       //player movement
       if(keys.W.isDown){ // to do - w to move, hold d with w to sprint

            //walk
            this.physics.moveTo(player, this.mouseX, this.mouseY, player_walk);
            console.log("walk");
  
       }else if(keys.D.isDown){

            //sprint
            console.log("run");
            this.physics.moveTo(player, this.mouseX, this.mouseY, player_sprint);

       }else{

            player.setVelocityX(0);
            player.setVelocityY(0);

       }

       
 
    }

}
