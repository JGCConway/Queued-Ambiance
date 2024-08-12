const userFile = document.getElementById


const wavesurfer = WaveSurfer.create({
    container: '#waveform',
    waveColor: '#4F4A85',
    progressColor: '#383351',
    url: '/audio.mp3',
  })
  
  wavesurfer.load('media/Rain - Sound effect.mp3');