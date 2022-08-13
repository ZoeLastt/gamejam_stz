import Phaser from "phaser";

export default class Main extends Phaser.Scene {
  private player!: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody;
  private tent!: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody;
  private enemy!: Phaser.Types.Physics.Arcade.ImageWithDynamicBody;
  private keys: any;
  private bullet!: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody;
  private shotControl: boolean;
  private player_walk = 100;
  private player_sprint = 200;

  private enemy_group;
  private enemy_group1;

  private bullets = 10;
  private health = 100;
  private stamina = 100;
  private enemies_remaining = 0;

  private is_colliding;

  private bullet_text = "test";
  private test_obj;

  constructor() {

    super("main_scene");
    this.shotControl = false;

  }

  bullet_hit_enemy(num) {

    //destroy objects
    //this.bullet.destroy();
    //this.enemy_group1.destroy();
    console.log(num);
    //this.enemy_group1.destroy();
 

  }

  set_bullet_num() {

    if (this.bullets > 0) {
      this.bullets--;
      console.log(this.bullets);
    }

  }

  owb(){

    this.bullet.destroy();

  }

  create() {

    this.add.image(480, 320, "back");

    this.tent = this.physics.add.sprite(850, 420, "tent").setSize(100, 150);
    this.keys = this.input.keyboard.addKeys("W,D");

    this.player = this.physics.add.sprite(100, 450, "player").setCollideWorldBounds(true).setSize(75, 75);

    this.bullet = this.physics.add.sprite(0, 0, "bullet");

    const x = Phaser.Math.Between(50, 750);
    const y = Phaser.Math.Between(60, 550);

    //this.enemy = this.physics.add.image(x, y, "enemy_one").setSize(75, 75).setCollideWorldBounds(true);

    this.add.text(10, 10, "Stamina: 100/100");
    this.add.text(10, 35, "Health: 100/100");
    this.add.text(10, 60, `Bullets: ${this.bullets} `);
    this.add.text(740, 10, "Enemies Remaining: 10");

    //random enemies
    var value1 = Phaser.Math.Between(1, 10);
    

    this.enemy_group = this.add.group();
    for(let i = 0; i < value1; i ++){

      let x_val = Phaser.Math.Between(100, 860);
      let y_val = Phaser.Math.Between(100, 540);

      this.enemy_group1 = this.physics.add.sprite(x_val, y_val, 'enemy_one').setSize(75,75);
      this.enemy_group1.name = "enemy " + i;
      console.log(this.enemy_group1.name);

      this.physics.add.overlap(this.player,this.enemy_group1,this.bullet_hit_enemy,undefined,this);
      this.enemy_group.add(this.enemy_group1);

    }console.log(this.enemy_group);

  //  for(var i = 0; i < 10; i ++){

     // enemy_group.add(x_val, y_val, 'enemy_one');
      //console.log(value1, x_val, y_val);

   // }

    

    
  }

  update() {
    //player rotation
    const mouseX = this.input.mousePointer.worldX;
    const mouseY = this.input.mousePointer.worldY;

    const angle = Phaser.Math.Angle.Between(this.player.x,this.player.y,mouseX,mouseY);

    this.player.setRotation(angle + Math.PI / 2);

    //enemy rotation - not final
    //const en_angle = Phaser.Math.Angle.Between(this.enemy.x,this.enemy.y,this.player.x,this.player.y);
   // t/his.enemy.setRotation(en_angle + Math.PI / 2);

    if (this.input.mousePointer.isDown &&this.shotControl == false &&this.bullets > 0) {
      
      this.bullet = this.physics.add.sprite(this.player.x,this.player.y,"bullet");

      this.physics.moveTo(this.bullet, mouseX, mouseY, 200);
      this.bullet.setRotation(angle + Math.PI / 2);
      this.bullet.setSize(20, 20);
      this.shotControl = true;

      this.bullet.setCollideWorldBounds(true);
      //this.bullet.body.onWorldBounds = true;
      //this.physics.world.on('worldbounds', this.owb);
      
      //this.physics.add.overlap(this.bullet,this.enemy_group1,this.bullet_hit_enemy,undefined,this);

      this.set_bullet_num();

    } else if (!this.input.mousePointer.isDown) {

      // shot control only allow one shot per click
      this.shotControl = false;

    }

    

    //player movement
    if (this.keys.W.isDown) {

      //walk
      this.physics.moveTo(this.player, mouseX, mouseY, this.player_walk);
      console.log("walk");

    } else if (this.keys.D.isDown) {

      //sprint
      console.log("run");
      this.physics.moveTo(this.player, mouseX, mouseY, this.player_sprint);

    } else {
      
      this.player.setVelocityX(0);
      this.player.setVelocityY(0);

    }
  }
}
