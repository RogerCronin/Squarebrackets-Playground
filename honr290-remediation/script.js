function playAudio(elementId) {
    const audio = document.getElementById(elementId)
    if(audio.paused) {
        audio.play()
    } else {
        audio.pause()
    }
}