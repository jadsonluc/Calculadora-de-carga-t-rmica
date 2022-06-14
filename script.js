function calcular() {
var area = document.getElementById('area')
var solar = document.getElementsByName('radsolar')
/*var par = document.getElementById('parcialmente')
var ausencia = document.getElementById('ausencia')*/
var pessoas = document.getElementById('pessoas')
var tv = document.getElementById('tv')
var pc = document.getElementById('pc')
var luz = document.getElementById('luz')
var outros = document.getElementById('outros')
var janela = document.getElementById('janela')
var res = document.getElementById('res')
//var totarea = Number(area.value)*800

if (area.value.length == 0 || area.value <= 0 ){
    window.alert('Preencha o campo ÁREA com dados válidos e tente novamente!')
} else if (pessoas.value < 0 ){
    window.alert('Preencha o campo PESSOAS com dados válidos e tente novamente.')
} else if (tv.value < 0){
    window.alert('Preencha o campo TELEVISORES com dados válidos e tente novamente.')
} else if (pc.value < 0 ){
    window.alert('Preencha o campo COMPUTADORES com dados válidos e tente novamente.')
} else if (luz.value < 0){
    window.alert('Preencha o campo LUZES com dados válidos e tente novamente.')
} else if(outros.value < 0){
    window.alert('Preencha o campo OUTROS com dados válidos e tente novamente.')
}else if (janela.value < 0 ){
    window.alert('Preencha o campo JANELAS com dados válidos e tente novamente.')
} else {
    if (solar[0].checked){
        var totarea = Number(area.value)*800
        var totpessoas = Number(pessoas.value)*600
        var tottv = Number(tv.value)*600
        var totpc = Number(pc.value)*600
        var totluz = Number(luz.value)*300
        var totoutros = Number(outros.value)*600
        var totjanela = Number(janela.value)*600
        var total = totarea + totpessoas + tottv + totpc + totluz + totoutros + totjanela
        if (total<=7000){
            res.innerHTML = `O ar condicionado deverá possuir 7000BTUs`
        } else if (total > 7000 && total <= 9000){
            res.innerHTML = `O ar condiocionado ideal deverá possuir 9000BTUs`
        } else if (total > 9000 && total<=12000){
            res.innerHTML = 'O ar condicionado ideal deverá possuir 12000BTUs'
        } else if (total > 12000 && total <=18000){
            res.innerHTML = 'O ar condicionado ideal devará possuir 18000BTUs'
        } else if (total > 18000 && total <= 24000){
            res.innerHTML = 'O ar condiciondo ideal deverá possuir 24000BTUs'
        } else if (total > 24000 && total <= 27000){
            res.innerHTML = 'O ar condicionado ideal deverá possuir 27000BTUs'
        } else if (total > 27000 && total <= 30000){
            res.innerHTML = 'O ar condicionado ideal deverá possuir 30000BTUs'
        } else if (total > 30000 && total <= 36000){
            res.innerHTML = 'O ar condicionado ideal deverá possuir 36000BTUs'
        } else if (total > 36000 && total <= 48000){
            res.innerHTML = 'O ar condicionado ideal deverá possuir 48000BTUs'
        } else if (total > 48000 && total <= 64000){
            res.innerHTML = 'O ar condicionado ideal deverá possuir 64000BTUs'
        } else if (total > 64000){
            res.innerHTML = 'Capacidade de refrigeração acima de 64000 BTUs! Contate um técnico em Refrigeração e Climatização qualificado ou click no link entre em contato conosco através de whatsapp para projeto especializado'
        }
        //res.innerHTML= `O ar condicionado ideal deverá possuir ${total}Btus`
    } else if (solar[1].checked){
        var totarea = Number(area.value)*600
        var totpessoas = Number(pessoas.value)*600
        var tottv = Number(tv.value)*600
        var totpc = Number(pc.value)*600
        var totluz = Number(luz.value)*300
        var totoutros = Number(outros.value)*600
        var totjanela = Number(janela.value)*600
        var total = totarea + totpessoas + tottv + totpc + totluz + totoutros + totjanela
        if (total<=7000){
            res.innerHTML = `O ar condicionado deverá possuir 7000BTUs`
        } else if (total > 7000 && total <= 9000){
            res.innerHTML = `O ar condiocionado ideal deverá possuir 9000BTUs`
        } else if (total > 9000 && total<=12000){
            res.innerHTML = 'O ar condicionado ideal deverá possuir 12000BTUs'
        } else if (total > 12000 && total <=18000){
            res.innerHTML = 'O ar condicionado ideal devará possuir 18000BTUs'
        } else if (total > 18000 && total <= 24000){
            res.innerHTML = 'O ar condiciondo ideal deverá possuir 24000BTUs'
        } else if (total > 24000 && total <= 27000){
            res.innerHTML = 'O ar condicionado ideal deverá possuir 27000BTUs'
        } else if (total > 27000 && total <= 30000){
            res.innerHTML = 'O ar condicionado ideal deverá possuir 30000BTUs'
        } else if (total > 30000 && total <= 36000){
            res.innerHTML = 'O ar condicionado ideal deverá possuir 36000BTUs'
        } else if (total > 36000 && total <= 48000){
            res.innerHTML = 'O ar condicionado ideal deverá possuir 48000BTUs'
        } else if (total > 48000 && total <= 64000){
            res.innerHTML = 'O ar condicionado ideal deverá possuir 64000BTUs'
        } else if (total > 64000){
            res.innerHTML = 'Capacidade de refrigeração acima de 64000 BTUs! Contate um técnico em Refrigeração e Climatização qualificado ou click no link entre em contato conosco através de whatsapp para projeto especializado'
        }
       // res.innerHTML = `O ar condiconado ideal deverá possuir ${total} BTUs`
} else if (solar[2].checked){
        var totarea = Number(area.value)*400
        var totpessoas = Number(pessoas.value)*600
        var tottv = Number(tv.value)*600
        var totpc = Number(pc.value)*600
        var totluz = Number(luz.value)*300
        var totoutros = Number(outros.value)*600
        var totjanela = Number(janela.value)*600
        var total = totarea + totpessoas + tottv + totpc + totluz + totoutros + totjanela
        if (total<=7000){
            res.innerHTML = `O ar condicionado deverá possuir 7000BTUs`
        } else if (total > 7000 && total <= 9000){
            res.innerHTML = `O ar condiocionado ideal deverá possuir 9000BTUs`
        } else if (total > 9000 && total<=12000){
            res.innerHTML = 'O ar condicionado ideal deverá possuir 12000BTUs'
        } else if (total > 12000 && total <=18000){
            res.innerHTML = 'O ar condicionado ideal devará possuir 18000BTUs'
        } else if (total > 18000 && total <= 24000){
            res.innerHTML = 'O ar condiciondo ideal deverá possuir 24000BTUs'
        } else if (total > 24000 && total <= 27000){
            res.innerHTML = 'O ar condicionado ideal deverá possuir 27000BTUs'
        } else if (total > 27000 && total <= 30000){
            res.innerHTML = 'O ar condicionado ideal deverá possuir 30000BTUs'
        } else if (total > 30000 && total <= 36000){
            res.innerHTML = 'O ar condicionado ideal deverá possuir 36000BTUs'
        } else if (total > 36000 && total <= 48000){
            res.innerHTML = 'O ar condicionado ideal deverá possuir 48000BTUs'
        } else if (total > 48000 && total <= 64000){
            res.innerHTML = 'O ar condicionado ideal deverá possuir 64000BTUs'
        } else if (total > 64000){
            res.innerHTML = 'Capacidade de refrigeração acima de 64000 BTUs! Contate um técnico em Refrigeração e Climatização qualificado ou click no link entre em contato conosco através de whatsapp para projeto especializado'
        }
        //res.innerHTML = `O ar condicionado ideal deverá possuir ${total} BTUs`
} 
}
}
function reset() {
    res.innerHTML = ''
    area.value = ''
    pessoas.value = ''
    tv.value = ''
    pc.value = ''
    luz.value = ''
    outros.value = ''
    janela.value = ''
}