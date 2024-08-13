

const playBtn = document.getElementById("playBtn");

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
  
  wavesurfer.load('media/Rain-Sound-effect.mp3');

  playBtn.onclick = function(){
    wavesurfer.playPause();
    if(playBtn.src.includes("play.png")){
        playBtn.src = "media/pause.png";
    }else{
        playBtn.src = "media/play.png";
    }
  }

  loopBtn.onclick = function(){    
    if (loopBtn.src.includes("loop.png")){
        loopBtn.src = "media/loopOn.png";
        loopBtn.style.opacity = "1"
    }else{
        loopBtn.src = "media/loop.png";
        loopBtn.style.opacity = ".5"
    }
  }

  wavesurfer.on('finish', function(){
    if (loopBtn.src.includes("loopOn.png")){
      wavesurfer.playPause();
  }else{
      loopBtn.src = "media/loop.png";
      playBtn.src = "media/play.png"
  }
  })

  var volumeInput = document.querySelector('#volume');
  var onChangeVolume = function (e) {
    wavesurfer.setVolume(e.target.value);
    console.log(e.target.value);
  };
volumeInput.addEventListener('input', onChangeVolume);
volumeInput.addEventListener('change', onChangeVolume);