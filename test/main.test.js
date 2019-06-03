const processPayments = require("../src/main");
const queueService = require("../src/queueService");
const paymentService = require("../src/paymentService");

const queueSpy = jest.spyOn(queueService, "generateQueue");
paymentService.makePayment = jest.fn();
paymentService.refundPayment = jest.fn();

test("does not call makePayment or refundPayment when paymentQueue is empty", () => {
  // empty queue array
  queueSpy.mockReturnValue([]);
  const paid = processPayments();
  expect(paid).toBe(undefined);
  expect(queueSpy).toHaveBeenCalled();
  expect(paymentService.makePayment).not.toHaveBeenCalled();
  expect(paymentService.refundPayment).not.toHaveBeenCalled();
});

test("calls makePayment when next item in paymentQueue is positive", () => {
  queueSpy.mockImplementation(() =>
    Array(10)
      .fill()
      .map(num => 10)
  );
  const paid = processPayments();
  expect(paymentService.makePayment).toHaveBeenCalled();
});

test("calls refundPayment when next item in paymentQueue is negative", () => {
  queueSpy.mockImplementation(() =>
    Array(10)
      .fill()
      .map(num => -10)
  );
  const paid = processPayments();
  expect(paymentService.refundPayment).toHaveBeenCalled();
});
