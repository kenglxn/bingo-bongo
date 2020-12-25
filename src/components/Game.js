import { useParams, useHistory } from "react-router-dom";
import { useStorage } from "context/Storage";
import { Form, Input, Button } from "antd";

function Game() {
  let { id: idS } = useParams();
  let id = parseInt(idS);
  return id ? <ViewGame id={id} /> : <NewGame />;
}

function NewGame() {
  let history = useHistory();
  let { create } = useStorage();
  return (
    <Form
      wrapperCol={{ span: 8 }}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={(item) => {
        const newGame = create(item);
        history.push("/game/" + newGame.id);
      }}
    >
      <Form.Item
        label="Navn"
        name="name"
        rules={[{ required: true, message: "Oppgi navn på spill" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Opprett
        </Button>
      </Form.Item>
    </Form>
  );
}

function ViewGame({ id }) {
  let { find } = useStorage();
  let game = find(id);

  return (
    <p>
      game: {game.name} @ {game.created_at}
    </p>
  );
}

export default Game;
