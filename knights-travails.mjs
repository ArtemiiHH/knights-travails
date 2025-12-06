function knightsMoves(start, end) {
  const moves = [
    [2, 1],
    [1, 2],
    [-2, -1],
    [-1, -2],
    [-2, 1],
    [2, -1],
    [-1, 2],
    [1, -2],
  ];

  // BFS setup
  const queue = [start];
  const visited = new Set();
  const parents = new Map();

  const startKey = start.toString();
  const endKey = end.toString();

  visited.add(startKey);
  parents.set(startKey, null);

  while (queue.length > 0) {
    const [x, y] = queue.shift();
    const currentKey = `${x},${y}`;

    // Goal reached
    if (currentKey === endKey) break;

    // Explore neighbors
    for (const [dx, dy] of moves) {
      const newX = x + dx;
      const newY = y + dy;

      // Check board bounds
      if (
        newX < 0 || newX > 7 ||
        newY < 0 || newY > 7
      ) continue;

      const childKey = `${newX},${newY}`;

      // Skip already visited nodes
      if (visited.has(childKey)) continue;

      // Record visit & parent
      visited.add(childKey);
      parents.set(childKey, currentKey);

      // Enqueue next position
      queue.push([newX, newY]);
    }
  }

  // Reconstruct path
  const path = [];
  let current = endKey;

  while (current !== null) {
    path.push(current.split(',').map(Number));
    current = parents.get(current);
  }

  path.reverse();

  // Output
  console.log(`You made it in ${path.length - 1} moves!`);
  console.log(path);

  return path;
}

knightsMoves([3, 3], [4, 3]);