var mainState = {
  preload: function(){

  },

  create: function(){

    game.physics.startSystem(Phaser.Physics.ARCADE);
    this.bird = game.add.sprite(100, 245,'bird');

    game.physics.arcade.enable(this.bird);
    this.bird.body.gravity.y = 1000;

    this.pipes = game.add.group();


    var spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    var UpKey = game.input.keyboard.addKey(Phaser.Keyboard.UP);

    spaceKey.onDown.add(this.jump, this);
    UpKey.onDown.add(this.jump, this);

    this.score = 0;
    this.labelScore = game.add.text(20, 20, "0", { font: "30px Arial", fill: "#000000" });

    this.timer = game.time.events.loop(1500, this.addRowOfPipes, this);




  },

  update: function(){
    if(this.bird.y > game.height || this.bird.y < 0){
      this.restart();
    }

    game.physics.arcade.overlap(
    this.bird, this.pipes, this.restart, null, this);


  },

  addRowOfPipes: function(){
    var hole = Math.floor(Math.random() * 5) + 1;

    this.score++;
    this.labelScore.text = this.score;

    for (var i = 0; i < 9; i++) {
      if(!(i == hole || i == (hole + 1)))
      {
        this.addPipe(game.width, i * 60);
      }
    }
  },

  addPipe: function(x,y){
    var pipe = game.add.sprite(x,y,'block');
    pipe.anchor.setTo(0.5, 0.5);
    var rndAngle = game.rnd.integerInRange(-10, 10);
    pipe.angle = rndAngle;

    this.pipes.add(pipe);

    game.physics.arcade.enable(pipe);

    pipe.body.velocity.x = -200;

    pipe.checkWorldBounds = true;
    pipe.outOfBoundsKill = true;
  },

  jump: function(){
    this.bird.body.velocity.y = -350;
  },

  restart: function(){
    game.state.start('menu');
  }
};
