const SLICE_COUNT = 18;

function setup_pScope(pScope){
  pScope.output_mode(ANIMATED_DISK);
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(false);
  pScope.set_direction(CCW);
  pScope.set_slice_count(SLICE_COUNT);
  pScope.load_image("twodolphin", "png");
}

function setup_layers(pScope){
  new PLayer(null, 220);  //lets us draw the whole circle background, ignoring the boundaries
  
  var backLayer = new PLayer(bkgrd);
  backLayer.mode(RING);
  
  var layer1 = new PLayer(bubbleBack);
  layer1.mode( SWIRL(5) );
  layer1.set_boundary( 200, 1000 );

  var layer2 = new PLayer(fish);
  layer2.mode( SWIRL(5) );
  layer2.set_boundary( 0, 0 );

  var layer3 = new PLayer(twodolphin);
  layer3.mode( SWIRL(5) );
  layer3.set_boundary( 200, 1400 );
  
  
 
}
function bkgrd(x, y, animation, pScope){
  pScope.fill_background(0,84,119);
  noFill();
  strokeWeight(350);
  stroke('#F0EDB4'); //sand  colour 
  ellipse(0, 0, 2000);
}

function bubbleBack(x, y, animation, pScope){
  push();
  translate(0, 0);
  scale (0.2);
  scale(animation.frame*2.5);

// bubbles
strokeWeight(2);
stroke(90, 184, 242); //darker blue 
fill(212, 238, 255);
 circle(230,200,160); 
 circle(90, 10,180); 
 circle(130, -255,120); 
 circle(-150, 180,150); 
 pop();
}

function twodolphin(x, y, animation, pScope){
  push();
  translate(0, 0);
  scale (5);
  scale(animation.frame*5);
 

  pScope.draw_image("twodolphin",0,4000);
 
 pop();
}



function fish(x, y, animation, pScope){

  // this is how you set up a background for a specific layer
  let angleOffset = (360 / SLICE_COUNT) / 2
  let backgroundArcStart = 270 - angleOffset;
  let backgroundArcEnd = 270 + angleOffset;

  fill(9, 60, 82)
  arc(x,y,800,800,backgroundArcStart,backgroundArcEnd); // draws "pizza slice" in the background

  fill("#A7F1A8")
  // pScope.draw_image(twodolphin, -10, -100-animation.wave()*50, 50, 50);
  //rect(-10,-100-animation.wave()*50,20,20) // .wave is a cosine wave btw

  // Body
  fill(255, 165, 0); // Goldfish color (orange)
  ellipse(200, 200, 150, 80);

  // Tail
  fill(255, 0, 0); // Red color for tail
  triangle(150, 200, 100, 175, 100, 225);

  // Eye
  fill(0); // Black color for eye
  ellipse(225, 190, 20, 20);

  // Mouth
  noFill();
  stroke(0); // Black color for mouth
  arc(200, 215, 40, 20, 0, PI);
}
