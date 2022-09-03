let num1 = 0
let num2 = 0
let score1 = document.getElementById("score-1")
let score2= document.getElementById("score-2")

function add1(){
    num1 += 1
    score1.textContent = num1
    
}
function add2(){
    num1 += 2
    score1.textContent = num1
    
}
function add3(){
    num1 += 3
    score1.textContent = num1
    
}

function adds1(){
    num2 += 1
    score2.textContent = num2
    
}
function adds2(){
    num2 += 2
    score2.textContent = num2
    
}
function adds3(){
    num2 += 3
    score2.textContent = num2
    
}
function reset(){
   score1.textContent = 0
   score2.textContent = 0
   num1 = 0
   num2 = 0 
}