module.exports = class Jugador {
  constructor(id) {
    this.id = id;
    this.coords = [608, 250];
    this.accX = 0;
    this.accY = 0;

    this.item = null;
  }
}
