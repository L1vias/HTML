/*movendo o botão*/
TrocaTema = () => {
    //alert("mudei o tema e você não viu.")
//     document.querySelector("body").style.background = "pink". //quando eu coloco ele eletroca a propriedade do documento(body)
// 

document.documentElement.classList.toggle("light");
const islight = document.documentElement.classList.contains("light");
const imagem = islight ? "./img/unnamed (1).jpg":"./img/unnamed.jpg";
const alertas = islight ? "Personagem Alegria do filme divertida mente " : "Personagem Medo do filme Divertida mente";

document.querySelector("#perfil img").setAttribute("src", imagem);
document.querySelector("#perfil img").setAttribute("alt", alertas);

document.querySelector("#perfil img").
setAttribute("src",imagem);

};


