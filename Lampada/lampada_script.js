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
}

function troca(){
    lamp.src = 'img/desligada.svg'
}