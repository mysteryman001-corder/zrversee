window.addEventListener("load", () => {
    const music = document.getElementById("bgMusic");
    music.muted = false;
    music.play().catch(err => console.log(err));
});

// 🎵 MUSIC FIX
const music = document.getElementById("bgMusic");

window.addEventListener("load", () => {
    music.play().catch(() => {
        document.body.addEventListener("click", () => {
            music.play();
        }, { once: true });
    });
});

// 💖 FLOATING HEARTS
setInterval(() => {
    let h = document.createElement("div");
    h.classList.add("heart");
    h.innerHTML = "❤️";
    h.style.left = Math.random() * 100 + "vw";
    h.style.fontSize = Math.random() * 20 + 10 + "px";
    document.body.appendChild(h);
    setTimeout(() => h.remove(), 6000);
}, 500);

// 🐼 elements
const panda = document.querySelector(".panda");
const input = document.getElementById("wishInput");
const btn = document.getElementById("sendBtn");
const res = document.getElementById("wishResponse");

// 🐼 normal focus reaction (no eyes effect)
input.addEventListener("focus", () => {
    panda.innerHTML = "🐼";
});

input.addEventListener("blur", () => {
    panda.innerHTML = "🐼";
});

// 💌 SEND WISH
function sendWish(){

    if(input.value.trim()==""){
        alert("Type your wish here! 💖");
        return;
    }

    input.classList.add("fade-out");
    btn.classList.add("fade-out");

    setTimeout(() => {

        input.style.display = "none";
        btn.style.display = "none";

        res.style.opacity = "1";
        res.innerHTML = "💖 Got it, Zephyric 😘";

        // 😘 panda kiss
        panda.innerHTML = "😘";

        launchConfetti();
        spawnButterflies();

    }, 500);
}

// 🎉 CONFETTI
function launchConfetti(){
    for(let i=0;i<40;i++){
        let c = document.createElement("div");
        c.innerHTML = "✨";
        c.style.position = "absolute";
        c.style.left = Math.random() * 100 + "vw";
        c.style.top = "0px";
        c.style.fontSize = "20px";
        document.body.appendChild(c);
        setTimeout(() => c.remove(), 2000);
    }
}

// 🦋 BUTTERFLY EFFECT
function spawnButterflies(){
    for(let i=0;i<10;i++){
        let b = document.createElement("div");
        b.innerHTML = "🦋";
        b.style.position = "absolute";
        b.style.left = Math.random() * 100 + "vw";
        b.style.top = "60%";
        b.style.fontSize = "18px";
        b.style.animation = "floatUp 3s linear forwards";
        document.body.appendChild(b);
        setTimeout(() => b.remove(), 3000);
    }
}