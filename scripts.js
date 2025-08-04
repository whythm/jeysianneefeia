let imagem = document.querySelector(".copo")
let fundo = document.querySelector(".circulo")

function imgSwitch(img){
    imagem.src = `img/img${img}.png`
}

function bgSwitch(bg){
    fundo.style.background = bg
}
