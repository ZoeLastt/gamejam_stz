import Phaser from "phaser";

export default class Main extends Phaser.Scene {
  private player!: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody;
  private enemy!: Phaser.Types.Physics.Arcade.ImageWithDynamicBody;
  private keys: any;
  private bullet!: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody;
  private shotControl: boolean;
  private player_walk = 100;
  private player_sprint = 200;

  constructor() {
    super("main_scene");
    this.shotControl = false;
  }

  create() {
    this.add.image(480, 320, "back");
    this.keys = this.input.keyboard.addKeys("W,D");
    this.player = this.physics.add
      .sprite(100, 450, "player")
      .setCollideWorldBounds(true)
      .setSize(75, 75);
    this.bullet = this.physics.add.sprite(0, 0, "bullet");
    const x = Phaser.Math.Between(50, 750);
    const y = Phaser.Math.Between(60, 550);
    this.enemy = this.physics.add
      .image(x, y, "enemy_one")
      .setSize(75, 75)
      .setCollideWorldBounds(true);
    this.add.text(10, 10, "Stamina: 100/100");
    this.add.text(10, 35, "Health: 100/100");
    this.add.text(10, 60, "Bullets: 10");
    this.add.text(740, 10, "Enemies Remaining: 10");
  }

  update() {
    //player rotation
    const mouseX = this.input.mousePointer.worldX;
    const mouseY = this.input.mousePointer.worldY;
    let angle = Phaser.Math.Angle.Between(
      this.player.x,
      this.player.y,
      mouseX,
      mouseY
    );
    this.player.setRotation(angle + Math.PI / 2);

    //enemy rotation - not final
    let en_angle = Phaser.Math.Angle.Between(
      this.enemy.x,
      this.enemy.y,
      this.player.x,
      this.player.y
    );
    this.enemy.setRotation(en_angle + Math.PI / 2);

    if (this.input.mousePointer.isDown && this.shotControl == false) {
      this.bullet = this.physics.add.sprite(
        this.player.x,
        this.player.y,
        "bullet"
      );
      this.physics.moveTo(this.bullet, mouseX, mouseY, 200);
      this.bullet.setRotation(angle + Math.PI / 2);
      this.bullet.setSize(20, 20);
      this.shotControl = true;
      this.physics.add.collider(this.enemy, this.bullet);
    } else if (!this.input.mousePointer.isDown) {
      // shot control only allow one shot per click

      this.shotControl = false;
    }

    //player movement
    if (this.keys.W.isDown) {
      // to do - w to move, hold d with w to sprint

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
