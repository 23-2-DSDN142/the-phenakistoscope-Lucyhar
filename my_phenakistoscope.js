const SLICE_COUNT = 18;

function setup_pScope(pScope){
  pScope.output_mode(ANIMATED_DISK);
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(false);
  pScope.set_direction(CCW);
  pScope.set_slice_count(SLICE_COUNT);
  pScope.load_image(seaweed, png);
}

function setup_layers(pScope){
  new PLayer(null, 220);  //lets us draw the whole circle background, ignoring the boundaries
  
  
  var layer1 = new PLayer(faces, bubbleBack);
  layer1.mode( SWIRL(5) );
  layer1.set_boundary( 200, 1000 );

  var layer2 = new PLayer(squares);
  layer2.mode( RING );
  layer2.set_boundary( 0, 400 );

  
}

function bubbleBack(animation, pScope){
  pScope.fill_background(0,84,119);
  noFill();
  strokeWeight(150);
  stroke('#F0EDB4'); //sand  colour 
  ellipse(0, 0, 2000);
  



}

function faces(x, y, animation, pScope){
  translate(0, 0);
  scale(animation.frame*2);



// bubbles
strokeWeight(2);
stroke(90, 184, 242); //darker blue 
fill(212, 238, 255);
 circle(10, 30,30); 
 circle(55, 5,40); 
 circle(30, -55,20); 
 circle(-50, 80,20); 
}



function squares(x, y, animation, pScope){

  // this is how you set up a background for a specific layer
  let angleOffset = (360 / SLICE_COUNT) / 2
  let backgroundArcStart = 270 - angleOffset;
  let backgroundArcEnd = 270 + angleOffset;

  fill(9, 60, 82)
  arc(x,y,800,800,backgroundArcStart,backgroundArcEnd); // draws "pizza slice" in the background

  fill("#A7F1A8")
  pScope.draw_image(seaweed, -10, -100-animation.wave()*50, 50, 50);
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
