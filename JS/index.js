function toggleLights() {
    setTimeout(function() {
      // Turn of yellow light after 2 seconds
    document.getElementById('leftYellowLightY').classList.remove('yellowOn');
    document.getElementById('bottomYellowLightX').classList.remove('yellowOn');
    document.getElementById('rightYellowLightY').classList.remove('yellowOn');
    document.getElementById('topYellowLightX').classList.remove('yellowOn');
    // Turn on red light for 14 seconds
    document.getElementById('leftRedLightY').classList.add('redOn');
    document.getElementById('bottomGreenLightX').classList.add('greenOn');
    document.getElementById('rightRedLightY').classList.add('redOn');
    document.getElementById('topGreenLightX').classList.add('greenOn');
    setTimeout(function() {
      // Turn on red light after 14 seconds
      document.getElementById('leftRedLightY').classList.remove('redOn');
      document.getElementById('bottomGreenLightX').classList.remove('greenOn');
      document.getElementById('rightRedLightY').classList.remove('redOn');
      document.getElementById('topGreenLightX').classList.remove('greenOn');
      // Turn on yellow light for 2 seconds
      document.getElementById('leftYellowLightY').classList.add('yellowOn');
      document.getElementById('bottomYellowLightX').classList.add('yellowOn');
      document.getElementById('rightYellowLightY').classList.add('yellowOn');
      document.getElementById('topYellowLightX').classList.add('yellowOn');
      setTimeout(function() {
        // Turn of yellow light after 2 seconds
        document.getElementById('leftYellowLightY').classList.remove('yellowOn');
        document.getElementById('bottomYellowLightX').classList.remove('yellowOn');
        document.getElementById('rightYellowLightY').classList.remove('yellowOn');
        document.getElementById('topYellowLightX').classList.remove('yellowOn');
        // Turn on green light for 14 seconds
        document.getElementById('leftGreenLightY').classList.add('greenOn');
        document.getElementById('bottomRedLightX').classList.add('redOn');
        document.getElementById('rightGreenLightY').classList.add('greenOn');
        document.getElementById('topRedLightX').classList.add('redOn');
        setTimeout(function() {
          // Turn of green light after 14 seconds
          document.getElementById('leftGreenLightY').classList.remove('greenOn');
          document.getElementById('bottomRedLightX').classList.remove('redOn');
          document.getElementById('rightGreenLightY').classList.remove('greenOn');
          document.getElementById('topRedLightX').classList.remove('redOn');
          // Turn on yellow light for 2 seconds
          document.getElementById('leftYellowLightY').classList.add('yellowOn');
          document.getElementById('bottomYellowLightX').classList.add('yellowOn');
          document.getElementById('rightYellowLightY').classList.add('yellowOn');
          document.getElementById('topYellowLightX').classList.add('yellowOn');
          // Repeat after 0 seconds
          setTimeout(toggleLights, 0);
        },14000);
      }, 2000);
    },14000);
  }, 2000);
  }
  // Start the light sequence
  toggleLights();

//--------------------------------------------------------------------------------------------
//PinkCar
var pinkCar = document.getElementById('pinkCar');

var positionPink = -pinkCar.width;

var screenWidth = window.innerWidth+ pinkCar.width;

var screenHight = window.innerHeight; 

function movePinkCar() {

  pinkCar.style.top = "47%";

   
    if(document.getElementById('leftGreenLightY').classList.contains('greenOn') || positionPink!=607)
    {
      positionPink += 2; 
      pinkCar.style.left = positionPink + 'px';
    }

    if (positionPink >= screenWidth) {
        positionPink = -pinkCar.width;
    }

    requestAnimationFrame(movePinkCar);
}

movePinkCar();

//--------------------------------------------------------------------------------------------
//BlueCar
var BlueCar = document.getElementById('blueCar');

var positionBlue = -BlueCar.width;

function moveBlueCar() {

  BlueCar.style.top = "41%";

   
    if(document.getElementById('rightGreenLightY').classList.contains('greenOn')|| positionBlue!=607)
    {
      positionBlue += 2; 
      BlueCar.style.right = positionBlue + 'px';
    }

    if (positionBlue >= screenWidth) {
      positionBlue = -BlueCar.width;
    }

    requestAnimationFrame(moveBlueCar);
}

moveBlueCar();

//--------------------------------------------------------------------------------------------
//BlackCar
var BlackCar = document.getElementById('blackCar');

var positionBlack = 0;


function moveBlackCar() {

  BlackCar.style.left = "44%";

   
    if(document.getElementById('topGreenLightX').classList.contains('greenOn') || positionBlack!=225)
    {
      positionBlack += 1; 
      BlackCar.style.top = positionBlack + 'px';
    }

    if (positionBlack >= screenHight) {
      positionBlack = 0;
    }

    requestAnimationFrame(moveBlackCar);
}

moveBlackCar();

//--------------------------------------------------------------------------------------------
//YellowCar
var YellowCar = document.getElementById('yellowCar');

var positionYellow = 0;

function moveYellowCar() {

  YellowCar.style.left = "50%";

   
    if(document.getElementById('bottomGreenLightX').classList.contains('greenOn') || positionYellow!=225)
    {
      positionYellow += 1; 
      YellowCar.style.bottom = positionYellow + 'px';
    }

    if (positionYellow >= screenHight) {
      positionYellow = 0;
    }

    requestAnimationFrame(moveYellowCar);
}

moveYellowCar();

// function stopX(){
//   document.getElementById('leftGreenLightX').classList.remove('greenOff');
//   document.getElementById('rightGreenLightX').classList.remove('greenOff');
//   document.getElementById('leftYellowLightX').classList.remove('YellowOff');
//   document.getElementById('rightYellowLightX').classList.remove('YellowOff');
//   document.getElementById('leftRedLightX').classList.add('redOn');
//   document.getElementById('rightRedLightX').classList.remove('redOn');
//   console.log("working...");
// }

// var stopx = document.getElementById('stopX');
// stopx.addEventListener('click',stopX);

// // Function to stop the signals
// function stopSignals() {
//   // Stop the signal sequence
//   clearTimeout(toggleLights);
// }

// // Get the emergency button element
// var emergencyButton = document.getElementById('emergencyButton');

// // Add event listener to the emergency button to stop signals when clicked
// emergencyButton.addEventListener('click', stopSignals);