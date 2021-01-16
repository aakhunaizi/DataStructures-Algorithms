//Creating a Node

class Node {
  constructor(card, number, next = null) {
    this.card = card;
    this.number = number;
    this.next = next;
  }
  firstCard = () => `${this.card}(${this.number})`;
}

//Creating a Stack

class Stack {
  constructor(limit = 20) {
    this.top = null;
    this.length = 0;
    this.limit = limit;
  }
  //Checking if Stack is full
  isFull = () => this.length === this.limit;
  //Checking if Stack is empty
  isEmpty = () => this.length === 0;
  //Checking first card in stack
  peek = () => {
    if (this.isEmpty()) {
      console.log("Oh no! The deck is empty.");
    } else {
      return this.top.firstCard();
    }
  };

  push = (color, number) => {
    if (this.isFull()) {
      console.log("Oops! The deck is full.");
    } else {
      const newNode = new Node(color, number, this.top);
      this.top = newNode;
      this.length++;
    }
  };

  pop = () => {
    if (this.isEmpty()) {
      console.log("Oh no! The deck is empty.");
    } else {
      const popped = this.top;
      this.top = popped.next;
      this.length--;
      return popped.firstCard();
    }
  };

  createDeck = () => {
    let deckCounter = 0;
    while (deckCounter < this.limit) {
      this.push(random(colors), random(numbers));
      deckCounter++;
    }
  };
}

const colors = ["red", "blue", "green", "yellow"];
const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

const random = (array) => {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};
//Creating new stack
let deck = new Stack();

//Filling deck with 20 random cards
deck.createDeck();
//Printing deck
// console.log(deck);

//Assigning 5 cards to player1

let playerOne = new Stack(5);
let counterOne = 0;
if (playerOne.isEmpty() && !playerOne.isFull()) {
  console.log(` -------------------------
  Player 1: \n -------------------------
  `);
  while (counterOne < playerOne.limit) {
    let card = deck.pop();
    playerOne.push(card);
    console.log(`${counterOne + 1}- ${card}`);
    counterOne++;
  }
  console.log(
    `\n ---------------------------------------- \n There are ${deck.length} cards remaining in the deck \n ---------------------------------------- \n`
  );
}

//Assigning 5 cards to player2

let playerTwo = new Stack(5);
let playerTwoCounter = 0;
if (playerTwo.isEmpty() && !playerTwo.isFull()) {
  console.log(` -------------------------
  Player 2: \n -------------------------
  `);
  while (playerTwoCounter < playerTwo.limit) {
    let card2 = deck.pop();
    console.log(`${playerTwoCounter + 1}- ${card2}`);
    playerTwoCounter++;
  }
  console.log(
    `\n ---------------------------------------- \n There are ${deck.length} cards remaining in the deck \n ---------------------------------------- \n`
  );
}

//Printing out first card in deck
console.log(`----------------------------------------
The first card in the deck is ${deck.peek()} \n----------------------------------------
`);
