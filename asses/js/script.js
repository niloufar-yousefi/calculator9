let num1 = 0
let num2 = 0
let flag = 0
let flag2 = 0
let _inp = document.getElementById('_inp')
let result = document.getElementById('result')
let demo = document.getElementById('demo')
let op = ''

// oparation + - * /
function myCalc(s) {
    
    op = s.innerText
    if (flag == 0) {
        num1 = Number(_inp.value)
        flag++
        _inp.value = ''
    } else{
        num1 = Number(result.innerHTML)
        num2 = Number(_inp.value)
    }
}
// oparation =
function finall(){  
    if (flag == 1) {
        num2 = Number(_inp.value)
        _inp.value = ''
        _op()
    } else {
        _op()
        _inp.value = ''
    }   
}

// number btn 1 2 3 ...
function down(s) {
    _inp.value+= s.textContent
}

// choose the opration
function _op(){
    switch (op) {
        case '+':
            result.innerHTML = num1 + num2;
            break;
        case '-':
            result.innerHTML = num1 - num2;
            break;
        case '*':
            result.innerHTML = num1 * num2;
            break;
        case '/':
            result.innerHTML = num1 / num2;
            break;
    }
}

function reset() {
    _inp.value = ''
    num1 = 0
    num2 = 0
    flag = 0
    result.innerHTML = ''
    demo.innerText = ''
}

// demo show 
function dem(s) {
    if (flag2 == 0) {
         demo.innerText += s.innerText
    } else if (flag2 == 1) {
        demo.innerText = result.innerHTML + s.innerText
        flag2++
    } else {
         demo.innerText += s.innerText
    }
}

function dem2() {
    // demo.innerText = ''
    flag2 = 1
}