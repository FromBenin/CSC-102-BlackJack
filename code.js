function getCard() {
    const cards = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    return cards[Math.floor(Math.random() * cards.length)];
}

function calculateHand(hand) {
    let sum = 0;
    let aceCount = 0;

    hand.forEach(card => {
        if (card === 'J' || card === 'Q' || card === 'K') {
            sum += 10;
        } else if (card === 'A') {
            sum += 11;
            aceCount += 1;
        } else {
            sum += parseInt(card);
        }
    });

    while (sum > 21 && aceCount > 0) {
        sum -= 10;
        aceCount -= 1;
    }

    return sum;
}

function playBlackJack() {
    let playerHand = [getCard(), getCard()];
    let dealerHand = [getCard(), getCard()];

    let playerSum = calculateHand(playerHand);
    let dealerSum = calculateHand(dealerHand);

    document.getElementById('player-hand').textContent = 'Player Hand: ' + playerHand.join(', ');
    document.getElementById('dealer-hand').textContent = 'Dealer Hand: ' + dealerHand.join(', ');

    let result = '';

    if (playerSum > 21) {
        result = 'Player busts! Dealer wins!';
    } else if (dealerSum > 21) {
        result = 'Dealer busts! Player wins!';
    } else if (playerSum > dealerSum) {
        result = 'Player wins!';
    } else if (dealerSum > playerSum) {
        result = 'Dealer wins!';
    } else {
        result = 'It\'s a tie!';
    }

    document.getElementById('result').textContent = result;
    document.getElementById('play-again-button').style.display = 'block';
}

function playAgain() {
    document.getElementById('play-again-button').style.display = 'none';
    document.getElementById('player-hand').textContent = '';
    document.getElementById('dealer-hand').textContent = '';
    document.getElementById('result').textContent = '';
}