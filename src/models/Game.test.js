import { GameModel } from "models/Game";

test("supports json serdes", () => {
  const model = new GameModel("joulebingo", 1, 300);
  // TODO: fill model with bingos, tombolas and numbers
  const serialized = JSON.stringify(model);
  const deserialized = GameModel.from(serialized);

  expect(deserialized).toEqual(model);
});

test("shuffles bingo", () => {
  const model = new GameModel("joulebingo", 1, 10);

  expect(model.bingo_pool.length).toEqual(90);
  const bingoCopy = [...model.bingo_pool];
  model.shuffleBingo();
  expect(bingoCopy).not.toEqual(model.bingo_pool);
  expect(model.bingo_pool.length).toEqual(90);
});

test("shuffles tombola", () => {
  const model = new GameModel("joulebingo", 1, 10);

  expect(model.tombola_pool.length).toEqual(10);
  const tombolaCopy = [...model.tombola_pool];
  model.shuffleTombola();
  expect(tombolaCopy).not.toEqual(model.tombola_pool);
  expect(model.tombola_pool.length).toEqual(10);
});

test("draws bingo number from pool", () => {
  const model = new GameModel("joulebingo", 1, 10);
  const number = model.drawBingoNumber();
  expect(model.bingo_pool.length).toBe(89);
  expect(model.bingo_numbers.length).toBe(1);
  expect(model.bingo_numbers).toContain(number);
  expect(model.bingo_pool).not.toContain(number);
});

test("draws tombola number from pool", () => {
  const model = new GameModel("joulebingo", 1, 10);
  const number = model.drawTombolaNumber();
  expect(model.tombola_pool.length).toBe(9);
  expect(model.tombola_numbers.length).toBe(1);
  expect(model.tombola_numbers).toContain(number);
  expect(model.tombola_pool).not.toContain(number);
});
