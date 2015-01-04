// Fade on and off
var five = require("johnny-five");
var onButton, offButton, led;

five.Board().on("ready", function() {

  led = new five.Led(9);

  onButton = new five.Button(2);

  onButton.on("down", function(value){
    led.fadeIn(1000);
  });

  offButton = new five.Button(3);

  offButton.on("down", function(){
    led.fadeOut(1000);
  });

});