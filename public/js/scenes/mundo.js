class SceneMundo extends Phaser.Scene {
    constructor(){
        super("scene_mundo");
    }

    create() {
        this.tiles_ids = [
          [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
          [1,1,2,2,4,2,2,7,7,2,2,2,6,2,1,1],
          [1,1,2,0,0,0,0,0,0,0,0,0,0,2,1,1],
          [1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
          [1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
          [1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
          [1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
          [1,1,2,0,0,0,0,0,0,0,0,0,0,2,1,1],
          [1,1,2,5,2,5,2,2,2,2,2,2,3,2,1,1],
          [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
        ];

        this.mundoColumnas = this.tiles_ids[0].length;
        this.mundoFilas = this.tiles_ids.length;
        this.tileTam = 64;

        this.tilesMundo = {};
        this.fisicaMundo = this.physics.add.staticGroup();

        for(var x=0; x<this.mundoColumnas; x++) {
            for(var y=0; y<this.mundoFilas; y++) {
                this.tilesMundo[x+","+y] = crearBloque(x, y, this, this.tiles_ids[y][x]);
            }
        }

        this.jugador = new Player(this);
        this.physics.add.collider(this.jugador.container, this.fisicaMundo);

        this.cursors = this.input.keyboard.createCursorKeys();

        let cx = this.tiles_ids[0].length*this.tileTam*0.5 - this.tileTam*0.5;
        let cy = this.tiles_ids.length*this.tileTam*0.5 - this.tileTam*0.5;
        this.cameras.main.centerOn(cx,cy);
        this.cameras.main.setZoom(1.25);

        let mesa = this.tilesMundo['3,1'];
        mesa.item = new ItemPalo(this);
        mesa.pintarItem();

        mesa = this.tilesMundo['5,1'];
        mesa.item = new ItemGrava(this);
        mesa.pintarItem();

        mesa = this.tilesMundo['6,1'];
        mesa.item = new ItemFlint(this);
        mesa.pintarItem();

        mesa = this.tilesMundo['4,8'];
        mesa.item = new ItemPluma(this);
        mesa.pintarItem();

        this.jugador.item = new ItemTronco(this);
        this.jugador.pintarItem();
    }

    update() {
      this.jugador.update();
    }
}
