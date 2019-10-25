class Player {
    constructor(scene) {
        this.x = 0;
        this.y = 0;
        this.scene = scene;

        this.cuerpo = scene.physics.add.image(200,200,'totem_of_undying');
        this.cuerpo.setScale(5,5);
        this.cuerpo.body.setAllowDrag(true);
        this.cuerpo.setDrag(600);
        this.cuerpo.setMaxVelocity(300);
        this.cuerpo.setSize(this.cuerpo.width, this.cuerpo.height*0.5, true);
        this.cuerpo.setOffset(0, 0);
    }

    update() {
      this.cuerpo.setAcceleration(0);

      let accPos = 600;
      let accNeg = -600;

      if(this.scene.cursors.left.isDown) {
        this.cuerpo.setAccelerationX(accNeg);
      }
      if(this.scene.cursors.right.isDown) {
        this.cuerpo.setAccelerationX(accPos);
      }
      if(this.scene.cursors.up.isDown) {
        this.cuerpo.setAccelerationY(accNeg);
      }
      if(this.scene.cursors.down.isDown) {
        this.cuerpo.setAccelerationY(accPos);
      }

      this.x = this.cuerpo.x;
      this.y = this.cuerpo.y;
      this.cuerpo.depth = this.y;
    }
}
