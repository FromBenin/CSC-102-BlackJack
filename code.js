// Function to get a random card from the deck
function getCard() {
    const cards = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']; // Array of card values
    return cards[Math.floor(Math.random() * cards.length)]; // Return a random card
}

// Function to calculate the total value of a hand
function calculateHand(hand) {
    let sum = 0; // Initialize sum of hand
    let aceCount = 0; // Initialize count of Aces

    // Loop through each card in the hand
    hand.forEach(card => {
        if (card === 'J' || card === 'Q' || card === 'K') {
            sum += 10; // Face cards are worth 10 points
        } else if (card === 'A') {
            sum += 11; // Aces are worth 11 points initially
            aceCount += 1; // Increment Ace count
        } else {
            sum += parseInt(card); // Number cards are worth their value
        }
    });

    // Adjust for Aces if sum is greater than 21
    while (sum > 21 && aceCount > 0) {
        sum -= 10; // Subtract 10 for each Ace
        aceCount -= 1; // Decrement Ace count
    }

    return sum; // Return the total value of the hand
}

// Function to play a game of BlackJack
function playBlackJack() {
    let playerHand = [getCard(), getCard()]; // Get two cards for the player
    let dealerHand = [getCard(), getCard()]; // Get two cards for the dealer

    let playerSum = calculateHand(playerHand); // Calculate player's hand value
    let dealerSum = calculateHand(dealerHand); // Calculate dealer's hand value

    // Display player's hand
    document.getElementById('player-hand').textContent = 'Player Hand: ' + playerHand.join(', ');
    // Display dealer's hand
    document.getElementById('dealer-hand').textContent = 'Dealer Hand: ' + dealerHand.join(', ');

    let result = ''; // Initialize result message

    // Determine the result of the game
    if (playerSum > 21) {
        result = 'Player busts! Dealer wins!'; // Player busts
    } else if (dealerSum > 21) {
        result = 'Dealer busts! Player wins!'; // Dealer busts
    } else if (playerSum > dealerSum) {
        result = 'Player wins!'; // Player has higher point
    } else if (dealerSum > playerSum) {
        result = 'Dealer wins!'; // Dealer has higher point
    } else {
        result = 'It\'s a tie!'; // Points are equal
    }

    // Display the result of the game
    document.getElementById('result').textContent = result;
    // Show the play again button
    document.getElementById('play-again-button').style.display = 'block';
}

// Function to reset the game and play again
function playAgain() {
    document.getElementById('play-again-button').style.display = 'none'; // Hide the play again button
    document.getElementById('player-hand').textContent = ''; // Clear player's hand display
    document.getElementById('dealer-hand').textContent = ''; // Clear dealer's hand display
    document.getElementById('result').textContent = ''; // Clear result display
}
