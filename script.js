// Wave Surfer Customization and file load
const wavesurfer = WaveSurfer.create({
    container: '#waveform',
    waveColor: '#bdbdbd',
    progressColor: '#5A69FF',
    url: 'media/Rain-Sound-effect.mp3',
    barWidth: 4,
    responsive: true,
    barHeight: 4,
    barRadius: 4,
    cursorWidth: 4,
    interact: true,
    getDuration: 1,
  })
  
  wavesurfer.load('media/Rain-Sound-effect.mp3'); // WILL BE USER INPUT

//-------------------------------------------------------------//

// Wave Surfer Play, Pause, and Loop functionality

//Play to Pause
  playBtn.onclick = function(){
    wavesurfer.playPause();
    if(playBtn.src.includes("play.png")){
        playBtn.src = "media/pause.png";
    }else{
        playBtn.src = "media/play.png";
    }
  }
//Loop OFF to Loop ON
  loopBtn.onclick = function(){    
    if (loopBtn.src.includes("loop.png")){
        loopBtn.src = "media/loopOn.png";
        loopBtn.style.opacity = "1"
    }else{
        loopBtn.src = "media/loop.png";
        loopBtn.style.opacity = ".5"
    }
  }
//Loop OFF to Play
  wavesurfer.on('finish', function(){
    if (loopBtn.src.includes("loopOn.png")){
      wavesurfer.playPause();
  }else{
      loopBtn.src = "media/loop.png";
      playBtn.src = "media/play.png"
  }
  })

//-------------------------------------------------------------//

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