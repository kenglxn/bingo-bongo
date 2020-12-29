import { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import {
  Row,
  Col,
  Form,
  Input,
  InputNumber,
  Button,
  Tooltip,
  Divider,
} from "antd";
import { PlusOutlined, CompassOutlined, SaveOutlined } from "@ant-design/icons";
import { useStorage } from "context/Storage";
import { GameModel } from "models/Game";

function GameView() {
  let { id: idS } = useParams();
  let id = parseInt(idS);
  return id ? <ShowGame id={id} /> : <CreateGame />;
}

function CreateGame() {
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
    <Row>
      <Col flex="50vh">
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
      </Col>
    </Row>
  );
}

function ShowGame({ id }) {
  let { find, update } = useStorage();

  let game = GameModel.from(find(id));
  return (
    <>
      <Divider>
        {game.name} @ {new Date(game.created_at).toLocaleString()}
      </Divider>
      <Row justify="center" gutter={[10, 25]}>
        <Col flex="0 1 50vw">
          <Tooltip placement="bottomLeft" title="trekk nytt tall">
            <Button
              size="large"
              onClick={() => {
                game.drawBingoNumber();
                update(game);
              }}
              type="default"
              shape="circle"
              icon={<PlusOutlined />}
            />
          </Tooltip>
          <Tooltip placement="bottomLeft" title="Start Tombola">
            <Button
              size="large"
              onClick={() => {
                console.log("todo: tombola!");
              }}
              type="default"
              shape="circle"
              icon={<CompassOutlined />}
            />
          </Tooltip>
          <Tooltip placement="bottomLeft" title="Lagre og lukk">
            <Button
              danger
              size="large"
              onClick={() => {
                console.log("set finished and go home");
              }}
              type="default"
              shape="circle"
              icon={<SaveOutlined />}
            />
          </Tooltip>
        </Col>
      </Row>
      <Row justify="center" gutter={[10, 25]}>
        <Col flex="0 1 50vw">
          {game.bingo_numbers.map((num) => (
            <Tooltip
              key={num}
              placement="bottomLeft"
              title="Trykk for å angi Bingo!"
            >
              <Button size="large" type="dashed" shape="circle">
                {num}
              </Button>
            </Tooltip>
          ))}
        </Col>
      </Row>
    </>
  );
}

export default GameView;
