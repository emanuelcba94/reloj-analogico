const overlay = document.querySelector('.overlay');
const clock = document.querySelector('.clock');
const switchOn = document.querySelector('.on-switch');
const switchOff = document.querySelector('.off-switch');

switchOn.addEventListener('click', () =>{
    overlay.classList.remove('active');
    clock.classList.remove('active');
})

switchOff.addEventListener('click', () =>{
    overlay.classList.add('active');
    clock.classList.add('active');
})


function showClock() {
    let h = document.getElementsByClassName('hr')[0];
    let m = document.getElementsByClassName('mn')[0];
    let s = document.getElementsByClassName('ss')[0];

    let date = new Date();

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    h.style.transform = `rotate(${30 * hours + minutes}deg)`
    m.style.transform = `rotate(${6 * minutes}deg)`
    s.style.transform = `rotate(${6 * seconds}deg)`
}

setInterval(showClock, 1000);


