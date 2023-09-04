const SLICE_COUNT = 15;

function setup_pScope(pScope){
  pScope.output_mode(ANIMATED_DISK);
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(false);
  pScope.set_direction(CCW);
  pScope.set_slice_count(SLICE_COUNT);
}

function setup_layers(pScope){

  new PLayer(null, 220);  //lets us draw the whole circle background, ignoring the boundaries

  var layer1 = new PLayer(faces);
  layer1.mode( SWIRL(5) );
  layer1.set_boundary( 200, 1000 );

  var layer2 = new PLayer(squares);
  layer2.mode( RING );
  layer2.set_boundary( 0, 400 );
  
}

function faces(x, y, animation, pScope){
  translate(0, 0);
  scale(animation.frame*2);

// bubbles
stroke(18, 70, 105); //darker blue 
strokeWeight(2);
fill(188, 232, 247);
 circle(100, 130,30); 
 circle(150, 110,40); 
 circle(60, 110,20); 
 circle(190, 120,20); 
}
function squares(x, y, animation, pScope){

  // this is how you set up a background for a specific layer
  let angleOffset = (360 / SLICE_COUNT) / 2
  let backgroundArcStart = 270 - angleOffset;
  let backgroundArcEnd = 270 + angleOffset;

  fill(42,75,90)
  arc(x,y,800,800,backgroundArcStart,backgroundArcEnd); // draws "pizza slice" in the background

  fill("#A7F1A8")
  rect(-10,-300-animation.wave()*50,20,20) // .wave is a cosine wave btw

  //cherrys 1
fill('#008000' );//green leaf
ellipse(72, 122, 20,5); // leaf
}
