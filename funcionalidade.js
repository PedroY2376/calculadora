const teclasNum = [...document.querySelectorAll('.num')]
const teclasOp =  [...document.querySelectorAll('.op')]
const teclaRes = document.querySelector('.res')
const display = document.querySelector('#display')

const copy = document.querySelector('#tcopy')
const limpar = document.querySelector('#tlimpar')
const virgula = document.querySelector('.virgula')
const teclaIgual = document.querySelector('.res')

const teste = document.querySelector('#teste')

let sinal = false
let sinal_virgual = false

virgula.addEventListener('click', (evt)=>{
    if(sinal_virgual == false){
        sinal_virgual = true
        display.innerHTML += evt.target.innerHTML       
    }
    
})

teclasNum.map((el)=>{
    el.addEventListener('click', (evt)=>{
        sinal = false
        if(display.innerHTML == 0){
            display.innerHTML = ''
        }

        display.innerHTML += evt.target.textContent

    })
})

teclasOp.map((el)=>{
    el.addEventListener('click', (evt)=>{
        if(sinal == false){
            sinal = true
            
            if(display.innerHTML == '0'){
                display.innerHTML = ''
            }
            
            if(evt.target.innerHTML == 'x'){
                display.innerHTML += '*'
            }else{
                display.innerHTML += evt.target.textContent
            }
        }
        
    })
})

limpar.addEventListener('click', ()=>{
    sinal = false
    sinal_virgual = false
    display.innerHTML = 0
})

teclaIgual.addEventListener('click', ()=>{
    sinal = false
    sinal_virgual = false

    const res = eval(display.textContent)      //pega uma string e analisa se é matematicamente possível resolver - se for ela
    display.innerHTML = res                 // calcula o resultado
})

copy.addEventListener('click', ()=>{
    display.select()
    navigator.clipboard.writeText(display.innerHTML)
})

const calc = document.querySelector('.calc')
const abaX = document.querySelector('#calc_aba')
abaX.addEventListener('click',()=>{
    calc.classList.toggle('calc_principal_exibir')
    if(calc.classList.contains('calc_principal_exibir')){
        abaX.innerHTML = '<'
    }else{
        abaX.innerHTML = '>'
    }
})

