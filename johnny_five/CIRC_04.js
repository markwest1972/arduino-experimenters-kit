var five = require("johnny-five"),
board, myServo;
board = new five.Board();
board.on("ready", function() {

  tiltServo = new five.Servo({
    pin: 12,
    range: [ 45, 125 ],
    startAt: 85
  });

  panServo = new five.Servo({
    pin: 13,
    range: [ 45, 135 ],
    startAt: 90
  });

  board.repl.inject({
    tilt: tiltServo,
    pan: panServo
  });
});
