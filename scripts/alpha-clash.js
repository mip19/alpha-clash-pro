// function play(){
//     const homeSection = document.getElementById('home-screen') ;
//     homeSection.classList.add('hidden') ;
//     // show the playground
//     const playGround = document.getElementById('play-ground') ;
//     playGround.classList.remove('hidden') ;
// }

function continueGame(){
    const alphabet = getARandomAlphabet() ;
    console.log('your random alphabet', alphabet);

}

function play(){
    hideElementById('home-screen') ;
    showElementById('play-ground');
    continueGame()
}