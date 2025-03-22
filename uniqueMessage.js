class MessageDeduplicator {
    constructor() {
      this.messageHistory = new Map();
    }
  isUnique(messageText, currentTimestamp, windowSize) {
      if (!messageText || windowSize === 0) {
        return true;
      }
  
      this._removeExpiredMessages(currentTimestamp, windowSize);
  
      if (this.messageHistory.has(messageText)) {
        return false;
      } else {
        this.messageHistory.set(messageText, currentTimestamp);
        return true;
      }
    }
  
    _removeExpiredMessages(currentTimestamp, windowSize) {
      const expiredMessages = [];
      for (const [message, timestamp] of this.messageHistory) {
        if (currentTimestamp - timestamp > windowSize) {
          expiredMessages.push(message);
        }
      }
  
      for (const message of expiredMessages) {
        this.messageHistory.delete(message);
      }
    }
  }
  
  // Example 1
  const deduplicator1 = new MessageDeduplicator();
  console.log(deduplicator1.isUnique('hello', 10, 5)); // true
  console.log(deduplicator1.isUnique('world', 11, 5)); // true
  console.log(deduplicator1.isUnique('hello', 12, 5)); // false
  
  // EXAMPLE 2
  const deduplicator2 = new MessageDeduplicator();
  console.log(deduplicator2.isUnique('test', 1, 3)); //true
  console.log(deduplicator2.isUnique('test', 5, 3)); //false
  console.log(deduplicator2.isUnique('test', 10, 3)); //true
  
  // EXAMPLE 3
  const deduplicator3 = new MessageDeduplicator();
  console.log(deduplicator3.isUnique("", 1, 5)); //true
  console.log(deduplicator3.isUnique("test", 1, 0)); //true
  console.log(deduplicator3.isUnique("test", 1, 5)); //true
  console.log(deduplicator3.isUnique("test", 6, 5)); //false
  console.log(deduplicator3.isUnique("test", 12, 5)); //true