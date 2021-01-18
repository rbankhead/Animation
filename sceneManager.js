class SceneManager {
    constructor(game) {
        this.game = game;
        this.game.camera = this;

        this.x = 0;
        this.y = 0;

        this.loadOverworld();
    };

    clearEntities() {
        this.game.entities = [this];
    };

    loadOverworld() {
        let background = new Overworld(this.game, 1800,1240)
        gameEngine.addEntity(background);
        let triforce = new Triforce(this.game,333, 288)
        gameEngine.addEntity(triforce);

        this.link = new Link(gameEngine, -16, 118*PARAMS.SCALE);
        gameEngine.addEntity(this.link);

    };

    update() {
    };

    draw(ctx) {

    };
};