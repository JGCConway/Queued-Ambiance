function stopAllAudio() {
    wavesurfer.stop();
    wavesurfer2.stop();
    wavesurfer3.stop();
    wavesurfer4.stop();
    wavesurfer5.stop();
    wavesurfer6.stop();
    wavesurfer7.stop();
    wavesurfer8.stop();
    playBtn1.src = "media/play.png";
    playBtn2.src = "media/play.png";
    playBtn3.src = "media/play.png";
    playBtn4.src = "media/play.png";
    playBtn5.src = "media/play.png";
    playBtn6.src = "media/play.png";
    playBtn7.src = "media/play.png";
    playBtn8.src = "media/play.png";
}

document.getElementById('stopAllAudio').addEventListener('click', stopAllAudio);