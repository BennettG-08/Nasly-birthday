const startBtn = document.getElementById("startBtn");
const giftBtn = document.getElementById("giftBtn");
const welcome = document.getElementById("welcome");
const letter = document.getElementById("letter");
const typing = document.getElementById("typing");
const fireworks = document.getElementById("fireworks");

const message = `🎉 ¡Feliz cumpleaños, Nasly! 💜

Hoy quise prepararte este pequeño detalle con mucho cariño.

Tal vez no sea un regalo que puedas sostener con las manos, pero espero que te saque una sonrisa y te recuerde lo especial que eres.

Deseo que este nuevo año de vida esté lleno de felicidad, salud, éxitos, aventuras y muchos momentos inolvidables.

Nunca dejes de creer en ti, sigue luchando por tus sueños y disfruta cada instante.

Gracias por tu amistad.

🎂 ¡Que pases un cumpleaños maravilloso!

Con mucho cariño,

— Tu parcerito Bennett 💜`;

startBtn.addEventListener("click", () => {

    welcome.classList.add("hidden");
    letter.classList.remove("hidden");

    typing.textContent = "";

    let i = 0;

    const escribir = setInterval(() => {

        typing.textContent += message.charAt(i);
        i++;

        if (i >= message.length) {
            clearInterval(escribir);
        }

    }, 35);

});

giftBtn.addEventListener("click", () => {

    giftBtn.innerHTML = "💜 ¡Feliz Cumpleaños, Nasly! 💜";

    for (let i = 0; i < 120; i++) {

        const heart = document.createElement("div");

        heart.innerHTML = "💜";

        heart.style.position = "fixed";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.top = "-30px";
        heart.style.fontSize = (20 + Math.random() * 30) + "px";
        heart.style.transition = "4s linear";
        heart.style.pointerEvents = "none";

        fireworks.appendChild(heart);

        setTimeout(() => {
            heart.style.top = "110vh";
        }, 50);

        setTimeout(() => {
            heart.remove();
        }, 4000);

    }

    alert("🎉 Espero que este pequeño detalle te haya sacado una sonrisa. ¡Feliz cumpleaños, Nasly! 💜");

});
