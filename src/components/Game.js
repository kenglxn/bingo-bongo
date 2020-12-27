import { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Form, Input, InputNumber, Button, Tooltip } from "antd";
import { useStorage } from "context/Storage";
import { GameModel } from "models/Game";

function Game() {
  let { id: idS } = useParams();
  let id = parseInt(idS);
  return id ? <ViewGame id={id} /> : <NewGame />;
}

function NewGame() {
  let history = useHistory();
  let { create } = useStorage();
  const [min, setMin] = useState();
  const [max, setMax] = useState();

  const formLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 12 },
  };

  const buttonLayout = {
    wrapperCol: { span: 12, offset: 4 },
  };
  return (
    <Form
      {...formLayout}
      name="basic"
      initialValues={{ remember: true }}
      requiredMark={false}
      onFinish={({ name, min, max }) => {
        const newGame = create(new GameModel(name, min, max).toJSON());
        history.push("/game/" + newGame.id);
      }}
    >
      <Form.Item
        label="Navn"
        name="name"
        rules={[{ required: true, message: "Oppgi navn på spill" }]}
      >
        <Input placeholder="navn på dette spillet" />
      </Form.Item>

      <Form.Item label="Bonger">
        <Tooltip title="Brukes til å trekke tall ved Tombola">
          <Input.Group compact>
            <Form.Item
              name="min"
              rules={[
                { required: true, message: "angi første bong" },
                {
                  max,
                  type: "number",
                  message: "må være mindre siste bong",
                },
              ]}
            >
              <InputNumber
                style={{ width: "100%" }}
                placeholder="Første"
                onChange={(v) => v && setMin(v)}
              />
            </Form.Item>

            <Form.Item
              name="max"
              rules={[
                { required: true, message: "angi siste bong" },
                {
                  min,
                  type: "number",
                  message: "må være større enn første",
                },
              ]}
            >
              <InputNumber
                style={{ width: "100%" }}
                placeholder="Siste"
                onChange={(v) => v && setMax(v)}
              />
            </Form.Item>
          </Input.Group>
        </Tooltip>
      </Form.Item>

      <Form.Item {...buttonLayout}>
        <Button type="primary" htmlType="submit">
          Start spill
        </Button>
      </Form.Item>
    </Form>
  );
}

function ViewGame({ id }) {
  let { find } = useStorage();
  let game = GameModel.from(find(id));
  return (
    <p>
      game: {game.name} @ {game.created_at}
    </p>
  );
}

export default Game;
