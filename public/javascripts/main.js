class ExampleScene extends Phaser.Scene{
    ball;
    paddle;

    preload(){
        this.load.image("ball","images/ball.png");
        this.load.image("paddle","images/plat.png");
    }
    create(){
        this.ball = this.add.sprite(50,50,"ball");
        this.physics.add.existing(this.ball);
        this.ball.body.setVelocity(150,150);
        this.ball.body.setCollideWorldBounds(true,1,1);
        this.ball.body.setBounce(1)
        this.paddle = this.add.sprite(
            this.scale.width * 0.5,
            this.scale.height - 5,
            "paddle",
        )
        this.paddle.setOrigin(0.5,1)
        this.physics.add.existing(this.paddle);
        this.paddle.body.setImmovable(true);
    }
    update(){
        this.physics.collide(this.ball,this.paddle);
        this.paddle.x = this.input.x ||
        this.scale.width * 0.5;
    }
}


const config = {
    type: Phaser.CANVAS,
    width: 2200,
    height: 1080,
    scene: ExampleScene,
    scale: {
        mode: Phaser.Scale.FIT,
        autooCenter: Phaser.Scale.CENTER_BOTH
    },
    backgroundColor: "#eeeeee",
    physics: {
        default: "arcade",
    },
    
};

const game = new Phaser.Game(config);
