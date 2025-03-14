// function play(){
//     const homeSection = document.getElementById('home-screen') ;
//     homeSection.classList.add('hidden') ;
//     // show the playground
//     const playGround = document.getElementById('play-ground') ;
//     playGround.classList.remove('hidden') ;
// }


function handleKeyboardKeyUpEvent(event){
    //console.log(event.key);
    const playerPressed = event.key ;
    console.log( 'player pressed', playerPressed) ;
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText ;
    const expectedAlphabet = currentAlphabet.toLocaleLowerCase() ;
    console.log(playerPressed , expectedAlphabet);
    let c=1 ;
    if(playerPressed===expectedAlphabet){
        console.log('u got a point');
        const currentScore = getTextElementValueById('current-score') ;
        const updatedScore = currentScore + 1 ;

        setTextElementValueById('current-score', updatedScore) ;
        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText ;
        // const currentScore = parseInt(currentScoreText) ;

        // const newScore = currentScore + 1 ;
        // currentScoreElement.innerText = newScore ;


        removeBackgroundColorById(expectedAlphabet) ;
        continueGame() ;

        
    }
    else{
        console.log('u lost a life');
        const currentLife = getTextElementValueById('current-life') ;
        const updatedLife = currentLife - 1 ;

        setTextElementValueById('current-life', updatedLife) ;

        if(updatedLife===0){
            gameOver() ;
        }
        

        // const currentLifeElement = document.getElementById('current-life') ;
        // const currentLifeText = currentLifeElement.innerText ;
        // const currentLife = parseInt(currentLifeText) ;

        // const newLife = currentLife - 1 ;
        // currentLifeElement.innerText = newLife ;
        
    }
    

    
}




document.addEventListener('keyup', handleKeyboardKeyUpEvent);

function continueGame(){
    const alphabet = getARandomAlphabet() ;
    console.log('your random alphabet', alphabet);

    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;
    
    setBackgroundColorById(alphabet) ;
    


}

function play(){
    hideElementById('home-screen') ;
    hideElementById('final-score') ;
    showElementById('play-ground');
    continueGame() ;

    setTextElementValueById('current-life',5) ;
    setTextElementValueById('current-score',0)

}
function gameOver(){
    hideElementById('play-ground') ;
    showElementById('final-score') ;

    const lastScore = getTextElementValueById('current-score');
    console.log(lastScore);
    setTextElementValueById('last-score', lastScore);

    
    const currentAlphabet = getElementTextById('current-alphabet');
    
    removeBackgroundColorById(currentAlphabet);

}