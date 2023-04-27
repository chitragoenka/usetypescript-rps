//Converting my Rock Paper Scissors .js into .ts 

// Define the hands array
const hands: string[] = ['rock', 'paper', 'scissors'];

// Define the getHand function
function getHand(): string {
    const randomIndex: number = Math.floor(Math.random() * hands.length);
    return hands[randomIndex];
  }
  
// Replaced the below function to ensure that .ts does not have any errors.
// function getHand() {
// return hands[parseInt(Math.random() * 10) % 3];
// }
  

// Define the player objects
const player1 = {
  name: 'Player 1',
  getHand: getHand
};

const player2 = {
  name: 'Player 2',
  getHand: getHand
};

// Define the playRound function
function playRound(player1: { name: string; getHand: () => string; }, player2: { name: string; getHand: () => string; }): {name: string} | null {
    const player1Hand: string = player1.getHand();
    const player2Hand: string = player2.getHand();

    let winner: {name: string} | null = null;

  if (player1Hand === player2Hand) {
    console.log(`${player1.name} played ${player1Hand}, ${player2.name} played ${player2Hand}. It's a tie.`);
  } else if (player1Hand === 'rock' && player2Hand === 'scissors' ||
             player1Hand === 'paper' && player2Hand === 'rock' ||
             player1Hand === 'scissors' && player2Hand === 'paper') {
    winner = player1;
    console.log(`${player1.name} played ${player1Hand}, ${player2.name} played ${player2Hand}. ${player1.name} wins!`);
  } else {
    winner = player2;
    console.log(`${player1.name} played ${player1Hand}, ${player2.name} played ${player2Hand}. ${player2.name} wins!`);
  }

  return winner;
}

// Test the playRound function
const winner: {name: string} | null = playRound(player1, player2);
console.log(winner);
