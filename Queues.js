//Creating a Node

class Node {
  constructor(groupSize, next = null) {
    this.groupSize = groupSize;
    this.next = next;
  }
}
//Creating a Queue

class Queue {
  constructor(limit = 128) {
    this.front = null;
    this.back = null;
    this.length = 0;
    this.limit = limit;
    this.waitingTime = 0;
  }
  //Checking if the queue is full
  isFull = () => this.length === this.limit;
  //Checking if the queue is empty
  isEmpty = () => this.length === 0;
  //Checking the ride's waiting time
  peek = () =>
    this.isEmpty()
      ? "The queue is empty. There is no waiting time for this ride."
      : this.waitingTime;

  addNewNode = (groupSize) => {
    const newNode = new Node(groupSize);
    if (this.isEmpty()) {
      this.front = newNode;
      this.back = newNode;
    } else {
      this.back.next = newNode;
      this.back = newNode;
    }
    this.length++;
    this.waitingTime += groupSize * 0.5;
  };
  //Adding a group of people to the queue
  enqueue = (groupSize) => {
    //If the queue is full
    if (this.isFull()) {
      console.log(
        `The queue for this ride is full. Come back in ${this.waitingTime} minutes`
      );
    } else {
      //If the queue isn't full
      let numberOfPeople = groupSize;
      //Assign the people to groups
      while (numberOfPeople > groupSize) {
        //Create a new node of 12 people
        this.addNewNode(12);
        //Update the numberOfPeople
        numberOfPeople -= 12;
      }
      //Assing the remaining people into a group
      this.addNewNode(numberOfPeople);
    }
  };
  //Removing a group of people from the queue
  dequeue = () => {
    //If the queue is empty
    if (this.isEmpty()) {
      console.log("The queue for this ride is empty.");
    } else {
      // If the queue isn't empty, remove the first group of people from the queue
      const removed = this.front;
      // If the queue's length is 1, set the front and the back of the queue to null
      if (this.length === 1) {
        this.front = null;
        this.back = null;
      } else {
        //If the queue's length is larger than 1, set the next group of people as the front of the queue
        this.front = removed.next;
      }
      //Decrement the length of the queue
      this.length--;
      //Reduce the waitingTime
      this.waitingTime -= removed.groupSize * 0.5;
      return removed.groupSize;
    }
  };
}

//Creating a new queue
const warnerBros = new Queue(4);
//Checking the wait time before and after adding groups of people to the queue
console.log(warnerBros.peek());
warnerBros.enqueue(5);
warnerBros.enqueue(10);
warnerBros.enqueue(15);
warnerBros.enqueue(20);
console.log(`The waiting time is ${warnerBros.peek()} minutes.`);

//Checking the wait time after removing a group of people from the queue
warnerBros.dequeue();
console.log(`The waiting time is ${warnerBros.peek()} minutes.`);
