var bgv;
var sound;
var sound2;

var sagan = ['From', 'this', 'distant', 'vantage point,', 'the Earth', 'might', 'not', 'seem of', 'any', 'particular interest.', 'But', 'for us,', 'it’s', 'different.', 'Consider', 'again', 'that', 'dot.', 'That’s', 'here.', 'That’s', 'home.', 'That’s us.', 'On', 'it', 'everyone', 'you', 'love,', 'everyone you know,', 'everyone', 'you', 'ever', 'heard', 'of,', 'every', 'human', 'being', 'who', 'ever', 'was,', 'lived', 'out', 'their', 'lives.', 'The aggregate', 'of', 'our', 'joy', 'and', 'suffering,', 'thousands', 'of confident', 'religions,', 'ideologies,', 'and', 'economic doctrines,', 'every', 'hunter', 'and', 'forager,', 'every', 'hero', 'and coward,', 'every', 'creator', 'and', 'destroyer', 'of civilization,', 'every king', 'and peasant,', 'every young couple in love,', 'every mother', 'and father,', 'hopeful', 'child,', 'inventor', 'and explorer,', 'every', 'teacher', 'of', 'morals,', 'every', 'corrupt', 'politician,', 'every', '‘superstar,’', 'every', '‘supreme', 'leader,’', 'every saint', 'and sinner', 'in', 'the', 'history', 'of', 'our', 'species,', 'lived', 'there', '—', 'on', 'a', 'mote', 'of', 'suspended in a sunbeam.'];
 

var separator = ' ';



function preload() {
  sound = loadSound("SaganSynth.mp3");
  soundb = loadSound("birds.wav")

  
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  // specify multiple formats for different browsers
  bgv = createVideo(["TapeReel.mp4", "Tape Reel.webm", "Tape Reel.ogv", "Tape Reel.mov"]);
  bgv.hide();
  bgv.loop();
  sound.play();
  sound.loop();
  
  soundb.play();
  soundb.loop();
  
  reverb = new p5.Reverb();
  reverb.process(sound, 8, 10);
  
  frameRate(15);

 
}

function draw() {
  
  //var tw = windowWidth / 2;
  var m = map(mouseY, 0, windowHeight, windowWidth/2, windowWidth, true);
  background(220);
  image(bgv, 0, 0, windowWidth, windowHeight);
  textSize(26);
  fill(255, 255, 255);
  words = join(sagan, separator );
  text(words, 15, 50, m, windowHeight);
 
let dryWet = constrain(map(mouseX, 0, width, 0, 1), 0, 1);
  // 1 = all reverb, 0 = no reverb
  reverb.drywet(dryWet);

}



function windowResized() {
  resizeCanvas(windowWidth, windowHeight);

}


function mouseMoved() {

  if (mouseY > windowHeight / 4) {
    shuffle(sagan, true) 
    

  } else {
    sagan = ['From', 'this', 'distant', 'vantage point,', 'the Earth', 'might', 'not', 'seem of', 'any', 'particular interest.', 'But', 'for us,', 'it’s', 'different.', 'Consider', 'again', 'that', 'dot.', 'That’s', 'here.', 'That’s', 'home.', 'That’s us.', 'On', 'it', 'everyone', 'you', 'love,', 'everyone you know,', 'everyone', 'you', 'ever', 'heard', 'of,', 'every', 'human', 'being', 'who', 'ever', 'was,', 'lived', 'out', 'their', 'lives.', 'The aggregate', 'of', 'our', 'joy', 'and', 'suffering,', 'thousands', 'of confident', 'religions,', 'ideologies,', 'and', 'economic doctrines,', 'every', 'hunter', 'and', 'forager,', 'every', 'hero', 'and coward,', 'every', 'creator', 'and', 'destroyer', 'of civilization,', 'every king', 'and peasant,', 'every young couple in love,', 'every mother', 'and father,', 'hopeful', 'child,', 'inventor', 'and explorer,', 'every', 'teacher', 'of', 'morals,', 'every', 'corrupt', 'politician,', 'every', '‘superstar,’', 'every', '‘supreme', 'leader,’', 'every saint', 'and sinner', 'in', 'the', 'history', 'of', 'our', 'species,', 'lived', 'there', '—', 'on', 'a', 'mote', 'of', 'suspended in a sunbeam.'];
  }

  
  
}