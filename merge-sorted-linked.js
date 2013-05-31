var Node = function(v) {
  this.value = v;
  this.next = undefined;
}

function printLinkedList(list) {
  var node = list;
  while (node != undefined) {
    console.log('-> ' + node.value);
    node = node.next;
  }
}

var list1 = new Node(1);
list1.next = new Node(2);
list1.next.next = new Node(3);

var list2 = new Node(1);
list2.next = new Node(2);
list2.next.next = new Node(3);

function mergeLists(list1, list2) {
  if (list1 === undefined) {
    return list2;
  }
  else if (list2 === undefined) {
    return list1;
  }

  if (list1.value < list2.value) {
    list1.next = mergeLists(list1.next, list2);
    return list1;
  } else {
    list2.next = mergeLists(list1, list2.next);
    return list2;
  }
}

printLinkedList(list1);
