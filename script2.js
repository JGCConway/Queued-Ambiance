// BELOW WILL BE DELETED  -- HARDCODED FOR ALPHA TESTING//

//-------------------------------2-------------------------------------//
  

const wavesurfer2= WaveSurfer.create({ 
    container: '#waveform2',
    waveColor: '#bdbdbd',
    progressColor: '#5A69FF',
    url: 'media/tavernSounds.mp3',
    barWidth: 3,
    responsive: true,
    barHeight: 5,
    barRadius: 0,
    cursorWidth: 2,
    interact: true,
    getDuration: 1,
  })
  
  wavesurfer2.load('media/tavernSounds.mp3'); 

//Play to Pause 2
playBtn2.onclick = function(){
  wavesurfer2.playPause();
  if(playBtn2.src.includes("play.png")){
      playBtn2.src = "media/pause.png";
  }else{
      playBtn2.src = "media/play.png";
  }
}
//Loop OFF to Loop ON
loopBtn2.onclick = function(){    
  if (loopBtn2.src.includes("loop.png")){
      loopBtn2.src = "media/loopOn.png";
      loopBtn2.style.opacity = "1"
  }else{
      loopBtn2.src = "media/loop.png";
      loopBtn2.style.opacity = ".5"
  }
}
//Loop OFF to Play
wavesurfer2.on('finish', function(){
  if (loopBtn2.src.includes("loopOn.png")){
    wavesurfer2.playPause();
}else{
    loopBtn2.src = "media/loop.png";
    playBtn2.src = "media/play.png"
}
})

var volumeInput = document.querySelector('#volume2');
var onChangeVolume = function (e) {
  wavesurfer2.setVolume(e.target.value);
  console.log(e.target.value);
};
volumeInput.addEventListener('input', onChangeVolume);
volumeInput.addEventListener('change', onChangeVolume);

// Rename Field Functionality
function editField2() {
let h2 = document.getElementById("renameField2");
let currentText = h2.innerText;
let input = document.createElement("input");

input.type = "text";
input.value = currentText;

//Click into the field
input.onblur = function() {
    h2.innerText = input.value || currentText;
    h2.onclick = editField;  // Re-enable editing
};
// On KeyPress "ENTER"
input.onkeydown = function(event) {
    if (event.key === 'Enter') {
        input.blur();
    }
};
// Blank Field Protection
input.onblur = function() {
  if (input.value.trim() === '') {
  } else {
      h2.innerText = input.value;
      h2.onclick = editField2;  // Re-enable editing
  }
};

h2.innerHTML = '';
h2.appendChild(input);
input.focus();
input.select();
}







//-------------------------------3-------------------------------------//


  const wavesurfer3= WaveSurfer.create({ 
    container: '#waveform3',
    waveColor: '#bdbdbd',
    progressColor: '#5A69FF',
    url: 'media/citySounds.mp3',
    barWidth: 3,
    responsive: true,
    barHeight: 5,
    barRadius: 0,
    cursorWidth: 2,
    interact: true,
    getDuration: 1,
  })
  
  wavesurfer3.load('media/citySounds.mp3'); // WILL BE USER INPUT

//Play to Pause 3
playBtn3.onclick = function(){
  wavesurfer3.playPause();
  if(playBtn3.src.includes("play.png")){
      playBtn3.src = "media/pause.png";
  }else{
      playBtn3.src = "media/play.png";
  }
}
//Loop OFF to Loop ON
loopBtn3.onclick = function(){    
  if (loopBtn3.src.includes("loop.png")){
      loopBtn3.src = "media/loopOn.png";
      loopBtn3.style.opacity = "1"
  }else{
      loopBtn3.src = "media/loop.png";
      loopBtn3.style.opacity = ".5"
  }
}
//Loop OFF to Play
wavesurfer3.on('finish', function(){
  if (loopBtn3.src.includes("loopOn.png")){
    wavesurfer3.playPause();
}else{
    loopBtn3.src = "media/loop.png";
    playBtn3.src = "media/play.png"
}
})

var volumeInput = document.querySelector('#volume3');
var onChangeVolume = function (e) {
  wavesurfer3.setVolume(e.target.value);
  console.log(e.target.value);
};
volumeInput.addEventListener('input', onChangeVolume);
volumeInput.addEventListener('change', onChangeVolume);

// Rename Field Functionality
function editField3() {
let h2 = document.getElementById("renameField3");
let currentText = h2.innerText;
let input = document.createElement("input");

input.type = "text";
input.value = currentText;

//Click into the field
input.onblur = function() {
    h2.innerText = input.value || currentText;
    h2.onclick = editField3;  // Re-enable editing
};
// On KeyPress "ENTER"
input.onkeydown = function(event) {
    if (event.key === 'Enter') {
        input.blur();
    }
};
// Blank Field Protection
input.onblur = function() {
  if (input.value.trim() === '') {
  } else {
      h2.innerText = input.value;
      h2.onclick = editField3;  // Re-enable editing
  }
};

h2.innerHTML = '';
h2.appendChild(input);
input.focus();
input.select();
}







//--------------------------------4------------------------------------//

  const wavesurfer4= WaveSurfer.create({ 
    container: '#waveform4',
    waveColor: '#bdbdbd',
    progressColor: '#5A69FF',
    url: 'media/forestSounds.mp3',
    barWidth: 3,
    responsive: true,
    barHeight: 5,
    barRadius: 0,
    cursorWidth: 2,
    interact: true,
    getDuration: 1,
  })
  
  wavesurfer4.load('media/forestSounds.mp3'); // WILL BE USER INPUT

//Play to Pause 4
playBtn4.onclick = function(){
  wavesurfer4.playPause();
  if(playBtn4.src.includes("play.png")){
      playBtn4.src = "media/pause.png";
  }else{
      playBtn4.src = "media/play.png";
  }
}
//Loop OFF to Loop ON
loopBtn4.onclick = function(){    
  if (loopBtn4.src.includes("loop.png")){
      loopBtn4.src = "media/loopOn.png";
      loopBtn4.style.opacity = "1"
  }else{
      loopBtn4.src = "media/loop.png";
      loopBtn4.style.opacity = ".5"
  }
}
//Loop OFF to Play
wavesurfer4.on('finish', function(){
  if (loopBtn4.src.includes("loopOn.png")){
    wavesurfer4.playPause();
}else{
    loopBtn4.src = "media/loop.png";
    playBtn4.src = "media/play.png"
}
})

var volumeInput = document.querySelector('#volume4');
var onChangeVolume = function (e) {
  wavesurfer4.setVolume(e.target.value);
  console.log(e.target.value);
};
volumeInput.addEventListener('input', onChangeVolume);
volumeInput.addEventListener('change', onChangeVolume);

// Rename Field Functionality
function editField4() {
let h2 = document.getElementById("renameField4");
let currentText = h2.innerText;
let input = document.createElement("input");

input.type = "text";
input.value = currentText;

//Click into the field
input.onblur = function() {
    h2.innerText = input.value || currentText;
    h2.onclick = editField;  // Re-enable editing
};
// On KeyPress "ENTER"
input.onkeydown = function(event) {
    if (event.key === 'Enter') {
        input.blur();
    }
};
// Blank Field Protection
input.onblur = function() {
  if (input.value.trim() === '') {
  } else {
      h2.innerText = input.value;
      h2.onclick = editField4;  // Re-enable editing
  }
};

h2.innerHTML = '';
h2.appendChild(input);
input.focus();
input.select();
}








//-------------------------------5-------------------------------------//

  const wavesurfer5= WaveSurfer.create({ 
    container: '#waveform5',
    waveColor: '#bdbdbd',
    progressColor: '#5A69FF',
    url: 'media/oceanSailing.mp3',
    barWidth: 3,
    responsive: true,
    barHeight: 5,
    barRadius: 0,
    cursorWidth: 2,
    interact: true,
    getDuration: 1,
  })
  
  wavesurfer5.load('media/oceanSailing.mp3'); // WILL BE USER INPUT

//Play to Pause 5
playBtn5.onclick = function(){
  wavesurfer5.playPause();
  if(playBtn5.src.includes("play.png")){
      playBtn5.src = "media/pause.png";
  }else{
      playBtn5.src = "media/play.png";
  }
}
//Loop OFF to Loop ON
loopBtn5.onclick = function(){    
  if (loopBtn5.src.includes("loop.png")){
      loopBtn5.src = "media/loopOn.png";
      loopBtn5.style.opacity = "1"
  }else{
      loopBtn5.src = "media/loop.png";
      loopBtn5.style.opacity = ".5"
  }
}
//Loop OFF to Play
wavesurfer5.on('finish', function(){
  if (loopBtn5.src.includes("loopOn.png")){
    wavesurfer5.playPause();
}else{
    loopBtn5.src = "media/loop.png";
    playBtn5.src = "media/play.png"
}
})

var volumeInput = document.querySelector('#volume5');
var onChangeVolume = function (e) {
  wavesurfer5.setVolume(e.target.value);
  console.log(e.target.value);
};
volumeInput.addEventListener('input', onChangeVolume);
volumeInput.addEventListener('change', onChangeVolume);

// Rename Field Functionality
function editField5() {
let h2 = document.getElementById("renameField5");
let currentText = h2.innerText;
let input = document.createElement("input");

input.type = "text";
input.value = currentText;

//Click into the field
input.onblur = function() {
    h2.innerText = input.value || currentText;
    h2.onclick = editField;  // Re-enable editing
};
// On KeyPress "ENTER"
input.onkeydown = function(event) {
    if (event.key === 'Enter') {
        input.blur();
    }
};
// Blank Field Protection
input.onblur = function() {
  if (input.value.trim() === '') {
  } else {
      h2.innerText = input.value;
      h2.onclick = editField5;  // Re-enable editing
  }
};

h2.innerHTML = '';
h2.appendChild(input);
input.focus();
input.select();
}








//----------------------------------6----------------------------------//


  const wavesurfer6= WaveSurfer.create({ 
    container: '#waveform6',
    waveColor: '#bdbdbd',
    progressColor: '#5A69FF',
    url: 'media/peacefulMusic.mp3',
    barWidth: 3,
    responsive: true,
    barHeight: 5,
    barRadius: 0,
    cursorWidth: 2,
    interact: true,
    getDuration: 1,
  })
  
  wavesurfer6.load('media/peacefulMusic.mp3'); // WILL BE USER INPUT

//Play to Pause 6
playBtn6.onclick = function(){
  wavesurfer6.playPause();
  if(playBtn6.src.includes("play.png")){
      playBtn6.src = "media/pause.png";
  }else{
      playBtn6.src = "media/play.png";
  }
}
//Loop OFF to Loop ON
loopBtn6.onclick = function(){    
  if (loopBtn6.src.includes("loop.png")){
      loopBtn6.src = "media/loopOn.png";
      loopBtn6.style.opacity = "1"
  }else{
      loopBtn6.src = "media/loop.png";
      loopBtn6.style.opacity = ".5"
  }
}
//Loop OFF to Play
wavesurfer6.on('finish', function(){
  if (loopBtn6.src.includes("loopOn.png")){
    wavesurfer6.playPause();
}else{
    loopBtn6.src = "media/loop.png";
    playBtn6.src = "media/play.png"
}
})

var volumeInput = document.querySelector('#volume6');
var onChangeVolume = function (e) {
  wavesurfer6.setVolume(e.target.value);
  console.log(e.target.value);
};
volumeInput.addEventListener('input', onChangeVolume);
volumeInput.addEventListener('change', onChangeVolume);

// Rename Field Functionality
function editField6() {
let h2 = document.getElementById("renameField6");
let currentText = h2.innerText;
let input = document.createElement("input");

input.type = "text";
input.value = currentText;

//Click into the field
input.onblur = function() {
    h2.innerText = input.value || currentText;
    h2.onclick = editField;  // Re-enable editing
};
// On KeyPress "ENTER"
input.onkeydown = function(event) {
    if (event.key === 'Enter') {
        input.blur();
    }
};
// Blank Field Protection
input.onblur = function() {
  if (input.value.trim() === '') {
  } else {
      h2.innerText = input.value;
      h2.onclick = editField6;  // Re-enable editing
  }
};

h2.innerHTML = '';
h2.appendChild(input);
input.focus();
input.select();
}






//----------------------------- 7 ---------------------------------------//


  const wavesurfer7= WaveSurfer.create({ 
    container: '#waveform7',
    waveColor: '#bdbdbd',
    progressColor: '#5A69FF',
    url: 'media/dungeonMusic.mp3',
    barWidth: 3,
    responsive: true,
    barHeight: 5,
    barRadius: 0,
    cursorWidth: 2,
    interact: true,
    getDuration: 1,
  })
  
  wavesurfer7.load('media/dungeonMusic.mp3'); // WILL BE USER INPUT


//Play to Pause 7
playBtn7.onclick = function(){
  wavesurfer7.playPause();
  if(playBtn7.src.includes("play.png")){
      playBtn7.src = "media/pause.png";
  }else{
      playBtn7.src = "media/play.png";
  }
}
//Loop OFF to Loop ON
loopBtn7.onclick = function(){    
  if (loopBtn7.src.includes("loop.png")){
      loopBtn7.src = "media/loopOn.png";
      loopBtn7.style.opacity = "1"
  }else{
      loopBtn7.src = "media/loop.png";
      loopBtn7.style.opacity = ".5"
  }
}
//Loop OFF to Play
wavesurfer7.on('finish', function(){
  if (loopBtn7.src.includes("loopOn.png")){
    wavesurfer7.playPause();
}else{
    loopBtn7.src = "media/loop.png";
    playBtn7.src = "media/play.png"
}
})

var volumeInput = document.querySelector('#volume7');
var onChangeVolume = function (e) {
  wavesurfer7.setVolume(e.target.value);
  console.log(e.target.value);
};
volumeInput.addEventListener('input', onChangeVolume);
volumeInput.addEventListener('change', onChangeVolume);


// Rename Field Functionality
function editField7() {
let h2 = document.getElementById("renameField7");
let currentText = h2.innerText;
let input = document.createElement("input");

input.type = "text";
input.value = currentText;

//Click into the field
input.onblur = function() {
    h2.innerText = input.value || currentText;
    h2.onclick = editField;  // Re-enable editing
};
// On KeyPress "ENTER"
input.onkeydown = function(event) {
    if (event.key === 'Enter') {
        input.blur();
    }
};
// Blank Field Protection
input.onblur = function() {
  if (input.value.trim() === '') {
  } else {
      h2.innerText = input.value;
      h2.onclick = editField7;  // Re-enable editing
  }
};

h2.innerHTML = '';
h2.appendChild(input);
input.focus();
input.select();
}

//---------------------------------------------------------------------//