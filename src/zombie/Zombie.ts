import Entity from "../entity/Entity";
import { Vec2D } from "../types/types";

enum ZombieBehaviour {
  IDLE,
  CHASE,
  ATTACK,
}

interface IZombie {}

class zombie extends Entity implements IZombie {
  private speed: number = 80;
  constructor() {
    super();
  }

  update(playerPos: Vec2D): void {
    if (this.sprite.body) {
      this.physicsController.moveTo(
        this.sprite,
        playerPos.x,
        playerPos.y,
        this.speed
      );
    }
  }
}

export default zombie;
