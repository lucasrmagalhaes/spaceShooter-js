const yourShip = document.querySelector('.player-shooter');
const playArea = document.querySelector('#main-play-game');

// Movimento e tiro da nave.
function flyShip(event) {

    if(event.key === 'ArrowUp') {
        event.preventDefault();
        moveUp();
    } else if (event.key === 'ArrowDown') {
        event.preventDefault();
        moveDown();
    } else if (event.key === " ") {
        event.preventDefault();
        fireLaser();
    }
    
}

// Função de subir.
function moveUp() {

    let topPosition = getComputedStyle(yourShip).getPropertyValue('top');
    
    if(topPosition === "0px") {
        return
    } else {
        let position = parseInt(topPosition);
        position -= 50;
        yourShip.style.top = `${position}px`;
    }

}