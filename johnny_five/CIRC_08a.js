var five = require("johnny-five"), board, myPotentiometer;

board = new five.Board();
board.on("ready", function() {

  myPotentiometer = new five.Sensor({
    pin: "A2",
    freq: 250
  });

  myServo = new five.Servo(9);

  board.repl.inject({
    servo: myServo
  });


  myPotentiometer.on("read", function() {
    var val = five.Fn.map(this.raw, 0, 1023, 0, 180);
    myServo.to(val);
  });

});