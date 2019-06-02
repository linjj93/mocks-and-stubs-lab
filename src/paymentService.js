const makePayment = amount => {
  console.log(`actually making payment of $${amount}`); // pay
  return `payment made for $${amount}`;
};

const refundPayment = amount => {
  console.log(`actually making refund  of $${amount} `); // refund
  return `refund made for $${amount}`;
};

module.exports = {
  makePayment,
  refundPayment
};

// spyOn because you want to keep actual implementation
