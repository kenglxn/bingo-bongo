import { useParams } from "react-router-dom";

function Game() {
  let { id } = useParams();
  return id ? <ViewGame id={id} /> : <NewGame />;
}

function NewGame() {
  return <p>new game</p>;
}

function ViewGame({ id }) {
  return <p>game: {id}</p>;
}

export default Game;
