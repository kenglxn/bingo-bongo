import useLocalStorage from "hooks/useLocalStorage";

function useGamesDb(initialValue = []) {
  let [games, setGames] = useLocalStorage("games", initialValue);

  const create = (game) => {
    const newGame = { id: games.length + 1, ...game };
    setGames([...games, newGame]);
    return newGame;
  };

  const update = (game) => {
    setGames(
      games.map((g) => {
        if (g.id === game.id) {
          console.log(`updated game ${JSON.stringify(game, null, 2)}`);
          return game;
        } else {
          return g;
        }
      })
    );
  };

  const find = (id) => {
    console.log(`find by id:${id}. games:${JSON.stringify(games, null, 2)}`);
    return games.find((g) => g.id === id);
  };

  return {
    create,
    update,
    find,
    setGames,
    games,
  };
}

export default useGamesDb;
