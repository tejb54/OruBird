var menuState = {
  preload: function(){
    game.load.image('oru',"/assets/images/oru.png");
    game.load.image('bird', "/assets/images/bird.png");
    game.load.image('block', "/assets/images/block.png");
  },

  create: function(){
    var logo = game.add.button(game.world.centerX,game.world.centerY,'oru',function(){
      game.state.start('main');
    });
    game.stage.backgroundColor = "#FFFFFF";
    logo.anchor.x = 0.5;
    logo.anchor.y = 0.5;
    logo.scale.setTo(1.5, 1.5);
  },

  update: function(){

  },
};
