class ListNode {
  constructor(value, next) {
    this.value = value == undefined ? 0 : value;
    this.next = next == undefined ? null : next;
  }
}

class MyLinkedList {
  constructor() {
    this.head = null;
  }
  /**
   * Get the value of the index-th node in the linked list. If the index is invalid, return -1.
   * @param {number} index
   * @return {number}
   */
  get = (index) => {
    if (index < 0 || index >= this.getLength()) return -1;
    let currentNode = this.head;
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next;
    }
    return currentNode.value;
  };

  /**
   * Add a node of value before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
   * @param {number} value
   * @return {void}
   */
  addAtHead = (value) => {
    let newNode = new ListNode(value);
    newNode.next = this.head;
    this.head = newNode;
  };

  /**
   * Append a node of value to the last element of the linked list.
   * @param {number} value
   * @return {void}
   */
  addAtTail = function (value) {
    if (this.head == null) {
      this.addAtHead(value);
      return;
    }
    let newNode = new ListNode(value);
    let currentNode = this.head;
    while (currentNode.next !== null) {
      currentNode = currentNode.next;
    }
    currentNode.next = newNode;
  };
  /**
   * Add a node of value before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
   * @param {number} value
   * @return {void}
   */
  addAtHead = (value) => {
    let newNode = new ListNode(value);
    newNode.next = this.head;
    this.head = newNode;
  };

  /**
   * Add a node of value  before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted.
   * @param {number} index
   * @param {number} value
   * @return {void}
   */
  addAtIndex = (index, value) => {
    if (index === 0) {
      this.addAtHead(value);
      return;
    }
    if (index === this.getLength()) {
      this.addAtTail(value);
      return;
    }
    if (index > this.getLength()) return;

    let currentNode = this.head;
    let newNode = new ListNode(value);
    for (let i = 0; i < index - 1; i++) {
      currentNode = currentNode.next;
    }
    let next = currentNode.next;
    currentNode.next = newNode;
    newNode.next = next;
  };

  /**
   * Delete the index-th node in the linked list, if the index is valid.
   * @param {number} index
   * @return {void}
   */
  deleteAtIndex = (index) => {
    if (index < 0 || index >= this.getLength()) return;
    if (index == 0) {
      this.head = this.head.next;
      return;
    }

    let currentNode = this.head;
    for (let i = 0; i < index - 1; i++) {
      currentNode = currentNode.next;
    }
    currentNode.next = currentNode.next.next;
  };

  getLength = () => {
    let length = 0, currentNode = this.head;
    while (currentNode !== null) {
      currentNode = currentNode.next;
      length++;
    }
    return length;
  };
}


/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */