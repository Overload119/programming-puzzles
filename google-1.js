function Node(v) {
  this.value = v;
  this.next  = undefined;
}

function LinkedList() {
  this.head = undefined;
  this.tail = undefined;
}

LinkedList.prototype.add = function(value) {
  if (this.head === undefined) {
    this.head = new Node(value);
    this.tail = this.head;
  } else {
    this.tail.next = new Node(value);
    this.tail = this.tail.next;
  }
}

var ll = new LinkedList();
for (var i = 1; i <= 100; i++) {
  ll.add(i);
}

function findKFromTail(k, list) {
  if (list.head === undefined || k < 1) {
    return;
  }

  // Traverse the link list
  var node = list.head;
  var kElement = node;
  var traversalCount = 0;
  while (node != undefined) {
    var lastPos = traversalCount - k;
    if (lastPos >= 0 && node.next != undefined) {
      kElement = kElement.next;
    }
    traversalCount++;
    node = node.next;
  }

  // We have reached the end 
  return kElement.value;
}

function Node(v) {
  this.value = v;
  this.next  = undefined;
}

function LinkedList() {
  this.head = undefined;
  this.tail = undefined;
}

LinkedList.prototype.add = function(value) {
  if (this.head === undefined) {
    this.head = new Node(value);
    this.tail = this.head;
  } else {
    this.tail.next = new Node(value);
    this.tail = this.tail.next;
  }
}

var ll = new LinkedList();
for (var i = 1; i <= 100; i++) {
  ll.add(i);
}

function findKFromTail(k, list) {
  if (list.head === undefined || k < 1) {
    return;
  }

  // Traverse the link list
  var node = list.head;
  var kElement = node;
  var traversalCount = 0;
  while (node != undefined) {
    var lastPos = traversalCount - k;
    if (lastPos >= 0 && node.next != undefined) {
      kElement = kElement.next;
    }
    traversalCount++;
    node = node.next;
  }

  // We have reached the end 
  return kElement.value;
}

console.log( findKFromTail(1, ll) ) // 4
console.log( findKFromTail(2, ll) ) // 3
console.log( findKFromTail(3, ll) ) // 2
console.log( findKFromTail(4, ll) ) // 1
