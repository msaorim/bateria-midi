
function playSound(id) {
    document.querySelector(id).play();
}

const keyList = document.querySelectorAll('.tecla');

for (let i = 0; i < keyList.length; i++) {
    const key = keyList[i];
    const sound = key.classList[1];
    const idSound = `#som_${sound}`;

    key.onclick = () => {
        playSound(idSound);
    }
}
