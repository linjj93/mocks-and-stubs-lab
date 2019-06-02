const paymentService = require("./paymentService");
const queueService = require("./queueService");

const processPayments = () => {
  const paymentQueue = queueService.generateQueue(); // form queue    mock generateQueue
  while (paymentQueue.length > 0) {
    // when there are people in the queue
    const currentItem = paymentQueue.shift(); // remove first item in the queue and returns it
    if (currentItem >= 0) {
      // if item is non-negative
      paymentService.makePayment(currentItem); // pay
    } else {
      paymentService.refundPayment(currentItem); // if negative, then refund
    }
  }
};

// uncomment the next line and run: node src/main.js a few times to see how this function works
processPayments();

module.exports = processPayments;
