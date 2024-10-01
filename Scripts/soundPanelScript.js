// Wave Surfer Customization and file load
const wavesurfer = WaveSurfer.create({ // WILL BE USER INPUT
    container: '#waveform',
    waveColor: '#bdbdbd',
    progressColor: '#5A69FF',
    url: 'media/Rain-Sound-effect.mp3',
    barWidth: 3,
    responsive: true,
    barHeight: 5,
    barRadius: 0,
    cursorWidth: 2,
    interact: true,
    getDuration: 1,
  })
  
wavesurfer.load('media/Rain-Sound-effect.mp3'); 

//Play to Pause 1
playBtn1.onclick = function(){
  wavesurfer.playPause();
  if(playBtn1.src.includes("play.png")){
      playBtn1.src = "media/pause.png";
  }else{
      playBtn1.src = "media/play.png";
  }
}
//Loop OFF to Loop ON
loopBtn1.onclick = function(){    
  if (loopBtn1.src.includes("loop.png")){
      loopBtn1.src = "media/loopOn.png";
      loopBtn1.style.opacity = "1"
  }else{
      loopBtn1.src = "media/loop.png";
      loopBtn1.style.opacity = ".5"
  }
}
//Loop OFF to Play
wavesurfer.on('finish', function(){
  if (loopBtn1.src.includes("loopOn.png")){
    wavesurfer.playPause();
}else{
    loopBtn1.src = "media/loop.png";
    playBtn1.src = "media/play.png"
}
})

// Wave Surfer Volume -- WIP to customize the slider
var volumeInput = document.querySelector('#volume');
var onChangeVolume = function (e) {
  wavesurfer.setVolume(e.target.value);
  console.log(e.target.value);
};
volumeInput.addEventListener('input', onChangeVolume);
volumeInput.addEventListener('change', onChangeVolume);

//-------------------------------------------------------------//

// Rename Field Functionality
function editField() {
let h2 = document.getElementById("renameField");
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
      h2.onclick = editField;  // Re-enable editing
  }
};

h2.innerHTML = '';
h2.appendChild(input);
input.focus();
input.select();
}

//-------------------------------------------------------------//