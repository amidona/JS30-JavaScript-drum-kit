window.addEventListener("keydown", function (e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    //console.log(audio);
    //console.log(key);
    if (!audio) return; //stops the function running
    audio.currentTime = 0; //rewind to the start so you can hit it multiple times without waiting for the whole clip to play
    audio.play();
    key.classList.add("playing");
});

function removeTransition(e) {
    if (e.propertyName !== "transform") return;
    this.classList.remove("playing")
}

const keys = document.querySelectorAll(".key"); //array of all the keys
keys.forEach(key => key.addEventListener("transitionend", removeTransition));