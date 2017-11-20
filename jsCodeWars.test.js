const findNumbers = require('./jsCodeWars');

test('works for basic gap', () => {
  expect(findNumbers([3,2,1,4,6])).toBe(5);
});

test('works for basic gap and repetition', () => {
  expect(findNumbers([1,3,2,6,3,3,5,6])).toBe(4);
});

test('works for basic gap and negative', () => {
  expect(findNumbers([3,1,-1,-5,4,5])).toBe(2);
});

test('works for no gap', () => {
  expect(findNumbers([2,3,1])).toBe(4);
});

test('works for no gap and negative', () => {
  expect(findNumbers([-2,-3,-1])).toBe(1);
});

test('works for ignoring strings', () => {
  expect(findNumbers([-2,-3,-1,'a'])).toBe(1);
  expect(findNumbers([1,2,-1,'a'])).toBe(3);
  expect(findNumbers([1,2,5,6,4,-1,'a'])).toBe(3);
});

test('works for ignoring non-integers', () => {
  expect(findNumbers([-2,-3,-1,1.1])).toBe(1);
  expect(findNumbers([1,2,-1,3.3])).toBe(3);
  expect(findNumbers([1,2,5,6,4,-1,3.2])).toBe(3);
});
