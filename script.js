const btn = document.getElementById('cal')
let resc = document.getElementById('resc')
let resf = document.getElementById('resf')
const notificacao = document.getElementById('notificacao')

btn.addEventListener("click", function () {
    var c = document.getElementById('celsius')
    var f = document.getElementById('fahrenheit')

    var valuec = c.value
    var valuef = f.value


    if (valuec == '') {
        resc.style.color = 'rgb(252, 0, 0)'
        resc.innerHTML = 'Digite algo para que seja calculado!'
    } else {
        if (valuec <= 10000) {
            let calculoc = valuec / 5 * 9 + 32
            resc.style.color = 'rgb(220, 224, 10)'
            resc.innerHTML = `${valuec} ºC é igual a ${calculoc} ºF`
        } else {
            notificacao.style.display = 'block'
        }

        if (valuef == '') {
            resf.style.color = 'rgb(252, 0, 0)'
            resf.innerHTML = 'Digite algo para que seja calculado!'

        } else {
            if (valuef <= 10000) {
                let calculof = valuef - 32 
                let numeroInt = parseInt(calculof.toFixed(2))
                resf.innerHTML = `${valuef} ºF é igual a ${numeroInt / 9 * 5} ºC `
                resf.style.color = 'rgb(220, 224, 10)'
            } else {
                
            }
        }
        
    }
    
})

const close = document.getElementById('fechar')

close.addEventListener("click", function() {
        notificacao.style.display = 'none'
})



