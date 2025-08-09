<script>
document.addEventListener("DOMContentLoaded", function () {
    // 🌕 Сразу вход в полноэкранный режим
    function goFullScreen() {
        if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen();
        } else if (document.documentElement.webkitRequestFullscreen) {
            document.documentElement.webkitRequestFullscreen();
        } else if (document.documentElement.mozRequestFullScreen) {
            document.documentElement.mozRequestFullScreen();
        }
    }

    // 🎵 Страшная музыка
    function playScaryMusic() {
        let audio = new Audio("scary.mp3"); // Файл — тёмная музыка
        audio.loop = true;
        audio.volume = 1.0;
        audio.play().catch(() => console.log("Автовоспроизведение заблокировано"));
    }

    // 💢 Дрожание окна
    function shakeScreen() {
        setInterval(() => {
            window.moveBy(Math.random() * 8 - 4, Math.random() * 8 - 4);
        }, 50);
    }

    // 🔦 Вспышки красного
    function redFlashes() {
        setInterval(() => {
            document.body.style.backgroundColor = "red";
            setTimeout(() => {
                document.body.style.backgroundColor = "";
            }, 100);
        }, 3000);
    }

    // 🌀 Искажения экрана
    function glitchEffect() {
        document.body.style.transition = "filter 0.1s";
        setInterval(() => {
            document.body.style.filter = `contrast(${100 + Math.random()*50}%) hue-rotate(${Math.random()*360}deg)`;
        }, 100);
    }

    // 👀 Красные глаза
    function spawnEyes() {
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
            setTimeout(() => eye.remove(), 1000);
        }, 1500);
    }

    // 🐍 Ползущий глитч-текст
    function glitchText() {
        let glitch = document.createElement("div");
        glitch.innerText = "YOU CAN'T ESCAPE";
        glitch.style.position = "fixed";
        glitch.style.top = "50%";
        glitch.style.left = "50%";
        glitch.style.transform = "translate(-50%, -50%)";
        glitch.style.fontFamily = "monospace";
        glitch.style.fontSize = "40px";
        glitch.style.color = "white";
        glitch.style.zIndex = "10000";
        document.body.appendChild(glitch);
        setInterval(() => {
            glitch.style.left = 50 + (Math.random() * 10 - 5) + "%";
            glitch.style.top = 50 + (Math.random() * 10 - 5) + "%";
        }, 100);
    }

    // 🚫 Предупреждение при закрытии
    window.onbeforeunload = () => "Ты уверен, что хочешь уйти?";

    // 🔵 Фейковый BSOD
    function fakeBSOD() {
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
        }, 10000);
    }

    // 🚀 Запуск всех эффектов
    goFullScreen();
    playScaryMusic();
    shakeScreen();
    redFlashes();
    glitchEffect();
    spawnEyes();
    glitchText();
    fakeBSOD();
});
</script>
