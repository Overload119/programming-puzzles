// Implement a circular buffer of size N. Allow the caller to append, remove and list the contents of the buffer. Implement the buffer to achieve maximum performance for each of the operations.

// The new items are appended to the end and the order is retained i.e elements are placed in increasing order of their insertion time. When the number of elements in the list elements exceeds the defined size, the older elements are overwritten.

// Append the following n lines to the buffer. If the buffer is full they replace the older entries.
// Remove first n elements of the buffer. These n elements are the ones that were added earliest among the current elements.
// List the elements of buffer in order of their inserting time.

function CircularBuffer(size) {
  this.size = size || 5;
  this.current = 0;
  this._storage = [];
}

CircularBuffer.prototype.append = function(item) {
  this._storage[this.current] = item;
  this.current++;
  if (this.current >= this.size) {
    this.current = 0;
  }
}

CircularBuffer.prototype.remove = function(n) {
  for (var i = 0; i < n; i++) {
    this._storage[this.current] = undefined;
    this.current--;
    if (this.current < 0) {
      this.current = this.size - 1;
    }
  }
}

CircularBuffer.prototype.list = function() {
  for (var i = 0; i < this.size; i++) {
    console.log( '[' + (i+1) + ']: ' + this._storage[i] );
  }
}
