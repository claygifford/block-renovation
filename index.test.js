import {codingExercise} from './coding-exercise.js';

test('test case one: original use case', () => {
    const items = ['red', 'blue', 'red', 'green', 'blue'];
    const order = ['blue', 'red', 'black'];
    const result = codingExercise(items, order);
    expect(result).toEqual(['blue', 'blue', 'red', 'red']);
  });

  test('test case two: empty items', () => {
    const items = [];
    const order = ['blue', 'red', 'black'];
    const result = codingExercise(items, order);
    expect(result).toEqual([]);
  });

  test('test case three: empty order', () => {
    const items = ['red', 'blue', 'red', 'green', 'blue'];
    const order = [];
    const result = codingExercise(items, order);
    expect(result).toEqual([]);
  });

  test('test case four', () => {
    const items = ['green', 'blue', 'red', 'blue', 'red', 'green', 'blue', 'black', 'black'];
    const order = ['blue', 'red', 'black'];
    const result = codingExercise(items, order);
    expect(result).toEqual(['blue', 'blue', 'blue', 'red', 'red', 'black', 'black']);
  });

  test('test case five', () => {
    const items = ['red', 'blue', 'red', 'green', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red' ];
    const order = ['blue', 'red', 'black'];
    const result = codingExercise(items, order);
    expect(result).toEqual(['blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red']);
  });