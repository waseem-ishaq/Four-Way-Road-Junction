var isEmergency = false;
function toggleLights() {
  setTimeout(function() {
    if(isEmergency){return;}
      // Turn of yellow light after 2 seconds
    document.getElementById('leftYellowLightY').classList.remove('yellowOn');
    document.getElementById('bottomYellowLightX').classList.remove('yellowOn');
    document.getElementById('rightYellowLightY').classList.remove('yellowOn');
    document.getElementById('topYellowLightX').classList.remove('yellowOn');
    if(isEmergency){return;}
    // Turn on red light for 14 seconds
    document.getElementById('leftRedLightY').classList.add('redOn');
    document.getElementById('bottomGreenLightX').classList.add('greenOn');
    document.getElementById('rightRedLightY').classList.add('redOn');
    document.getElementById('topGreenLightX').classList.add('greenOn');
    if(isEmergency){return;}
    setTimeout(function() {
      // Turn on red light after 14 seconds
      document.getElementById('leftRedLightY').classList.remove('redOn');
      document.getElementById('bottomGreenLightX').classList.remove('greenOn');
      document.getElementById('rightRedLightY').classList.remove('redOn');
      document.getElementById('topGreenLightX').classList.remove('greenOn');
      if(isEmergency){return;}
      // Turn on yellow light for 2 seconds
      document.getElementById('leftYellowLightY').classList.add('yellowOn');
      document.getElementById('bottomYellowLightX').classList.add('yellowOn');
      document.getElementById('rightYellowLightY').classList.add('yellowOn');
      document.getElementById('topYellowLightX').classList.add('yellowOn');
      if(isEmergency){return;}
      setTimeout(function() {
        // Turn of yellow light after 2 seconds
        document.getElementById('leftYellowLightY').classList.remove('yellowOn');
        document.getElementById('bottomYellowLightX').classList.remove('yellowOn');
        document.getElementById('rightYellowLightY').classList.remove('yellowOn');
        document.getElementById('topYellowLightX').classList.remove('yellowOn');
        if(isEmergency){return;}
        // Turn on green light for 14 seconds
        document.getElementById('leftGreenLightY').classList.add('greenOn');
        document.getElementById('bottomRedLightX').classList.add('redOn');
        document.getElementById('rightGreenLightY').classList.add('greenOn');
        document.getElementById('topRedLightX').classList.add('redOn');
        if(isEmergency){return;}
        setTimeout(function() {
          // Turn of green light after 14 seconds
          document.getElementById('leftGreenLightY').classList.remove('greenOn');
          document.getElementById('bottomRedLightX').classList.remove('redOn');
          document.getElementById('rightGreenLightY').classList.remove('greenOn');
          document.getElementById('topRedLightX').classList.remove('redOn');
          if(isEmergency){return;}
          // Turn on yellow light for 2 seconds
          document.getElementById('leftYellowLightY').classList.add('yellowOn');
          document.getElementById('bottomYellowLightX').classList.add('yellowOn');
          document.getElementById('rightYellowLightY').classList.add('yellowOn');
          document.getElementById('topYellowLightX').classList.add('yellowOn');
          if(isEmergency){return;}
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
      positionBlack += 1.5; 
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
      positionYellow += 1.5; 
      YellowCar.style.bottom = positionYellow + 'px';
    }

    if (positionYellow >= screenHight) {
      positionYellow = 0;
    }

    requestAnimationFrame(moveYellowCar);
}

moveYellowCar();

function stopLightsAndActivateEmergency() {

  isEmergency = true;
 
  document.getElementById('leftGreenLightY').classList.remove('greenOn');
  document.getElementById('bottomGreenLightX').classList.remove('greenOn');
  document.getElementById('rightGreenLightY').classList.remove('greenOn');
  document.getElementById('topGreenLightX').classList.remove('greenOn');
  
  document.getElementById('leftRedLightY').classList.remove('redOn');
  document.getElementById('bottomRedLightX').classList.remove('redOn');
  document.getElementById('rightRedLightY').classList.remove('redOn');
  document.getElementById('topRedLightX').classList.remove('redOn');

  // Turn on all yellow lights
  document.getElementById('leftYellowLightY').classList.add('yellowOn');
  document.getElementById('bottomYellowLightX').classList.add('yellowOn');
  document.getElementById('rightYellowLightY').classList.add('yellowOn');
  document.getElementById('topYellowLightX').classList.add('yellowOn');

}

function startLightsAndDeactivateEmergency() {

  if(isEmergency == true){
    isEmergency = false;
    
  document.getElementById('leftGreenLightY').classList.remove('greenOn');
  document.getElementById('bottomGreenLightX').classList.remove('greenOn');
  document.getElementById('rightGreenLightY').classList.remove('greenOn');
  document.getElementById('topGreenLightX').classList.remove('greenOn');
  
  document.getElementById('leftRedLightY').classList.remove('redOn');
  document.getElementById('bottomRedLightX').classList.remove('redOn');
  document.getElementById('rightRedLightY').classList.remove('redOn');
  document.getElementById('topRedLightX').classList.remove('redOn');

  document.getElementById('leftYellowLightY').classList.remove('yellowOn');
  document.getElementById('bottomYellowLightX').classList.remove('yellowOn');
  document.getElementById('rightYellowLightY').classList.remove('yellowOn');
  document.getElementById('topYellowLightX').classList.remove('yellowOn');

    toggleLights();
  }
  
}

function yStop() {

  isEmergency = true;
 
  document.getElementById('leftYellowLightY').classList.remove('yellowOn');
  document.getElementById('rightYellowLightY').classList.remove('yellowOn');
  document.getElementById('bottomYellowLightX').classList.remove('yellowOn');
  document.getElementById('topYellowLightX').classList.remove('yellowOn');

  document.getElementById('bottomGreenLightX').classList.remove('greenOn');
  document.getElementById('topGreenLightX').classList.remove('greenOn');
  
  document.getElementById('leftRedLightY').classList.remove('redOn');
  document.getElementById('rightRedLightY').classList.remove('redOn');

  document.getElementById('leftGreenLightY').classList.add('greenOn');
  document.getElementById('bottomRedLightX').classList.add('redOn');
  document.getElementById('rightGreenLightY').classList.add('greenOn');
  document.getElementById('topRedLightX').classList.add('redOn');

}

function xStop() {

  isEmergency = true;
 
  
  document.getElementById('leftYellowLightY').classList.remove('yellowOn');
  document.getElementById('rightYellowLightY').classList.remove('yellowOn');
  document.getElementById('bottomYellowLightX').classList.remove('yellowOn');
  document.getElementById('topYellowLightX').classList.remove('yellowOn');

  document.getElementById('bottomRedLightX').classList.remove('redOn');
  document.getElementById('topRedLightX').classList.remove('redOn');
  
  document.getElementById('leftGreenLightY').classList.remove('greenOn');
  document.getElementById('rightGreenLightY').classList.remove('greenOn');

  document.getElementById('leftRedLightY').classList.add('redOn');
  document.getElementById('bottomGreenLightX').classList.add('greenOn');
  document.getElementById('rightRedLightY').classList.add('redOn');
  document.getElementById('topGreenLightX').classList.add('greenOn');

}

document.getElementById('emergencyButton').addEventListener('click', stopLightsAndActivateEmergency);
document.getElementById('yStop').addEventListener('click', yStop);
document.getElementById('xStop').addEventListener('click', xStop);
document.getElementById('startButton').addEventListener('click', startLightsAndActivateEmergency);

