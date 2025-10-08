const hash256 = require('./test.index.js');

test('Verificar Hash', () => {
  const message = "contraseña";
  const hash = hash256(message);
  expect(hash).toEqual("edf9cf90718610ee7de53c0dcc250739239044de9ba115bb0ca6026c3e4958a5");
});
