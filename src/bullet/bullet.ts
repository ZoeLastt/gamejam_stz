import Entity from "../entity/Entity";
import { Vec2D } from "../types/types";

class bullet extends Entity {
  bulletSpeed = 200;

  constructor() {
    super();
  }

  move(direction: Vec2D, Key: string) {
    this.physicsController.moveTo(
      this.sprite,
      direction.x,
      direction.y,
      this.bulletSpeed
    );
  }

  getCurrentAngle(): number {
    return super.angle;
  }
  update(...args: any[]): void {}
}

export default bullet;
