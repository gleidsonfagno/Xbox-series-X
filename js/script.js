const dropDown = document.querySelectorAll(".drop_dow")
const perguntas = document.querySelectorAll(".container");

for (i = 0; i < perguntas.length; i++) {
    perguntas[i].addEventListener("click", function () {
        this.classList.toggle("visible");
        // console.log(pergunta[i])
    });

    dropDown.forEach((drop) => {
        drop.addEventListener("click", () => {
            drop.classList.toggle("cliked");
        });
    })
}

AOS.init();
