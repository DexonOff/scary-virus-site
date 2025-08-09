document.addEventListener("DOMContentLoaded", function () {
    // Полный экран
    document.documentElement.requestFullscreen?.();

    // Музыка
    let audio = new Audio("scary.mp3");
    audio.loop = true;
    audio.volume = 1.0;
    audio.play().catch(() => {});

    // Резкие шумы (шипение, крик)
    setInterval(() => {
        let hiss = new Audio("hiss.mp3");
        hiss.volume = 0.5;
        hiss.play().catch(() => {});
    }, 7000);

    // Дрожание окна
    setInterval(() => {
        window.moveBy(Math.random() * 10 - 5, Math.random() * 10 - 5);
    }, 50);

    // Скримеры — маленькие, но частые
    setInterval(() => {
        let img = document.createElement("img");
        img.src = "screamer.png"; // страшная морда
        img.style.position = "fixed";
        img.style.left = Math.random() * window.innerWidth + "px";
        img.style.top = Math.random() * window.innerHeight + "px";
        img.style.width = "100px";
        img.style.zIndex = "9999";
        document.body.appendChild(img);
        setTimeout(() => img.remove(), 200);
    }, 5000);

    // Вспышки яркости
    setInterval(() => {
        document.body.style.filter = "brightness(300%) contrast(200%)";
        setTimeout(() => {
            document.body.style.filter = "brightness(120%) contrast(200%)";
        }, 100);
    }, 3000);

    // Мигающие глаза
    setInterval(() => {
        let eye = document.createElement("div");
        eye.style.position = "fixed";
        eye.style.left = Math.random() * window.innerWidth + "px";
        eye.style.top = Math.random() * window.innerHeight + "px";
        eye.style.width = "50px";
        eye.style.height = "20px";
        eye.style.background = "radial-gradient(circle, red 30%, transparent 80%)";
        eye.style.borderRadius = "50%";
        eye.style.zIndex = "9999";
        document.body.appendChild(eye);
        setTimeout(() => eye.remove(), 500);
    }, 1500);

    // Быстрый глитч-текст поверх
    let glitch = document.createElement("div");
    glitch.innerText = "YOU ARE BEING WATCHED";
    glitch.style.position = "fixed";
    glitch.style.top = "50%";
    glitch.style.left = "50%";
    glitch.style.transform = "translate(-50%, -50%)";
    glitch.style.fontFamily = "monospace";
    glitch.style.fontSize = "60px";
    glitch.style.color = "white";
    glitch.style.zIndex = "10000";
    document.body.appendChild(glitch);

    setInterval(() => {
        glitch.style.left = 50 + (Math.random() * 20 - 10) + "%";
        glitch.style.top = 50 + (Math.random() * 20 - 10) + "%";
        glitch.style.color = `hsl(${Math.random()*360}, 100%, 50%)`;
    }, 100);

    // Через 15 секунд — фейковый BSOD
    setTimeout(() => {
        let bsod = document.createElement("div");
        bsod.style.position = "fixed";
        bsod.style.top = "0";
        bsod.style.left = "0";
        bsod.style.width = "100vw";
        bsod.style.height = "100vh";
        bsod.style.backgroundColor = "#0000AA";
        bsod.style.color = "white";
        bsod.style.fontSize = "20px";
        bsod.style.fontFamily = "monospace";
        bsod.style.textAlign = "center";
        bsod.style.paddingTop = "20vh";
        bsod.innerHTML = "A problem has been detected and Windows has been shut down...<br><br>ERROR: SYSTEM FAILURE<br><br>Press any key to restart...";
        document.body.appendChild(bsod);
        document.onkeydown = () => location.reload();
    }, 15000);
});
