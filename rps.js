//Converting my Rock Paper Scissors .js into .ts 
// Define the hands array
var hands = ['rock', 'paper', 'scissors'];
// Define the getHand function
function getHand() {
    var randomIndex = Math.floor(Math.random() * hands.length);
    return hands[randomIndex];
}
// Replaced the below function to ensure that .ts does not have any errors.
// function getHand() {
// return hands[parseInt(Math.random() * 10) % 3];
// }
// Define the player objects
var player1 = {
    name: 'Player 1',
    getHand: getHand
};
var player2 = {
    name: 'Player 2',
    getHand: getHand
};
// Define the playRound function
function playRound(player1, player2) {
    var player1Hand = player1.getHand();
    var player2Hand = player2.getHand();
    var winner = null;
    if (player1Hand === player2Hand) {
        console.log("".concat(player1.name, " played ").concat(player1Hand, ", ").concat(player2.name, " played ").concat(player2Hand, ". It's a tie."));
    }
    else if (player1Hand === 'rock' && player2Hand === 'scissors' ||
        player1Hand === 'paper' && player2Hand === 'rock' ||
        player1Hand === 'scissors' && player2Hand === 'paper') {
        winner = player1;
        console.log("".concat(player1.name, " played ").concat(player1Hand, ", ").concat(player2.name, " played ").concat(player2Hand, ". ").concat(player1.name, " wins!"));
    }
    else {
        winner = player2;
        console.log("".concat(player1.name, " played ").concat(player1Hand, ", ").concat(player2.name, " played ").concat(player2Hand, ". ").concat(player2.name, " wins!"));
    }
    return winner;
}
// Test the playRound function
var winner = playRound(player1, player2);
console.log(winner);
