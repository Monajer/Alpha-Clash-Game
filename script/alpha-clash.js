function handleKbdBtnPress(event) {
    const playerPressedKey = event.key

    //* stop the game if pressed 'Esc'
    if(playerPressedKey === 'Escape'){
        gameOver();
    }

    //* Get the Expected press
    const currentAlphabetElement = document.getElementById('current-alphabet')
    const currentAlphabet = currentAlphabetElement.innerText.toLowerCase()

    //* Check matched or not
    if (playerPressedKey === currentAlphabet) {

        //* get Score functionality from utility.js file
        const currentScore = getTextElementById('current-score')
        const updatedScore = currentScore + 1
        setTextElementById('current-score', updatedScore)

        removeBackgroundColor(currentAlphabet)
        continuePlay()
    }
    else {
        //* get life functionality from utility.js file
        const currentLife = getTextElementById('current-life')
        const updatedLife = currentLife - 1
        setTextElementById('current-life', updatedLife)
        if (updatedLife === 0) {

            gameOver()
        }
    }
}
//* Capture Keyboard key Press 
document.addEventListener('keyup', handleKbdBtnPress)
 
function continuePlay() {
    //* Generate a Random Alphabet 
    const alphabet = getRandomAlphabet()
    
    //* Display the Generated Alphabet to the Screen
    const currentAlphabetElement = document.getElementById('current-alphabet')
    currentAlphabetElement.innerText = alphabet

    //* Set Background Color to the kbd
    setBackgroundColor(alphabet)
}

function startNewGame() {
    //* hide every thing show only the playground
    hideElementById('home')
    hideElementById('final-score-screen')
    showElementById('play-ground')

    //* reset score and life
    setTextElementById('current-life', 5)
    setTextElementById('current-score', 0)
    
    continuePlay()
}

function gameOver() {
    hideElementById('play-ground')
    showElementById('final-score-screen')

    //* Update final score
    //* get the final score
    const finalScore = getTextElementById('current-score')
    setTextElementById('final-score', finalScore)

    //* clear the last selected alphabet highlight
    const currentAlphabet = getElementTextById('current-alphabet');
    //* console.log(currentAlphabet);
    removeBackgroundColor(currentAlphabet);
}