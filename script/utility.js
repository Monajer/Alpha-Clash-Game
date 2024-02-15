function hideElementById(elementId) {
    const hide = document.getElementById(elementId)
    hide.classList.add('hidden')    
}

function showElementById(elementId) {
    const show = document.getElementById(elementId)
    show.classList.remove('hidden')
}

function setBackgroundColor(elementId) {
    const element = document.getElementById(elementId)
    element.classList.add('bg-orange-400')
}

function removeBackgroundColor(elementId) {
    const element = document.getElementById(elementId)
    element.classList.remove('bg-orange-400')
}

function getTextElementById(elementId) {
    const element = document.getElementById(elementId).innerText
    const currentScore = parseInt(element)
    return currentScore
}

function setTextElementById(elementId, value) {
    const element = document.getElementById(elementId)
     element.innerText = value
}

function getElementTextById(elementId){
    const element = document.getElementById(elementId);
    const text = element.innerText;
    return text;
}

function getRandomAlphabet() {
    //* Get or Create a Alphabets Array
    const alphabetsStr = 'abcdefghijklmnopqrstuvwxyz/'
    const alphabets = alphabetsStr.split('')

    //* Get a Random Number 0 to 25
    const generateRandomNumber = Math.random() * 25
    const randomNumber = Math.round(generateRandomNumber)
    const alphabet = alphabets[randomNumber]
    return alphabet
}