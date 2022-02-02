let time = 1499
let minEl = document.getElementById('min');
let secEl = document.getElementById('sec');

const updateTime = () => {
    const min = Math.floor(time / 60)
    let sec = Math.floor(time % 60)
    minEl.innerHTML = min < 10 ? `0${min < 0 ? 0 : min}` : min
    secEl.innerHTML = sec < 10 ? `0${sec < 0 ? 0 : sec}` : sec

    if (min >= 0) {
        time--
    }
}

setInterval(updateTime, 1000)


