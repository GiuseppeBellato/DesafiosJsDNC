var lamp = window.document.getElementById('lampada')

function estaQuebrada(){
    return lamp.src.indexOf('quebrada') > -1
}

function ligar(){
    if (!estaQuebrada()){
        lamp.src = 'img/ligada.svg'
    }
}

function desligar(){
    if (!estaQuebrada()){
        lamp.src = 'img/desligada.svg'
    }
}

function quebrar(){
    lamp.src = 'img/quebrada.svg'
    window.document.getElementById('troca').style.background = ' rgb(12, 112, 242)'
    window.document.getElementById('troca').style.cursor = 'pointer'
}

function troca(){ 
    if(estaQuebrada()){
        lamp.src = 'img/desligada.svg'
        window.document.getElementById('troca').style.background = 'rgba(12, 112, 242, 0.329)'
        window.document.getElementById('troca').style.cursor = 'default'
    }
}