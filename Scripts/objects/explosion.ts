module objects {
  export class Explosion extends objects.GameObject {
    // private instance variables

    // public properties

    // constructors
    constructor() {
      super("explosion");
      this.Start();
    }

    // private methods
    private _animationEnded() {
      this.alpha = 0;
      this.off("animationend", this._animationEnded.bind(this), false);
    }


    // public methods
    public Start(): void {
      this.on("animationend", this._animationEnded.bind(this), false);
    }

    public Update(): void {
    }

  }
}
