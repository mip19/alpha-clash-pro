function hideElementById(elementId) {
    const element= document.getElementById(elementId) ;
    element.classList.add('hidden') ;
}

function showElementById(elementId){
    const element= document.getElementById(elementId) ;
    element.classList.remove('hidden') ;
}

function setBackgroundColorById(elementId){
    const element = document.getElementById(elementId) ;
    element.classList.add('bg-orange-400') ;
}

function removeBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}

function getTextElementValueById(elementId){
    const element = document.getElementById(elementId) ;
    const elementValaueText = element.innerText ;
    const value = parseInt(elementValaueText) ;
    return value ;
}

function setTextElementValueById(elementId, value){
    const element = document.getElementById(elementId) ;
    element.innerText = value ;
}
function setTextElementValueById(elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}

function getARandomAlphabet(){
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('') ;

    const randomNumber = Math.random()*25 ;
    const index = Math.round(randomNumber) ; 

    const alphabet = alphabets[index] ;

    return alphabet ;
}