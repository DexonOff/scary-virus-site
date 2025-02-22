document.addEventListener("DOMContentLoaded", function () {
    // 🌕 Вход в полноэкранный режим
    function goFullScreen() {
        if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen();
        } else if (document.documentElement.mozRequestFullScreen) {
            document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullscreen) {
            document.documentElement.webkitRequestFullscreen();
        } else if (document.documentElement.msRequestFullscreen) {
            document.documentElement.msRequestFullscreen();
        }
    }

    // 🔊 Воспроизведение звука ошибки
    function playErrorSound() {
        let audio = new Audio("error.mp3");
        audio.volume = 1.0;
        audio.play().catch(() => {
            console.log("Автовоспроизведение заблокировано");
        });
    }

    // 🖱️ Курсор начинает дрожать
    function shakeCursor() {
        setInterval(() => {
            window.moveBy(Math.random() * 10 - 5, Math.random() * 10 - 5);
        }, 50);
    }

    // 🚫 Предупреждение при закрытии
    window.onbeforeunload = function () {
        return "Ты уверен, что хочешь уйти?";
    };

    // 🔵 Фейковый BSOD через 5 секунд
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
            bsod.innerHTML = "A problem has been detected and Windows has been shut down to prevent damage to your computer.<br><br>ERROR: SYSTEM FAILURE<br><br>Press any key to restart...";
            document.body.appendChild(bsod);

            // Блокируем клавиши (Esc не работает в браузере)
            document.onkeydown = function () {
                location.reload();
            };
        }, 5000);
    }

    // Запуск функций
    goFullScreen();
    playErrorSound();
    shakeCursor();
    fakeBSOD();
});
