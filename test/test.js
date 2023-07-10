import checkHealth from '../src/health';

test.each([
  ['маг', 90, 'healthy'],
  ['маг', 13, 'critical'],
  ['маг', 45, 'wounded'],
])('healsBarCheking', (objectName, objectHealth, expected) => {
  const result = checkHealth({ name: objectName, health: objectHealth });
  expect(result).toBe(expected);
});
