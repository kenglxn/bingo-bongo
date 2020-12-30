import { Link, useHistory } from "react-router-dom";
import { Button, Card, Tooltip, List } from "antd";
import { useStorage } from "context/Storage";
import {
  FileAddOutlined,
  CheckCircleOutlined,
  SnippetsOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { GameModel } from "models/Game";

function Home() {
  let history = useHistory();
  const { state: games } = useStorage();

  return (
    <Card>
      <Tooltip title="opprett nytt spill">
        <Button
          data-testid="opprett nytt spill"
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
              description={`${game.name}: ${new Date(
                game.created_at
              ).toLocaleString()}`}
            />
          </List.Item>
        )}
      />

      <TestData />
    </Card>
  );
}

function TestData() {
  const { set, create } = useStorage();
  const testData = [new GameModel("julebingo", 1, 10)];
  return (
    <Card title="Testdata fn()">
      <Tooltip title="generer testdata">
        <Button
          onClick={() => {
            set();
            testData.forEach((d) => create(d.toJSON()));
          }}
          type="primary"
          icon={<SnippetsOutlined />}
        />
      </Tooltip>
      <Tooltip title="Slett alt">
        <Button
          onClick={() => set()}
          type="default"
          icon={<DeleteOutlined />}
        />
      </Tooltip>
    </Card>
  );
}

export default Home;
