// Function to get a random card from the deck
function getCard() {
    const cards = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    return cards[Math.floor(Math.random() * cards.length)];
}

// Function to calculate the total value of a hand
function calculateHand(hand) {
    let sum = 0;
    let aceCount = 0;

    // Loop through each card in the hand
    hand.forEach(card => {
        if (card === 'J' || card === 'Q' || card === 'K') {
            sum += 10; // Face cards are worth 10 points
        } else if (card === 'A') {
            sum += 11; // Aces are initially worth 11 points
            aceCount += 1;
        } else {
            sum += parseInt(card); // Number cards are worth their face value
        }
    });

    // Adjust for aces if the total value exceeds 21
    while (sum > 21 && aceCount > 0) {
        sum -= 10;
        aceCount -= 1;
    }

    return sum;
}

// Function to play a round of Blackjack
function playBlackJack() {
    let playerHand = [getCard(), getCard()]; // Player's initial hand
    let dealerHand = [getCard(), getCard()]; // Dealer's initial hand

    let playerSum = calculateHand(playerHand); // Calculate player's hand value
    let dealerSum = calculateHand(dealerHand); // Calculate dealer's hand value

    // Display player's and dealer's hands
    document.getElementById('player-hand').textContent = 'Player Hand: ' + playerHand.join(', ');
    document.getElementById('dealer-hand').textContent = 'Dealer Hand: ' + dealerHand.join(', ');

    let result = '';

    // Determine the result of the game
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

    // Display the result and show the play again button
    document.getElementById('result').textContent = result;
    document.getElementById('play-again-button').style.display = 'block';
}

// Function to reset the game and play again
function playAgain() {
    document.getElementById('play-again-button').style.display = 'none';
    document.getElementById('player-hand').textContent = '';
    document.getElementById('dealer-hand').textContent = '';
    document.getElementById('result').textContent = '';
}
