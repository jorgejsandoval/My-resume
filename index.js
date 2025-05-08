//ScrollReveal().reveal('#headline');

const observador = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.remove('hidden');
            entry.target.classList.add('visible');
            observador.unobserve(entry.target);
        }
        // observador.unobserve(entry.target);
    });
});


const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observador.observe(el));

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }
// window.addEventListener("scroll", () => {
//     document.querySelectorAll(".hidden").forEach(el => observador.observe(el));
// });

const sonido = new Audio("bonk.mp3");
function bonk() {
    sonido.play();
}

