module managers {
  export class Collision {

    public static Check(object1: objects.GameObject, object2: objects.GameObject) {
      // create two vec2 objects
      let P1: math.Vec2 = new math.Vec2(object1.x, object1.y);
      let P2: math.Vec2 = new math.Vec2(object2.x, object2.y);

      if(math.Vec2.Distance(P1, P2) < (object1.halfHeight + object2.halfHeight)) {
        if(!object2.isColliding) {
          object2.isColliding = true;
          switch(object2.name) {
            case "coin":
            if(object2.alpha != 0) {
              createjs.Sound.play("coin");
              managers.Game.scoreBoard.Score += 100;
              object2.alpha = 0;

              // life power up
              if(managers.Game.scoreBoard.Score % 1000 == 0) {
                createjs.Sound.play("lives");
                managers.Game.scoreBoard.Lives += 1;
              }

              if(managers.Game.HighScore <= managers.Game.scoreBoard.Score) {
                managers.Game.scoreBoard.HighScore = managers.Game.scoreBoard.Score;
                managers.Game.HighScore = managers.Game.scoreBoard.HighScore;
              }
            }
            break;
            case "cloud":
              createjs.Sound.play("thunder");
              managers.Game.scoreBoard.Lives -= 1;
              let explosion = new objects.Explosion();
              explosion.x = object1.x;
              explosion.y = object1.y;
              managers.Game.currentSceneObject.addChild(explosion);
            break;
          }
        }
      }
      else {
        object2.isColliding = false;
      }
    }
  }
}
