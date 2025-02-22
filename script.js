document.documentElement.requestFullscreen(); // Фуллскрин

let errorSound = new Audio("error.mp3");
errorSound.play(); // Включаем звук ошибки

window.addEventListener("beforeunload", (event) => {
    event.preventDefault();
    event.returnValue = "";
});

setInterval(() => { // Дрожащий курсор
    window.moveBy(Math.random() * 10 - 5, Math.random() * 10 - 5);
}, 50);

setTimeout(() => { // Фейковый BSOD через 5 секунд
    document.body.innerHTML = "";
    document.body.style.backgroundColor = "blue";
    let bsod = document.createElement("div");
    bsod.innerHTML = "<h1 style='color:white; font-size:40px;'>A problem has been detected and Windows has been shut down to prevent damage.</h1>";
    document.body.appendChild(bsod);
}, 5000);
