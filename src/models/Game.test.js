import { GameModel } from "models/Game";

test("supports json serdes", () => {
  const model = new GameModel("joulebingo", 1, 300);
  // TODO: fill model with bingos, tombolas and numbers
  const serialized = JSON.stringify(model);
  const deserialized = GameModel.from(serialized);

  expect(deserialized).toEqual(model);
});
