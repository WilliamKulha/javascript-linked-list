function LinkedList() {
  this.head = null;
}

LinkedList.prototype.isEmpty = function() {
  return(this.head === null);
}

LinkedList.prototype.size = function() {
  if (this.isEmpty()) {
    return 0;
  }
  let count = 1;
  let cur = this.head;
  while (cur.next !== null) {
    cur = cur.next;
    count++
  }
  return count;
}

LinkedList.prototype.append = function (val) {
  node = {
    data: val,
    next: null
  };

  if(this.isEmpty()) {
    this.head = node;
  } else {
    cur = this.head;
    while (cur.next !== null) {
      cur = cur.next;
    }
    cur.next = node;
  }
}

LinkedList.prototype.prepend = function(val) {
  node = {
    data: val,
    next: this.head
  }
  this.head = node;
};

LinkedList.prototype.contains = function (item) {
  let cur = this.head;
  while(cur !== null) {
    if(cur.data === item) {
      return true
    }
    cur = cur.next;
  }
  return false;
};

//Method to remove whichever node in the list contains the passed value.
LinkedList.prototype.remove = function (item) {
  if(!this.contains(item)) {
    return;
  }

  if(this.head.data === item) {
    this.head = this.head.next;
    return;
  }

  let prev = null;
  let cur = this.head;
  while(cur.data != item) {
    prev = cur;
    cur = cur.next;
  }
  prev.next = cur.next;
  if (cur.next === null) {
  }
}

LinkedList.prototype.reverse = function () {
  if(!this.head) {
    return false;
  }
  let cur = this.head;
  let next;
  let prev = null;             

  //You use a while loop because you don't have anything outside keeping track of where the head/tail is. Once you get to the node where the next value
  // is null, it'll be saved as prev so when you iterate to the null node which evalutes false and breaks the loop, you want to set the head as
  // that previous node.
  while(cur) {
    next = cur.next;

    cur.next = prev;
    
    prev = cur;

    cur = next;
  }
  this.head = prev;
}

//Use a hashtable in a single pass and it doesn't require an extra memory buffer.
LinkedList.prototype.removeDuplicates = function() {
  let hash = {}
  let cur = this.head;
  let prev;
  while (cur.next) {
    if(typeof(hash[cur.data]) === 'undefined') {
      hash[cur.data] = 1;
    } else if(hash[cur.data] === 1) {
      prev.next = cur.next;
    }
    prev = cur;
    cur = cur.next;
  }
}

//Returns the value of the node two from the end.
LinkedList.prototype.findKToLast = function(k) {
  let goal = this.size() - k;
  let cur = this.head;
  for (let i = 1; i <= goal; i++) {
    cur = cur.next;
  }
  return cur;
}

export default LinkedList();