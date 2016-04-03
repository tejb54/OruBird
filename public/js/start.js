var game = new Phaser.Game(600,480);

game.state.add('load',loadState);
game.state.add('main',mainState);
game.state.add('menu',menuState);
game.state.start('menu');
