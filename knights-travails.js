// Pseudocode

// Show the shortest possible way to get from one square to another by outputting all squares the knight will stop on along the way.
// [x, y] are coordinates between 0, 7.
// Use a queue.
// Track visited positions.
// From every square, multiple moves are possible.
// Use search algorithm to find the shortest path between the starting square (or node) and the ending square.
// Each square = a node
// Each legal knight move = an edge

function knightsMoves(start, end) {
  let queue = [start];
  let visited = new Set();
  let possibleMoves = [
    [2, 1],
    [1, 2],
    [-2, -1],
    [-1, -2],
    [-2, 1],
    [2, -1],
    [-1, 2],
    [1, -2]
  ];
}
