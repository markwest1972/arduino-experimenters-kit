var five = require("johnny-five");
var myBoard, myLed;

myBoard = new five.Board();

myBoard.on("ready", function() {

  myLed = new five.Led(9);  // Connect to a PWM pin (allows for pulse)

  //myLed.strobe( 300 );

  myLed.pulse (500);

  // make myLED available as "led" in REPL

  this.repl.inject({
    led: myLed
  });

  // try "on", "off", "toggle", "strobe", "stop" (stops strobing)
});
