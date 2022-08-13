import Entity from "../entity/Entity";
import { Vec2D } from "../types/types";

interface IPlayer {
  shoot(): void;
  move(direction: Vec2D, Key: string): void;
  setBulletCount(count: number): this;
  getCurrentAngle(): number;
}

class player extends Entity implements IPlayer {
  private canShoot = true;
  bulletCount!: number;
  sprintSpeed = 200;
  walkSpeed = 200;

  constructor() {
    super();
  }

  setBulletCount(count: number): this {
    this.bulletCount = count;
    return this;
  }

  shoot() {
    this.bulletCount--;
  }

  move(direction: Vec2D, Key: string) {
    this.physicsController.moveTo(
      this.sprite,
      direction.x,
      direction.y,
      this.sprintSpeed
    );
  }

  getCurrentAngle(): number {
    return super.angle;
  }

  update(mouseVec: Vec2D): void {}
}

export default player;
