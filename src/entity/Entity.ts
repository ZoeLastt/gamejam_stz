import { Vec2D } from "../types/types";

interface IEntity {
  update(...args: any[]): void;
  setPosition(position: Vec2D): this;
  setSize(width: number, height: number): this;
  setImageKey(key: string): this;
  setPhysicsController(controller: Phaser.Physics.Arcade.ArcadePhysics): this;
  setAngle(direction: Vec2D): void;
  destroy(): void;
}

class Entity implements IEntity {
  private pos!: Vec2D;
  private imageKey!: string;
  private size!: Vec2D;
  public sprite!: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody;
  public physicsController!: Phaser.Physics.Arcade.ArcadePhysics;
  public angle!: number;

  constructor() {}

  update(...args: any[]): void {}

  setPosition(position: Vec2D): this {
    this.pos = position;
    return this;
  }

  setSize(width: number, height?: number): this {
    this.size = { x: width, y: height ?? width };
    return this;
  }

  setImageKey(key: string): this {
    this.imageKey = key;
    return this;
  }

  setPhysicsController(controller: Phaser.Physics.Arcade.ArcadePhysics): this {
    this.physicsController = controller;
    return this;
  }

  create(): this {
    this.sprite = this.physicsController.add
      .sprite(this.pos.x, this.pos.y, this.imageKey)
      .setCollideWorldBounds(true)
      .setSize(this.size.x, this.size.y);
    return this;
  }

  setAngle(direction: Vec2D): void {
    this.angle = Phaser.Math.Angle.Between(
      this.sprite.x,
      this.sprite.y,
      direction.x,
      direction.y
    );
    this.sprite.setRotation(this.angle + Math.PI / 2);
  }

  destroy(): void {
    this.sprite.destroy();
  }
}

export default Entity;
