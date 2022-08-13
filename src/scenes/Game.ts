import Phaser from "phaser";
import player from "../player/player";
import zombie from "../zombie/Zombie";

export default class Main extends Phaser.Scene {
  private player!: player;
  private tent!: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody;
  private enemies: zombie[];
  private keys: any;
  private bullet!: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody;
  private shotControl: boolean;

  private bullets = 10;
  private health = 100;
  private stamina = 100;
  private enemies_remaining = 0;

  private bullet_text = "test";

  constructor() {
    super("main_scene");
    this.shotControl = false;
    this.enemies = [];
  }

  deleteEntity(id2: string, uuid: string) {
    console.log(id2, "AND ", uuid);
    const toDestroy = this.enemies.find((en) => en.id === uuid);
    this.enemies = this.enemies.filter((en) => {
      return en.id == uuid;
    });

    toDestroy?.destroy();

    console.log(this.enemies);
  }

  create() {
    this.add.image(480, 320, "back");
    this.tent = this.physics.add.sprite(850, 420, "tent").setSize(100, 150);
    this.keys = this.input.keyboard.addKeys("W,D");

    this.player = new player()
      .setSize(75)
      .setImageKey("player")
      .setPosition({ x: 100, y: 450 })
      .setPhysicsController(this.physics)
      .setBulletCount(10)
      .create();

    const x = Phaser.Math.Between(50, 750);
    const y = Phaser.Math.Between(60, 550);

    this.enemies.push(
      new zombie()
        .setSize(75)
        .setImageKey("enemy_one")
        .setPosition({ x: x, y: y })
        .setPhysicsController(this.physics)
        .create()
    );

    this.bullet = this.physics.add.sprite(0, 0, "bullet");

    this.add.text(10, 10, "Stamina: 100/100");
    this.add.text(10, 35, "Health: 100/100");
    this.add.text(740, 10, "Enemies Remaining: 10");
    this.add.text(10, 60, `Bullets: ${this.player.bulletCount} `);
  }

  update() {
    //player rotation
    const mouseX = this.input.mousePointer.worldX;
    const mouseY = this.input.mousePointer.worldY;

    this.player.setAngle({ x: mouseX, y: mouseY });

    this.enemies.forEach((enemy) => {
      enemy.setAngle({ x: this.player.sprite.x, y: this.player.sprite.y });
      enemy.update({ x: this.player.sprite.x, y: this.player.sprite.y });
    });

    if (
      this.input.mousePointer.isDown &&
      this.shotControl == false &&
      this.player.bulletCount > 0
    ) {
      this.player.shoot();

      this.bullet = this.physics.add.sprite(
        this.player.sprite.x,
        this.player.sprite.y,
        "bullet"
      );

      this.physics.moveTo(this.bullet, mouseX, mouseY, 200);
      this.bullet.setRotation(this.player.getCurrentAngle() + Math.PI / 2);
      this.bullet.setSize(20, 20);
      this.shotControl = true;
      this.bullet.setCollideWorldBounds(true);

      this.physics.add.overlap(
        this.bullet,
        this.enemies.map((en) => {
          return en.sprite;
        }),
        (bullet, zombie) => {
          bullet.destroy();
          this.deleteEntity(bullet.name, zombie.name);
        },
        undefined,
        this
      );
    } else if (!this.input.mousePointer.isDown) {
      // shot control only allow one shot per click

      this.shotControl = false;
    }

    if (this.keys.W.isDown) {
      this.player.move({ x: mouseX, y: mouseY }, "w");
    } else {
      this.player.sprite.setVelocity(0);
    }
  }
}
