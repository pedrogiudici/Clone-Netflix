document.querySelector('#play').addEventListener('click', function(){
    window.open('https://www.youtube.com/watch?v=esOMdVTJISE')
})


document.querySelector('#maisinformacoes').addEventListener('click', janela)
document.querySelectorAll('.item').forEach(item => {
    item.addEventListener('click', janela)
})


document.querySelector('#voltar').addEventListener('click', voltar)
document.querySelector('#camada').addEventListener('click', voltar)



function janela(){
    document.querySelector('#janelafilme').style.display = 'block'
    document.querySelector('body').style.overflow = 'hidden'
    document.querySelector('#camada').style.display = 'block'
}


function voltar(){
    document.querySelector('#janelafilme').style.display = 'none'
    document.querySelector('body').style.overflow = 'auto'
    document.querySelector('#camada').style.display = 'none'
}