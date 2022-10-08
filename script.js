//Deixa responsivo para mobile

document.addEventListener('keydown',jump);
var dino = document.querySelector('.dinossauro')
var obstaculo = document.querySelector('.obstaculo')

var fundo = document.querySelector('.fundo')
var fundo2 = document.querySelector('.fundo2')

var divpular = document.querySelector('.divpular')



//pontuacao
var pontuacao = 0
var tempodepontuacao = setInterval(pontuacaotempo,70)

var record = document.querySelector('.record')
var maior = 0
//Escolha da plataforma 

var mobile = 0

var plataforma = document.querySelector('.plataforma')

function clickteclado() {
    plataforma.style.display='none' 
    fundo.style.display='block'
    fundonone = fundo.style.display='block'
}

function clickmobile() {
    plataforma.style.display='none' 
    fundo.style.display='block'
    fundonone = fundo.style.display='block'
    divpular.style.display='block'
    mobile++
}

//Se for escolhido mobile
function jumpmobile() {
    if(mobile == 1) {
        jump()
    }
}


function jump() {
    dino.classList.add('jump');

    setTimeout(remover,500) 
}

function remover() {
    dino.classList.remove('jump')
}

const loop = setInterval(verificar,10)

function restart() {
    fundo.style.display='block'
    fundo2.style.display='none'

    
    obstaculo.style.webkitAnimationPlayState='running'
    obstaculo.style.left= ''

    dino.style.webkitAnimationPlayState='running'
    dino.style.bottom=''
    dino.style.background='black'

    tempodepontuacao = setInterval(pontuacaotempo,70)
}

var ponto = document.querySelector('.pontuacao')

function pontuacaotempo() {
    pontuacao++
    ponto.innerHTML = pontuacao
}

function verificar() {
    
    var positionObstaculo = obstaculo.offsetLeft
    var positionDino = +window.getComputedStyle(dino).bottom.replace('px','');

    
    if(positionObstaculo <= 110 && positionObstaculo > 0&& positionDino < 100 && (mobile == 0)) {
        obstaculo.style.webkitAnimationPlayState='paused'
        obstaculo.style.left= positionObstaculo+'px'

        dino.style.webkitAnimationPlayState='paused'
        dino.style.background='red'
        dino.style.bottom=positionDino+'px'

        //parar de pontuar
        clearInterval(tempodepontuacao)

        //pegar o valor a pontuacao
    
        if(maior < pontuacao) {
            var maiordetodas = record.innerHTML=pontuacao
            maior = maiordetodas
        }
        pontuacao = 0

        setTimeout(jogoacabou,500)

        function jogoacabou() {
            fundo.style.display='none'
            fundo2.style.display='block'
        }
    }else if(positionObstaculo <= 70 && positionObstaculo > 0&& positionDino < 70 && (mobile == 1)) {
        obstaculo.style.webkitAnimationPlayState='paused'
        obstaculo.style.left= positionObstaculo+'px'

        dino.style.webkitAnimationPlayState='paused'
        dino.style.background='red'
        dino.style.bottom=positionDino+'px'

        //parar de pontuar
        clearInterval(tempodepontuacao)

        //pegar o valor a pontuacao
    
        if(maior < pontuacao) {
            var maiordetodas = record.innerHTML=pontuacao
            maior = maiordetodas
        }
        pontuacao = 0

        setTimeout(jogoacabou,500)

        function jogoacabou() {
            fundo.style.display='none'
            fundo2.style.display='block'
        }
    }

}

