function Node (data) {
  this.data = data;
  this.children = [];
  this.lowestCostToLeaf = null;
}

let Honda = new Node(0);
let l25 = new Node(5);
let l23 = new Node(3);
let l26 = new Node(6);
Honda.children = [l25, l23, l26];

let l34 = new Node(4);
let l32 = new Node(2);
let l30 = new Node(0);
let l31 = new Node(1);
let l35 = new Node(5);

l25.children = [l34];
l23.children = [l32, l30];
l26.children = [l31, l35];

let l41 = new Node(1);
let l310 = new Node(10);

l32.children = [l41];
l30.children = [l310];

let l510 = new Node(10);

l41.children = [l510];



console.log(getCheapestCost(Honda));

function getCheapestCost(root, accumulatedCost = 0) {
  //base cases
 if (!root) return null;
 if(root.lowestCostToLeaf) return root.lowestCostToLeaf;
  //recursive
  let lowestCostToLeaf = accumulatedCost + root.data;
  if(root.children.length > 0) {
    lowestCostToLeaf += Math.min(
      ...root.children.map(
        child => getCheapestCost(child, accumulatedCost)
      ));
  }
  root.lowestCostToLeaf = lowestCostToLeaf;
  return lowestCostToLeaf;
}



