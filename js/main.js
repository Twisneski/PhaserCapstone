var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game', { preload: preload, create: create, update: update });    
  
  function preload() {
    game.load.image('logo', './assets/aubrey.png'); 
    game.load.image('sky', './assets/gameBackground.png');
    game.load.image('pjMask','./assets/pjMask.jpeg');
    game.load.image('pjMasks','./assets/pjMasks.jpeg');
    game.load.spritesheet('numberTwo', './assets/yellowButtonTwo.png', 100, 100);
    game.load.spritesheet('numberThree', './assets/redButtonThree.png', 100, 100);
    game.load.spritesheet('numberSeven', './assets/greenButtonSeven.png', 100, 100);
    game.load.image('bucketTwo', './assets/yellowButtonTwo.png', 100, 100);
    game.load.image('bucketThree', './assets/redButtonThree.png', 100, 100);
    game.load.image('bucketSeven', './assets/greenButtonSeven.png', 100, 100);
    game.load.image('gameOver', './assets/greatJob.jpeg');
    game.load.image('pjmasksGroup', './assets/pjmasksGroup.jpeg');
    game.load.audio('music', ['assets/backgroundMusicGame.ogg']);  
  }

var background;
var stateText; //this will be for text for end game
var groupBuckets;
var groupNumberSprite;
var numberTwo;
var numberTwoGroup;
var numberThree;
var numberSeven;
var bucketTwo;
var bucketThree;
var bucketSeven;
var tempTwo;
var numberThreeGroup;
var numberSevenGroup;
var music;
var scale;
var logo;
var title;

  function create() {
     //This loads up the background
    game.add.sprite(0, 0, 'sky');
    // Group Two
    numberTwoGroup = game.add.group();
    numberTwoGroup.enableBody = true;
    //  Group Three
    numberThreeGroup = game.add.group();
    numberThreeGroup.enableBody = true;
    //  Group Seven
    numberSevenGroup = game.add.group();
    numberSevenGroup.enableBody = true;

    logo = game.add.sprite(0, 0, 'logo');
    setTimeout(function(){
      logo.kill()   
    //  And add 4 sprites to it number 2
    for (var i = 0; i < 4; i++)
    {//  Create a new sprite at a random world location
        var randomY = game.rnd.integerInRange(50, 370);
        var randomX = game.rnd.integerInRange(50, 750);
        var tempTwo = numberTwoGroup.create(randomX, randomY, 'numberTwo');
        tempTwo.scale.setTo(0.5, 0.5);
        tempTwo.inputEnabled = true;
        tempTwo.input.enableDrag(true);
        tempTwo.body.collideWorldBounds = true;
    }
    
    //  And add 4 sprites to it number 3
    for (var i = 0; i < 4; i++)
    {//  Create a new sprite at a random world location
        var randomY = game.rnd.integerInRange(50, 370);
        var randomX = game.rnd.integerInRange(50, 750);
        var tempThree = numberThreeGroup.create(randomX,randomY, 'numberThree');
        tempThree.scale.setTo(0.5, 0.5);
        tempThree.inputEnabled = true;
        tempThree.input.enableDrag(true);
        tempThree.body.collideWorldBounds = true;
    }
    
    //  And add 4 sprites to it number 7
    for (var i = 0; i < 4; i++)
    {//  Create a new sprite at a random world location
        var randomY = game.rnd.integerInRange(50, 370);
        var randomX = game.rnd.integerInRange(50, 750);
        var tempSeven = numberSevenGroup.create(randomX, randomY, 'numberSeven');
        tempSeven.scale.setTo(0.5, 0.5);
        tempSeven.inputEnabled = true;
        tempSeven.input.enableDrag(true);
        tempSeven.body.collideWorldBounds = true};
    //add number buckets, double size, and enable physics
    bucketTwo = game.add.sprite(600, 480, 'numberTwo');
    bucketTwo.scale.setTo(1,1);
    game.physics.arcade.enable(bucketTwo);
    bucketThree = game.add.sprite(350, 480, 'numberThree');
    bucketThree.scale.setTo(1,1);
    game.physics.arcade.enable(bucketThree);
    bucketSeven = game.add.sprite(100, 480, 'numberSeven');
    bucketSeven.scale.setTo(1,1);
    game.physics.arcade.enable(bucketSeven);
    },5000)//sets time to 5000 miliseconds after splash
      
    //This starts the game
    game.physics.startSystem(Phaser.Physics.ARCADE);

    //This adds music
    music = game.add.audio('music');
    music.loop = true;
    music.play();
    
  }
    function update(){
     game.physics.arcade.overlap(numberTwoGroup, bucketTwo, twoCollision, null, this);
     // game.physics.arcade.collide(numberTwoGroup, bucketThree, reject);
     // game.physics.arcade.collide(numberTwoGroup, bucketSeven, reject);
     game.physics.arcade.overlap(numberThreeGroup, bucketThree, twoCollision, null, this);
     game.physics.arcade.overlap(numberSevenGroup, bucketSeven, twoCollision, null, this);    
  }

    function twoCollision(bucket, number){
      console.log("collideit?");
      number.kill();
    }




    


    


