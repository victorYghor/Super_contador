




function carregar(){
    var pt = document.getElementById('Partida').value 
    var cg = document.getElementById('Chegada').value
    var ps = document.getElementById('Passo').value
    var sd = document.getElementById('saída')
    if( pt=='' || cg == ''){
        window.alert('Por favor digite um valor')
    }else{
        if (ps==0) {
        window.alert('Como o passo é 0 não é possível fazer a contagem \n O passo será considerado 1')
        ps = 1
    } else if (pt == cg) {
        window.alert('A Partida e Chegada não podem ser idênticos')
    } else {
        ptn = Number(pt)
        cgn = Number(cg)
        psn = Number(ps)
        var count = ptn 
        sd.innerHTML = ptn
        sd.innerHTML += '&#x1f449' 
        while (count < cgn-1 ) {
            count += psn
            
            sd.innerText += count 
            sd.innerHTML += '&#x1f449'
            
        }
        sd.innerHTML += '&#x1f3c1'

    
    } }

    
    
    
    
}