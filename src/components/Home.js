import { Link, useHistory } from "react-router-dom";
import { Button, Tooltip, List } from "antd";
import { FileAddOutlined, CheckCircleOutlined } from "@ant-design/icons";

// TODO: local storage
const games = [
  {
    name: "julebingo",
    created_at: Date.now(),
  },
];

function Home() {
  let history = useHistory();
  return (
    <>
      <Tooltip title="opprett nytt spill">
        <Button
          onClick={() => history.push("/game")}
          type="primary"
          icon={<FileAddOutlined />}
        />
      </Tooltip>

      <List
        itemLayout="horizontal"
        dataSource={games}
        renderItem={(game) => (
          <List.Item>
            <List.Item.Meta
              avatar={<CheckCircleOutlined />}
              title={<Link to={`/game/${game.name}`}>{game.name}</Link>}
              description={`${game.name} @ ${game.created_at}`}
            />
          </List.Item>
        )}
      />
    </>
  );
}

export default Home;
