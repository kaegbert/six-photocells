# photocell-synthesis
Progress towards sound as a product of light...

##### project description
This project uses sarahgp's [p5bots](https://github.com/sarahgp/p5bots) library as well as the p5 sound library to generate a tone based off the value of a photo resistor. The resistance value of the photocell also triggers mp3 samples when a certain threshold is broken.



Install [node](https://nodejs.org/)
& node package manager...

### get p5bots server
1. Open Terminal.
2. Install p5bots-server by running: `npm install -g p5bots-server`

You will need to run the command below in order for your Arduino to work properly with p5. It creates a local server at localhost:8000.

```bots-go -d YOUR/PATH/GOES/HERE```

#### setup details

#### upload firmata to arduino

1. Download the [Arduino IDE](https://www.arduino.cc/en/main/software) if you don't have it...
2. Upload `File > Examples > Firmata > StandardFirmata` to your board. To do this, you'll have to select your board and serial port from the `Tools` menu. ([More instructions from Arduino.](https://www.arduino.cc/en/Guide/MacOSX))
3. Write down the port your board is using; you may need it later. Note: If you change computers or more likely USB ports, you will need to change your port path in the JavaScript file!

![board port](https://github.com/kaegbert/photocell-synthesis/blob/master/board_port.png "board port")"

You can find your port by opening the Arduino IDE and then navigating to Tools > Port > Serial Ports

### Get p5.js, p5.bots, p5.sound
1. [Download `p5.js`.](https://github.com/processing/p5.js/releases/download/0.4.8/p5.zip)
2. [Download `p5.bots`.](https://raw.githubusercontent.com/sarahgp/p5bots/master/lib/p5bots.js)
3. [Download `p5.sound`.](https://github.com/processing/p5.js-sound)
4. [Download `p5.dom`.](https://raw.githubusercontent.com/lmccart/p5.js/master/lib/addons/p5.dom.js)

##### what to do next...

Calibrate - cannot rely environment to be stable. We have multiple options:
1. Use key commands to "sample" current resistance value and create threshold based of these values...
2. Use a potentiometer to set relative light in installation location. 
