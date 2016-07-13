// // Uncomment the lines below to log ports to the console
// p5.serial().list(function(data) {
//   console.log('serial list:');
//   data.ports.forEach(function(port) {
//     console.log(port.comName);
//   });
// });

var playMode = 'sustain';

// variable for oscillator to be generated from light sensor...
var osc, fft;

// setting variable a for audio track a which is c of c minor 13
var a = new Audio('audio/e.mp3');
var f = new Audio('audio/f.mp3');
var c = new Audio('audio/a.mp3');
var d = new Audio('audio/b.mp3');
var e = new Audio('audio/d.mp3');


// Board setup — you may need to change the port
var b = p5.board('/dev/cu.usbmodemFA131', 'arduino');

// Test Read & Threshold
var photo0;
var val0 = 0;

var photo1;
var val1 = 0;

var photo2;
var val2 = 0;

var photo3;
var val3 = 0;

var photo4;
var val4 = 0;

var photo5;
var val5 = 0;


// function preload() {
//   var a = new Audio('audio/e.mp3');
// }

function setup() {
  createCanvas(600, 600);
  background(255);
  soundFormats('mp3');
  // frameRate(10);
  osc = new p5.SinOsc(); // set frequency and type
  osc.amp(.05);
  // FFT - analysis algorithm that isolates individual audio frequencies within a waveform.
  fft = new p5.FFT();
  osc.start();

  // var innerStr = '<p style="font-family:Arial;font-size:12px">'
  // innerStr += 'Check out the console for readings &nbsp; | &nbsp;';
  // innerStr += 'Press any key to test threshold </p>';
  // createDiv(innerStr);

  // PHOTOCELL 0
  photo0 = b.pin(0, 'VRES');
  photo0.read(function(val) {
    console.log('photo0', val)
  });
  photo0.range([0, 900]);
  photo0.threshold(500);


  // PHOTOCELL 1
  photo1 = b.pin(1, 'VRES');
  photo1.read(function(val) {
    console.log('photo1', val)
  });
  photo1.range([0, 900]);
  photo1.threshold(500);

  // PHOTOCELL 2
  photo2 = b.pin(2, 'VRES');
  photo2.read(function(val) {
    console.log('photo2', val)
  });
  photo2.range([0, 900]);
  photo2.threshold(500);

  // PHOTOCELL 3
  photo3 = b.pin(3, 'VRES');
  photo3.read(function(val) {
    console.log('photo3', val)
  });
  photo3.range([0, 200]);
  photo3.threshold(500);

  // PHOTOCELL 4
  photo4 = b.pin(4, 'VRES');
  photo4.read(function(val) {
    console.log('photo4', val)
  });
  photo4.range([0, 200]);
  photo4.threshold(500);

  // PHOTOCELL 5
  photo5 = b.pin(5, 'VRES');
  photo5.read(function(val) {
    console.log('photo5', val)
  });
  photo5.range([0, 200]);
  photo5.threshold(500);

  // these buttons will change the osc's waveform
  sine = createButton('sine');
  sine.position(50, 65);
  sine.mousePressed(setSine);
  saw = createButton('sawtooth');
  saw.position(50, 95);
  saw.mousePressed(setSawtooth);
  tri = createButton('triangle');
  tri.position(50, 125);
  tri.mousePressed(setTriangle);
  sq = createButton('square');
  sq.position(50, 155);
  sq.mousePressed(setSquare);

}


// function keyPressed() {
//   console.log('is over?', photo0.val, photo0.overThreshold());
// }

function draw() {
  background(255);

  var val0 = map(photo0.val, 0, 1023, 0, 1023);
  if (val0 < 50) {
    // noStroke();
    fill(0, 0, 200);
    rect(50, 50, 100, 100);
    // a.play();
  } else {
    // noStroke();
    // fill(0, 200, 0, 10);
    rect(50, 50, 100, 100);
  }

  var val1 = map(photo1.val, 0, 1023, 0, 1023);
  if (val1 < 8) {
    // noStroke();
    fill(0, 200, 0);
    rect(150, 150, 100, 100);
     a.play();
  } else {
    // noStroke();
    fill(255);
    rect(150, 150, 100, 100);
  }

  var val2 = map(photo2.val, 0, 1023, 0, 1023);
  if (val2 < 15) {
    // noStroke();
    fill(200, 0, 0);
    rect(250, 250, 100, 100);
     f.play();
    // a.play();
  } else {
    // noStroke();
    fill(255);
    rect(250, 250, 100, 100);
  }

  var val3 = map(photo3.val, 0, 100, 0, 1023);
  if (val3 < 40) {
    // noStroke();
    fill(200, 100, 0);
    rect(350, 350, 100, 100);
     c.play();
    // a.play();
  } else {
    // noStroke();
    fill(255);
    rect(350, 350, 100, 100);
  }

  var val4 = map(photo4.val, 0, 100, 0, 1023);
  if (val4 < 40) {
    // noStroke();
    fill(200, 0, 200);
    rect(250, 50, 100, 100);
     d.play();
    // a.play();
  } else {
    // noStroke();
    fill(255);
    rect(250, 50, 100, 100);
  }

  var val5 = map(photo5.val, 0, 100, 0, 1023);
  if (val5 < 40) {
    // noStroke();
    fill(0, 200, 200);
    rect(350, 150, 100, 100);
     e.play();
    // a.play();
  } else {
    // noStroke();
    fill(255);
    rect(350, 150, 100, 100);
  }
  // var waveform = fft.waveform(); // analyze the waveform
  // beginShape();
  // noFill();
  // strokeWeight(2);
  // for (var i = 0; i < waveform.length; i++) {
  //   var x = map(i, 0, waveform.length, 0, width);
  //   var y = map(waveform[i], -1, 1, height, 0);
  //   vertex(x, y);
  // }
  // endShape();

  // var freq = map(photo0.val, 0, 1023, 0, 1023);
  osc.freq(photo0.val);

  // var amp = map(mouseY, 0, height, 1, .01);
  // osc.amp(amp);
}

function keyPressed() {
  if (key == 'A') {
    a.play();
    // background(200, 100, 0);

  }
}

function setSine() {
  osc.setType('sine');
}

function setTriangle() {
  osc.setType('triangle');
}

function setSawtooth() {
  osc.setType('sawtooth');
}

function setSquare() {
  osc.setType('square');
}



// var b = p5.board('/dev/cu.usbmodemFA131', 'arduino');

// // Test analog read
// var p = b.pin(0, 'ANALOG', 'INPUT');
// p.read(function(val) {console.log(val); });

// function setup() {
//   background(0, 100, 0);
//   createCanvas(1000, 1000);

//   // var innerStr = '<p style="font-family:Arial;font-size:12px">'
//   // innerStr += 'Check out the console for readings</p>';

//   // createDiv(innerStr);
// }

// function draw() {
//     fill(200, 0, 0);
//     ellipse(200, 200, 100, 100);
//   }




// var b = p5.board('/dev/cu.usbmodemFA131', 'arduino');
// var led;

// function setup() {
//   led = b.pin(9, 'LED');
// }

// function keyPressed() {
//   if (keyCode === LEFT_ARROW){
//     led.on();
//   } else if (keyCode === RIGHT_ARROW) {
//     led.off();
//   } else if (keyCode === UP_ARROW){
//     led.blink();
//     console.log('Hello, World!');
//   } else if (keyCode === DOWN_ARROW) {
//     led.noBlink();
//   }
// }
