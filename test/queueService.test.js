const queueService = require("../src/queueService");
const math = require("mathjs");

const spy = jest.spyOn(math, "randomInt");

test.only("generateQueue returns [1] when math.randomInt gives 1", () => {
  spy.mockImplementation((a, b) => 2);
  expect(queueService.generateQueue()).toEqual([2, 2]);
});

test.only("generateQueue returns [2,2] when math.randomInt gives 2", () => {
  spy.mockImplementation((a, b) => 2);
  expect(queueService.generateQueue()).toEqual([2, 2]);
});

test.only("generateQueue returns [-20] when math.randomInt gives first argument", () => {
  spy.mockImplementation((a, b) => a);
  expect(queueService.generateQueue()).toEqual([-20]);
});

test.only("generateQueue returns [50, 50, 50, 50, 50, 50, 50, 50, 50, 50] when math.randomInt gives second argument", () => {
  spy.mockImplementation((a, b) => b);
  expect(queueService.generateQueue()).toEqual(
    Array(10)
      .fill()
      .map(num => 50)
  );
});
