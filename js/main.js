let currentNum = []
// NUMERIC BUTTONS BELOW
let resultEl = document.querySelector('#result')
const NINE = {
    value: 9,
    domEl: document.querySelector('#nine'),
    handleClick: function(event){
        resultEl.textContent += NINE.value
        currentNum.push(NINE.value)
    },
    setListener: function(){this.domEl.addEventListener('click',this.handleClick)},

}
const EIGHT = {
    value: 8,
    domEl: document.querySelector('#eight'),
    handleClick: function(event){
        resultEl.textContent += EIGHT.value
        currentNum.push(EIGHT.value)
    },
    setListener: function(){this.domEl.addEventListener('click',this.handleClick)},

}
const SEVEN = {
    value: 7,
    domEl: document.querySelector('#seven'),
    handleClick: function(event){
        resultEl.textContent += SEVEN.value
        currentNum.push(SEVEN.value)
    },
    setListener: function(){this.domEl.addEventListener('click',this.handleClick)},

}
const SIX = {
    value: 6,
    domEl: document.querySelector('#six'),
    handleClick: function(event){
        resultEl.textContent += SIX.value
        currentNum.push(SIX.value)
    },
    setListener: function(){this.domEl.addEventListener('click',this.handleClick)},

}
const FIVE = {
    value: 5,
    domEl: document.querySelector('#five'),
    handleClick: function(event){
        resultEl.textContent += FIVE.value
        currentNum.push(FIVE.value)
    },
    setListener: function(){this.domEl.addEventListener('click',this.handleClick)},

}
const FOUR = {
    value: 4,
    domEl: document.querySelector('#four'),
    handleClick: function(event){
        resultEl.textContent += FOUR.value
        currentNum.push(FOUR.value)
    },
    setListener: function(){this.domEl.addEventListener('click',this.handleClick)},

}
const THREE = {
    value: 3,
    domEl: document.querySelector('#three'),
    handleClick: function(event){
        resultEl.textContent += THREE.value
        currentNum.push(THREE.value)
    },
    setListener: function(){this.domEl.addEventListener('click',this.handleClick)},

}
const TWO = {
    value: 2,
    domEl: document.querySelector('#two'),
    handleClick: function(event){
        resultEl.textContent += TWO.value
        currentNum.push(TWO.value)
    },
    setListener: function(){this.domEl.addEventListener('click',this.handleClick)},

}
const ONE = {
    value: 1,
    domEl: document.querySelector('#one'),
    handleClick: function(event){
        resultEl.textContent += ONE.value
        currentNum.push(ONE.value)
    },
    setListener: function(){this.domEl.addEventListener('click',this.handleClick)},

}
const ZERO = {
    value: 0,
    domEl: document.querySelector('#zero'),
    handleClick: function(event){
        resultEl.textContent += ZERO.value
        currentNum.push(ZERO.value)
    },
    setListener: function(){this.domEl.addEventListener('click',this.handleClick)},

}
const DECIMAL = {
    value: '.',
    domEl: document.querySelector('#decimal'),
    handleClick: function(event){
        resultEl.textContent += DECIMAL.value;
        currentNum.push(DECIMAL.value)
    },
    setListener: function(){this.domEl.addEventListener('click',this.handleClick)}
}
// NUMERIC BUTTONS ABOVE
// NON NUMERIC BUTTONS BELOW -- NOT OPERATORS
const AC = {
    value: 'AC',
    domEl: document.querySelector('#ac'),
    handleClick: function(event){
        resultEl.textContent = ''
        return currentNum = [];
        
    },
    setListener: function(){this.domEl.addEventListener('click',this.handleClick)}
}
const LEFT_PAREN = {
    value: '(',
    domEl: document.querySelector('#left-paren'),
    handleClick: function(event){
        resultEl.textContent += LEFT_PAREN.value,
        currentNum.push(LEFT_PAREN.value)
        
    },
    setListener: function(){this.domEl.addEventListener('click',this.handleClick)}
}
const RIGHT_PAREN = {
    value: ')',
    domEl: document.querySelector('#right-paren'),
    handleClick: function(event){
        resultEl.textContent += RIGHT_PAREN.value,
        currentNum.push(RIGHT_PAREN.value)
        
    },
    setListener: function(){this.domEl.addEventListener('click',this.handleClick)}
}


// NON NUMERIC BUTTONS ABOVE
// OPERATOR BUTTONS BELOW
const ADD = {
    value: ' + ',
    domEl: document.querySelector('#add'),
    handleClick: function(event){
        if(!checkForOperator()){
            resultEl.textContent += ADD.value
            currentNum.push(ADD.value)
        }else{
            return;
        }
    },
    setListener: function(){this.domEl.addEventListener('click',this.handleClick)}
}
const SUBTRACT = {
    value: ' - ',
    domEl: document.querySelector('#subtract'),
    handleClick: function(event){
        if(!checkForOperator()){
            resultEl.textContent += SUBTRACT.value
            currentNum.push(SUBTRACT.value)
        }else{
            return;
        }
    },
    setListener: function(){this.domEl.addEventListener('click',this.handleClick)}
}
const MULTIPLY = {
    value: ' x ',
    domEl: document.querySelector('#multiply'),
    handleClick: function(event){
        if(!checkForOperator()){
            resultEl.textContent += MULTIPLY.value
            currentNum.push('*')
        }else{
            return;
        }
    },
    setListener: function(){this.domEl.addEventListener('click',this.handleClick)}
}
const DIVIDE = {
    value: ' / ',
    domEl: document.querySelector('#divide'),
    handleClick: function(event){
        if(!checkForOperator()){
            resultEl.textContent += DIVIDE.value
            currentNum.push(DIVIDE.value)
        }else{
            return;
        }
    },
    setListener: function(){this.domEl.addEventListener('click',this.handleClick)}
}
const MODULUS = {
    value: ' % ',
    domEl: document.querySelector('#modulus'),
    handleClick: function(event){
        if(!checkForOperator()){
            resultEl.textContent += MODULUS.value
            currentNum.push(MODULUS.value)
        }else{
            return;
        }
    },
    setListener: function(){this.domEl.addEventListener('click',this.handleClick)}
}
const EQUALS = {
    value: '=',
    domEl: document.querySelector('#equals'),
    handleClick: function(event){
        let getOps = currentNum.join('')
        getOps = eval(getOps)
        resultEl.textContent = getOps
    },
    setListener: function(){this.domEl.addEventListener('click',this.handleClick)}
}
// OPERATOR BUTTONS ABOVE
function prepCurrentNum(){
    currentNum = parseInt(currentNum.join(''))
    console.log(currentNum)
}
function checkForOperator(){
    if(resultEl.textContent === "" ||currentNum[currentNum.length-1] === ' x '|| currentNum[currentNum.length-1] === ' + '||currentNum[currentNum.length-1] === ' - '||currentNum[currentNum.length-1] === ' % '|| currentNum[currentNum.length-1] === ' / '){
        
        return true;
    }else{
    
        return false;
    }
}
function render(){
    resultEl.textContent = "";
    NINE.setListener();
    EIGHT.setListener();
    SEVEN.setListener();
    SIX.setListener();
    FIVE.setListener();
    FOUR.setListener();
    THREE.setListener();
    TWO.setListener();
    ONE.setListener();
    ZERO.setListener();
    AC.setListener();
    DECIMAL.setListener();
    ADD.setListener();
    SUBTRACT.setListener();
    MULTIPLY.setListener();
    DIVIDE.setListener();
    MODULUS.setListener();
    LEFT_PAREN.setListener();
    RIGHT_PAREN.setListener();
    EQUALS.setListener();
}
render();



