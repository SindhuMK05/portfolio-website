// Typing Effect
const text = "Full Stack Developer | Java Enthusiast | Hackathon Participant";
let index = 0;

function type() {
    if (index < text.length) {
        document.querySelector(".typing").innerHTML += text.charAt(index);
        index++;
        setTimeout(type, 60);
    }
}
type();

// Fade-in on Scroll
const faders = document.querySelectorAll(".fade-in");

window.addEventListener("scroll", () => {
    faders.forEach(fade => {
        const rect = fade.getBoundingClientRect().top;
        if (rect < window.innerHeight - 100) {
            fade.classList.add("show");
        }
    });
});