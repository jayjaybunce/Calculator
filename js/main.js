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
// NUMERIC BUTTONS ABOVE
// NON NUMERIC BUTTONS BELOW -- NOT OPERATORS

// NON NUMERIC BUTTONS ABOVE

function prepCurrentNum(){
    currentNum = parseInt(currentNum.join(''))
    console.log(currentNum)
}
function render(){
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
}
render();



