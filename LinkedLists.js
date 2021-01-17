//Prompt-sync
const prompt = require("prompt-sync")();
//

//Class takes in age and highlight

class Node {
  constructor(age, highlight, next = null) {
    this.age = age;
    this.highlight = highlight;
    this.next = next;
  }
}
//Creating a LinkedList

class LinkedList {
  constructor(age, highlight) {
    this.head = new Node(age, highlight);
  }
  //Inserting a Node into the LinkedList
  insertBeginning = (age, highlight) => {
    const newNode = new Node(age, highlight, this.head);
    //Setting node as head of LinkedList
    this.head = newNode;
  };
  //Traverse iterates through the LinkedList
  traverse = () => {
    //Setting LinkedList head to be the current node
    let current = this.head;
    //Outputting the current node
    while (current) {
      console.log(`Age: ${current.age}, Highlight: ${current.highlight}`);
      //Setting LinkedList head to be the next node
      current = current.next;
    }
  };
  insertHighlights = (age) => {
    // Setting LinkedList head to be the current node
    let current = this.head;
    while (current.age < age) {
      //Setting LinkedList head to be the next node
      let currentAge = current.age + 1;
      //Checking if next node exists
      if (current.next && current.next.age === currentAge) {
        //Setting LinkedList head to be the next node
        current = current.next;
        //If next node does not exist
      } else {
        //Prompt user to enter the highlight for the node
        let highlight = prompt(
          `What was the highlight of when you were ${currentAge}?`
        );
        //Create a new node with the currentAge and highlight
        let newNode = new Node(currentAge, highlight, current.next);
        //Setting the new node as the current node
        current.next = newNode;
        current = newNode;
      }
    }
  };
}
//Preset nodes
const ahmed = new LinkedList(7, "I got a toy car for my birthday");
ahmed.insertBeginning(3, "I tried cake for the first time");
ahmed.insertBeginning(1, "I spoke my first word");
//Prompting user to enter their age
const age = prompt("How old are you?");
//Passing the user's age
ahmed.insertHighlights(age);
//Iterating through the LinkedList
ahmed.traverse();
