function loop_size(node) {
  let slow = node;
  let fast = node;
  let loopFound = false;

  // Find the meeting point of the slow and fast pointers
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      loopFound = true;
      break;
    }
  }

  // Calculate the length of the loop
  if (loopFound) {
    let loopNode = slow;
    let loopLength = 1;

    while (loopNode.next !== slow) {
      loopNode = loopNode.next;
      loopLength++;
    }

    return loopLength;
  }
}
