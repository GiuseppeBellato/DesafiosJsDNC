
function taboada(){
    var num = window.document.getElementById('num')
    var end = window.document.getElementById('end')
    if (num.value.length == 0 || end.value.length == 0) {
        var res = window.document.getElementById('resposta')
        res.innerHTML = 'ATENÇÃO, CONFIRA SEUS DADOS!! <br>'
        res.style.color = 'red'
    } else {
        var n = Number(num.value)
        var e = Number(end.value)
        var x = 0
        var r = ''
        var res = window.document.getElementById('resposta')
        res.style.color = 'black'

       //Resolver questão de apagar o alerta

        res.innerHTML += `A taboada do ${n} até o ${e} é: <br>`
        do {
            r = n*x
            res.innerHTML += ` ${n} X ${x} = ${r} <br>`
            x++
        } while(x <= e)
    }
}

function resetar(){
    window.document.getElementById('resposta').innerHTML = `Preencha os valores acima.`
}