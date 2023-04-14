function Tabuada() {
    const numero = document.querySelector('input#mult')
    const tabuada = document.querySelector('select#tabuada') 

    if (numero.value.length == 0) {
        alert('Erro, tente com outro número')
    } else{
        const n = Number(numero.value)
        tabuada.innerHTML = ''
        for(let c = 1; c <= 10 ; c++ ){
            const item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tabuada.appendChild(item)
        }
    }
}