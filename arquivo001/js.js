let bloco1 = document.getElementById('bloco-1')
let bloco2 = document.getElementById('bloco-2')

bloco1.addEventListener('click', clicar)
bloco2.addEventListener('click', clicar)
bloco1.addEventListener('mouseenter', emcima)
bloco2.addEventListener('mouseenter', emcima)

function clicar(event){
    event.target.classList.toggle('mudar-cor')
}