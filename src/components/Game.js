import { useState, useRef, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import {
  Row,
  Col,
  Form,
  Input,
  InputNumber,
  Button,
  Badge,
  Tooltip,
  Divider,
  Drawer,
  List,
  Space,
  Carousel,
} from "antd";
import {
  PlusOutlined,
  CompassOutlined,
  SaveOutlined,
  DeleteOutlined,
  CloseSquareOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import { useStorage } from "context/Storage";
import { GameModel } from "models/Game";
import "components/Game.css"; // keyframes and scoping are wonky, just use regular css for keyframes

const ballColors = [
  "AliceBlue",
  "AntiqueWhite",
  "Aqua",
  "Aquamarine",
  "Azure",
  "Beige",
  "Bisque",
  "BlanchedAlmond",
  "Blue",
  "BlueViolet",
  "Brown",
  "BurlyWood",
  "CadetBlue",
  "Chartreuse",
  "Chocolate",
  "Coral",
  "CornflowerBlue",
  "Cornsilk",
  "Crimson",
  "Cyan",
  "DarkCyan",
  "DarkGoldenrod",
  "DarkGray",
  "DarkGreen",
  "DarkGrey",
  "DarkKhaki",
  "DarkMagenta",
  "DarkOliveGreen",
  "DarkOrange",
  "DarkOrchid",
  "DarkRed",
  "DarkSalmon",
  "DarkSeaGreen",
  "DarkSlateBlue",
  "DarkSlateGray",
  "DarkSlateGrey",
  "DarkTurquoise",
  "DarkViolet",
  "DeepPink",
  "DeepSkyBlue",
  "DimGray",
  "DodgerBlue",
  "FireBrick",
  "FloralWhite",
  "ForestGreen",
  "Fuchsia",
  "Gainsboro",
  "GhostWhite",
  "Gold",
  "Goldenrod",
  "Gray",
  "Green",
  "GreenYellow",
  "Grey",
  "Honeydew",
  "HotPink",
  "IndianRed",
  "Indigo",
  "Ivory",
  "Khaki",
  "Lavender",
  "LavenderBlush",
  "LawnGreen",
  "LemonChiffon",
  "LightBlue",
  "LightCoral",
  "LightCyan",
  "LightGoldenrodYellow",
  "LightGray",
  "LightGreen",
  "LightGrey",
  "LightPink",
  "LightSalmon",
  "LightSeaGreen",
  "LightSkyBlue",
  "LightSlateGray",
  "LightSlateGrey",
  "LightSteelBlue",
  "LightYellow",
  "Lime",
  "LimeGreen",
  "Linen",
  "Magenta",
  "Maroon",
  "MediumAquamarine",
  "MediumBlue",
  "MediumOrchid",
  "MediumPurple",
  "MediumSeaGreen",
  "MediumSlateBlue",
  "MediumSpringGreen",
  "MediumTurquoise",
  "MediumVioletRed",
  "MidnightBlue",
  "MintCream",
  "MistyRose",
  "Moccasin",
  "NavajoWhite",
  "Navy",
  "OldLace",
  "Olive",
  "OliveDrab",
  "Orange",
  "OrangeRed",
  "Orchid",
  "PaleGoldenrod",
  "PaleGreen",
  "PaleTurquoise",
  "PaleVioletRed",
  "PapayaWhip",
  "PeachPuff",
  "Peru",
  "Pink",
  "Plum",
  "PowderBlue",
  "Purple",
  "Rebeccapurple",
  "Red",
  "RosyBrown",
  "RoyalBlue",
  "SaddleBrown",
  "Salmon",
  "SandyBrown",
  "SeaGreen",
  "Seashell",
  "Sienna",
  "Silver",
  "SkyBlue",
  "SlateBlue",
  "SlateGray",
  "SlateGrey",
  "Snow",
  "SpringGreen",
  "SteelBlue",
  "Tan",
  "Teal",
  "Thistle",
  "Tomato",
  "Turquoise",
  "Violet",
  "Wheat",
  "White",
  "WhiteSmoke",
  "Yellow",
  "YellowGreen",
];

const ballColor = (num) => {
  return ballColors[num % ballColors.length];
};

const formLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 18 },
};

const buttonLayout = {
  wrapperCol: { span: 22, offset: 0 },
};

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

  return (
    <>
      <Divider>Lag Nytt Spill</Divider>
      <Row justify="center">
        <Col flex="0 1 80vw">
          <Form
            {...formLayout}
            name="game"
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
                      type="number"
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
                      type="number"
                      style={{ width: "100%" }}
                      placeholder="Siste"
                      onChange={(v) => v && setMax(v)}
                    />
                  </Form.Item>
                </Input.Group>
              </Tooltip>
            </Form.Item>

            <Form.Item {...buttonLayout} style={{ textAlign: "right" }}>
              <Button type="primary" htmlType="submit">
                Start spill
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </>
  );
}

function ShowGame({ id }) {
  let history = useHistory();
  let { find, update } = useStorage();
  let [showTombola, setShowTombola] = useState(false);
  let [tombola, setTombola] = useState();
  let [selected, setSelected] = useState();
  let [editing, setEditing] = useState();
  let game = GameModel.from(find(id));

  const onEdit = (bingo) => {
    setSelected();
    setEditing(bingo);
  };

  const onSelect = (bingo) => {
    setSelected(bingo);
    setEditing();
  };

  return (
    <>
      <Divider>
        {game.name} @ {new Date(game.created_at).toLocaleString()}
      </Divider>
      <Row justify="center" gutter={[10, 10]}>
        <Col flex="0 1 80vw">
          <Space>
            <Tooltip placement="bottomLeft" title="Trekk et bingotall">
              <Button
                disabled={game.bingos.length === 3}
                size="large"
                onClick={() => {
                  game.drawBingoNumber() && update(game);
                }}
                type="default"
                shape="circle"
                icon={<PlusOutlined />}
              />
            </Tooltip>
            <Tooltip placement="bottomLeft" title="Tombola">
              <Button
                size="large"
                onClick={() => {
                  setShowTombola(!showTombola);
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
                  history.push("/");
                }}
                type="default"
                shape="circle"
                icon={<SaveOutlined />}
              />
            </Tooltip>
          </Space>
        </Col>
      </Row>
      <Row justify="center" gutter={[10, 10]}>
        <Col flex="0 1 80vw">
          {!editing && !selected && (
            <div style={{ padding: "1vw" }}>
              <BingoNumbers {...{ game, onEdit, onSelect }} />
            </div>
          )}

          {selected && (
            <div style={{ border: "1px solid #ddd", padding: "1vw" }}>
              <BingoNumbers
                {...{ game, onEdit, onSelect, activeNum: selected }}
              />
              <BingoForm
                game={game}
                bingo={selected}
                onSave={(bingo) => {
                  game.addBingo(bingo);
                  update(game);
                  onSelect();
                }}
                onClose={() => {
                  onSelect();
                }}
              />
            </div>
          )}
          {editing && (
            <div style={{ border: "1px solid #ddd", padding: "1vw" }}>
              <BingoNumbers
                {...{ game, onEdit, onSelect, activeNum: editing }}
              />
              <BingoForm
                game={game}
                bingo={editing}
                onSave={(bingo) => {
                  game.addBingo(bingo);
                  update(game);
                  onEdit();
                }}
                onClose={() => {
                  onEdit();
                }}
                onDelete={(bingo) => {
                  game.removeBingo(bingo);
                  update(game);
                  onEdit();
                }}
              />
            </div>
          )}
        </Col>
      </Row>
      <Row justify="center">
        <Col flex="0 1 80vw">
          <BingoList {...{ game, selected, onClick: onEdit }} />
        </Col>
      </Row>
      <Row justify="center">
        <Col flex="0 1 80vw">
          <TombolaList
            game={game}
            onClick={(tombola) => {
              setShowTombola(true);
              setTombola(tombola);
            }}
          />
        </Col>
      </Row>
      <Drawer
        title="Tombola!"
        placement="top"
        height="100vh"
        closable={false}
        onClose={() => setShowTombola(false)}
        visible={showTombola}
        getContainer={false}
        style={{ position: "absolute" }}
      >
        <Tombola
          game={game}
          tombola={tombola}
          onClose={() => setShowTombola(false)}
        />
      </Drawer>
    </>
  );
}

function BingoNumbers({ game, onEdit, onSelect, activeNum }) {
  return game.bingo_numbers.map((num) => {
    const bingoAfter = game.bingoAfter(num);
    const bingo = game.getBingo(num);
    const newBingo = game.newBingo(num);

    return bingo ? (
      <Tooltip key={num} title={!bingoAfter && "Trykk for å redigere Bingo!"}>
        <Badge
          style={{ backgroundColor: "#eee", color: "black" }}
          count={bingo.type !== 3 ? bingo.type + "x" : <HomeOutlined />}
          offset={[-10, 2]}
        >
          <Button
            danger
            onClick={() => onEdit(bingo)}
            type="default"
            size="large"
            shape="circle"
          >
            {num}
          </Button>
        </Badge>
      </Tooltip>
    ) : (
      <Tooltip
        key={num}
        title={bingoAfter || !newBingo ? "" : "Trykk for å angi Bingo!"}
      >
        <Button
          disabled={bingoAfter || !newBingo}
          onClick={() => onSelect(newBingo)}
          type={num === activeNum ? "primary" : "default"}
          size="large"
          shape="circle"
        >
          {num}
        </Button>
      </Tooltip>
    );
  });
}

function BingoForm({ game, bingo, onSave, onClose, onDelete = () => {} }) {
  const exists = game.getBingo(bingo.number);
  const disabled = exists && !game.isLastBingo(bingo);
  return (
    <Form
      style={{ padding: "1vw" }}
      initialValues={bingo.toJSON()}
      {...formLayout}
      name="bingo"
      requiredMark={false}
      onFinish={(values) => {
        bingo.winner = values.winner;
        onSave(bingo);
      }}
    >
      <Form.Item label="Vinnertall">
        <Button danger={exists} type="primary" size="medium" shape="circle">
          {bingo.number}
        </Button>
      </Form.Item>
      <Form.Item label="Type" disabled>
        <Input value={bingo.localeType} disabled />
      </Form.Item>
      <Form.Item
        label="Vinner"
        name="winner"
        initialValue={bingo.winner}
        rules={[{ required: true, message: "Oppgi navn på vinner" }]}
      >
        <Input disabled={disabled} placeholder="navn på vinner" />
      </Form.Item>
      <Form.Item {...buttonLayout} style={{ textAlign: "right" }}>
        <Space>
          <Button
            disabled={disabled}
            type="primary"
            htmlType="submit"
            icon={<SaveOutlined />}
          >
            Lagre
          </Button>
          <Button
            onClick={onClose}
            type="default"
            icon={<CloseSquareOutlined />}
          >
            Lukk
          </Button>
          {exists && (
            <Button
              danger
              disabled={disabled}
              onClick={() => onDelete(bingo)}
              type="default"
              icon={<DeleteOutlined />}
            />
          )}
        </Space>
      </Form.Item>
    </Form>
  );
}

function BingoList({ game, onClick }) {
  return (
    <List
      locale={{ emptyText: <></> }}
      itemLayout="horizontal"
      dataSource={game.bingos}
      renderItem={(bingo) => (
        <List.Item>
          <List.Item.Meta
            avatar={
              <Badge
                style={{ backgroundColor: "#eee", color: "black" }}
                count={bingo.type !== 3 ? bingo.type + "x" : <HomeOutlined />}
                offset={[-10, 2]}
              >
                <Button
                  onClick={() => onClick(bingo)}
                  danger
                  type="default"
                  size="large"
                  shape="circle"
                >
                  {bingo.number}
                </Button>
              </Badge>
            }
            title={bingo.winner}
            description={`${bingo.localeType}: ${new Date(
              bingo.created_at
            ).toLocaleString()}`}
          />
        </List.Item>
      )}
    />
  );
}

function Tombola({ game, onClose, tombola }) {
  const contentStyle = {
    height: "160px",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };
  const boxStyle = {
    height: "140px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  let { update } = useStorage();
  const carouselRef = useRef(null);
  const [running, setRunning] = useState(false);
  const [number, setNumber] = useState();
  useEffect(() => {
    if (tombola) {
      setNumber(tombola.number);
    }
  }, [tombola]);
  useEffect(() => {
    let ticks = 0;
    let pid = setInterval(() => {
      console.log({ ticks });
      if (!running) {
        clearInterval(pid);
      }
      if (ticks > 50) {
        setRunning(false);
        setNumber(game.drawTombolaNumber());
      } else {
        running && carouselRef.current.next();
        ticks += 1;
      }
    }, 200);

    return () => {
      ticks = 0;
      clearInterval(pid);
    };
  }, [running, game]);

  return (
    <>
      <Row justify="center" gutter={[10, 10]}>
        <Col flex="0 1 80vw">
          {number ? (
            <TombolaForm
              game={game}
              number={number}
              onSave={(tombola) => {
                game.addTombola(tombola);
                update(game);
                setNumber();
              }}
              onClose={() => {
                setNumber();
              }}
            />
          ) : (
            <>
              {running && (
                <Button
                  danger
                  onClick={() => {
                    setRunning(false);
                    setNumber(game.drawTombolaNumber());
                  }}
                  type="default"
                >
                  Stopp
                </Button>
              )}
              <Button
                loading={running}
                onClick={() => {
                  setNumber();
                  setRunning(true);
                }}
                type="primary"
              >
                Kjør
              </Button>
              <Button disabled={running} onClick={onClose} type="default">
                Lukk
              </Button>
            </>
          )}
        </Col>
      </Row>
      <Row justify="center" gutter={[10, 10]}>
        <Col flex="0 1 80vw">
          {number ? (
            <div>
              <div style={contentStyle}>
                <div style={boxStyle} className="box">
                  <TombolaBall number={number} className="tombolaStop" />
                </div>
              </div>
            </div>
          ) : (
            <Carousel ref={carouselRef}>
              {game.tombola_pool.slice(0, 33).map((num) => (
                <div key={num}>
                  <div style={contentStyle}>
                    <div style={boxStyle} className="box">
                      <TombolaBall
                        number={num}
                        className={running ? "tombolaSpin" : ""}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </Carousel>
          )}
        </Col>
      </Row>
      <Row justify="center" gutter={[10, 10]}>
        <Col flex="0 1 80vw">
          <TombolaList
            game={game}
            reverse
            onClick={({ number }) => setNumber(number)}
          />
        </Col>
      </Row>
    </>
  );
}

function TombolaBall({ number, className, style }) {
  const ballStyle = {
    ...{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "75px",
      width: "75px",
      color: "black",
      textShadow:
        "1px 1px 1px #FFF, -1px -1px 1px #FFF, -1px 1px 1px #FFF, 1px -1px 1px #FFF",
      fontSize: "22px",
      fontWeight: "bold",
      borderRadius: "50%",
      backgroundColor: "red",
      border: "thin solid #ddd",
    },
    ...style,
  };
  return (
    <div
      style={{
        ...ballStyle,
        backgroundColor: ballColor(number),
      }}
      className={className}
    >
      {number}
    </div>
  );
}

function TombolaForm({ game, number, onSave, onClose }) {
  const tombola = game.getTombola(number) || game.newTombola(number);
  return (
    <Form
      style={{ padding: "1vw" }}
      initialValues={tombola.toJSON()}
      {...formLayout}
      name="tombola"
      requiredMark={false}
      onFinish={(values) => {
        tombola.winner = values.winner;
        onSave(tombola);
      }}
    >
      <Form.Item label="Vinnertall">
        <TombolaBall number={tombola.number} />
      </Form.Item>
      <Form.Item
        label="Vinner"
        name="winner"
        initialValue={tombola.winner}
        rules={[{ required: true, message: "Oppgi navn på vinner" }]}
      >
        <Input placeholder="navn på vinner" />
      </Form.Item>
      <Form.Item {...buttonLayout} style={{ textAlign: "right" }}>
        <Space>
          <Button type="primary" htmlType="submit" icon={<SaveOutlined />}>
            Lagre
          </Button>
          <Button
            disabled={!game.getTombola(number)}
            onClick={onClose}
            type="default"
            icon={<CloseSquareOutlined />}
          >
            Lukk
          </Button>
        </Space>
      </Form.Item>
    </Form>
  );
}

function TombolaList({ game, reverse, onClick }) {
  return (
    <List
      locale={{ emptyText: <></> }}
      itemLayout="horizontal"
      dataSource={reverse ? [...game.tombolas].reverse() : game.tombolas}
      pagination={{
        position: "top",
        pageSize: 4,
        hideOnSinglePage: true,
      }}
      renderItem={(tombola) => (
        <List.Item>
          <List.Item.Meta
            avatar={
              <TombolaBall
                number={tombola.number}
                style={{
                  height: "40px",
                  width: "40px",
                  fontSize: "14px",
                  fontWeight: "normal",
                  cursor: "pointer",
                }}
              />
            }
            onClick={() => {
              onClick && onClick(tombola);
            }}
            title={tombola.winner}
            description={new Date(tombola.created_at).toLocaleString()}
          />
        </List.Item>
      )}
    />
  );
}

export default GameView;
