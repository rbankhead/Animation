class Link {
    constructor(game, x, y){
        Object.assign(this, {game, x, y});
        this.game.link = this;

        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/link.png");
        this.animations = [];
        //this.animation = new Animator(this.spritesheet, 0,0,16,16,2,1,14,false,true);
        this.tunic = "green"; //green, blue, red, invincible
        this.facing = "right"; //up, down, left, right
        this.state = "walking"; //idle, walking, attacking, lifting, dying

        this.loadAnimations();
    };

    loadAnimations(){

        //initialize all arrays
        this.animations["green"] = [];
        this.animations["green"]["up"] = [];
        this.animations["green"]["down"] = [];
        this.animations["green"]["left"] = [];
        this.animations["green"]["right"] = [];
        this.animations["blue"] = [];
        this.animations["blue"]["up"] = [];
        this.animations["blue"]["down"] = [];
        this.animations["blue"]["left"] = [];
        this.animations["blue"]["right"] = [];
        this.animations["red"] = [];
        this.animations["red"]["up"] = [];
        this.animations["red"]["down"] = [];
        this.animations["red"]["left"] = [];
        this.animations["red"]["right"] = [];
        this.animations["invincible"] = [];
        this.animations["invincible"]["up"] = [];
        this.animations["invincible"]["down"] = [];
        this.animations["invincible"]["left"] = [];
        this.animations["invincible"]["right"] = [];

        //adding animations
        this.animations["green"]["up"]["idle"] = new Animator(this.spritesheet, 60,0,16,16,1,1,14,false,true);
        this.animations["green"]["down"]["idle"] = new Animator(this.spritesheet, 0,0,16,16,1,.2,14,false,true);
        this.animations["green"]["left"]["idle"] = new Animator(this.spritesheet, 30,0,16,16,1,1,14,false,true);
        this.animations["green"]["right"]["idle"] = new Animator(this.spritesheet, 90,0,16,16,1,1,14,false,true);

        this.animations["green"]["up"]["walking"] = new Animator(this.spritesheet, 60,0,16,16,2,.15,14,false,true);
        this.animations["green"]["down"]["walking"] = new Animator(this.spritesheet, 0,0,16,16,2,.15,14,false,true);
        this.animations["green"]["left"]["walking"] = new Animator(this.spritesheet, 30,0,16,16,2,.15,14,false,true);
        this.animations["green"]["right"]["walking"] = new Animator(this.spritesheet, 90,0,16,16,2,.15,14,false,true);

        this.animations["green"]["up"]["attacking"] = new Animator(this.spritesheet, 60,60,16,16,1,.5,14,false,true);
        this.animations["green"]["down"]["attacking"] = new Animator(this.spritesheet, 0,60,16,16,1,.5,14,false,true);
        this.animations["green"]["left"]["attacking"] = new Animator(this.spritesheet, 35,90,16,16,1,.5,14,false,true);
        this.animations["green"]["right"]["attacking"] = new Animator(this.spritesheet, 84,90,16,16,1,.5,14,false,true);

    }

    update() {
        const LINK_SPEED = 4;
        if (this.x < 121*PARAMS.SCALE) this.x+=LINK_SPEED;


    }

    draw(ctx) {
        this.animations[this.tunic][this.facing][this.state].drawFrame(this.game.clockTick, ctx, this.x, this.y, PARAMS.SCALE);

    }

}
class Triforce{
    constructor(game, x, y){
        Object.assign(this, {game, x, y});
        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/link.png");
        this.drawAtX = 124*PARAMS.SCALE;
        this.drawAtY = 124*PARAMS.SCALE;
    };
    //333, 288
    //343, 298
    update(){
        if (this.game.link.x == 120*PARAMS.SCALE) {
            console.log("test");
            this.drawAtY -= 16*PARAMS.SCALE;
        }

    }
    draw(ctx){
        ctx.drawImage(this.spritesheet,
            this.x, this.y,
            10, 10,
            this.drawAtX, this.drawAtY,
            10 * PARAMS.SCALE,
            10 * PARAMS.SCALE);
    }
}