class TreeNode {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild = (node) => {
    this.children.push(node);
  };

  traverse = () => {
    let nodes = [this];
    while (nodes.length > 0) {
      let current = nodes.pop();
      console.log(current.name);
      let currentFullName = current.name.split(" ");
      let currentLastName = currentFullName[currentFullName.length - 1];
      console.log(currentLastName);
      console.log(this.children);
      // if (this.children.includes(currentLastName) && this.children.length < 3) {
      //   nodes = [...nodes, ...current.children];
      // }
    }
  };
}

const root = new TreeNode("Ned Stark");
const child1 = new TreeNode("Robb Stark");
const child2 = new TreeNode("Sansa Stark");
const child3 = new TreeNode("Arya Stark");

root.addChild(child1);
root.addChild(child2);
root.addChild(child3);

root.traverse();
