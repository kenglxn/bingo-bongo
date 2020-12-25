import { useParams } from "react-router-dom";
import useGamesDb from "hooks/useGamesDb";

function Game() {
  let { id: idS } = useParams();
  let id = parseInt(idS);
  return id ? <ViewGame id={id} /> : <NewGame />;
}

function NewGame() {
  return <p>new game</p>;
}

function ViewGame({ id }) {
  let { find } = useGamesDb();
  let game = find(id);

  return <p>game: {game.name}</p>;
}

export default Game;
