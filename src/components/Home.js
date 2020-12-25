import { Link, useHistory } from "react-router-dom";
import { Button, Tooltip, List } from "antd";
import useGamesDb from "hooks/useGamesDb";
import {
  FileAddOutlined,
  CheckCircleOutlined,
  SnippetsOutlined,
} from "@ant-design/icons";

function Home() {
  let history = useHistory();
  let { games } = useGamesDb([]);

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
              title={<Link to={`/game/${game.id}`}>{game.name}</Link>}
              description={`${game.name} @ ${game.created_at}`}
            />
          </List.Item>
        )}
      />

      <LoadTestData />
    </>
  );
}

function LoadTestData() {
  const { setGames } = useGamesDb([]);
  const testData = [
    {
      id: 1,
      name: "julebingo",
      created_at: Date.now(),
    },
  ];
  return (
    <Button
      onClick={() => setGames(testData)}
      type="primary"
      icon={<SnippetsOutlined />}
    />
  );
}

export default Home;
