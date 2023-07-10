import checkHealth from '../src/health';
import sortObject from '../src/sorter';

test.each([
  ['маг', 90, 'healthy'],
  ['маг', 13, 'critical'],
  ['маг', 45, 'wounded'],
])('healsBarCheking', (objectName, objectHealth, expected) => {
  const result = checkHealth({ name: objectName, health: objectHealth });
  expect(result).toBe(expected);
});

test('sorter checker', () => {
  const unsortCharacters = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ];

  const sortCharacters = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];

  const result = sortObject(unsortCharacters);

  expect(result).toEqual(sortCharacters);
});
