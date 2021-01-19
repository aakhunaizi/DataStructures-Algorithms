//Prompt-sync
const prompt = require("prompt-sync")();

//Tree
class TreeNode {
  constructor(name) {
    this.name = name;
    this.children = [];
  }
  //Adding a child to the tree
  addChild = (node) => {
    if (this.children.length < 2) {
      this.children.push(node);
      console.log(`Added ${node.name} as a child of ${this.name}`);
    } else console.log("Child is an orphan.");
  };

  //Checking children

  getChildWithName = (name) => {
    return this.children.find((child) => child.name === name);
  };

  //Traversing through the tree
  traverse = () => {
    let nodes = [this];
    while (nodes.length > 0) {
      let current = nodes.pop();
      console.log(current.name);
      nodes = [...nodes, ...current.children];
    }
  };
}

//Setting the root of the tree as the family name
const root = new TreeNode("Stark");

//Prompting the user to enter a child's full name
let fullName = prompt(`Enter the child's full name (type 'done' to exit): `);

while (fullName !== "done") {
  let current = root;

  let names = fullName.split(" ").reverse();
  let firstName = names.pop();
  let lastName = names.shift();

  //To check if the child is a part of the family
  if (lastName === current.name) {
    //Checking if there are names in the middle
    if (names) {
      for (let name of names) {
        let child = current.getChildWithName(name);
        if (child) {
          current = child;
        } else {
          console.log("Person does not exist");
        }
      }
    }
    //Add the child to the family
    const newNode = new TreeNode(firstName);
    current.addChild(newNode);
  }
  console.log("--------------------------------------------------");
  fullName = prompt(`Enter the child's full name (type 'done' to exit): `);
}

root.traverse();
